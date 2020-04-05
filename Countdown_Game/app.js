/* Stores the game values */
let game = {
    clock: ['&nbsp', '0', ':', '00'],
    time: 0, /* Controls the game timing */
    secretAnswer: '',
    TimmeRunning: false, /* Saves the state of the game, if it is currently running */
    MathRandom: false, /* Level 1 status */
    primary_number: document.getElementById('primary-number'),
    secondary_number: document.getElementById('secondary-number'),
    GuessWord: false, /*  Level 2 status*/
    tries: 0, /* Counts the remaining attempts to to guess the word. */
    triedChars: '',
    secretWord: '',
}
/* PART 1: COUNTDOWN TIMER */

function timer() {
    document.getElementById('timer').innerHTML = game.clock.join('');
    document.getElementById('timer-span').style.display = 'inline';
    if (game.clock[3] == 0) {
        game.clock[3] = 60;
        game.clock[1]--;
    }
    if (--game.clock[3] < 10) {
        game.clock[3] = '0' + game.clock[3];
    }
    document.getElementById('timer').innerHTML = game.clock.join('');
    if (game.clock[1] == 0 && game.clock[3] == 0) {
        stopGame();
        if (confirm("Time is hover!!!\nDo you want to try again?")) {
            start();
        } else {
            game.TimmeRunning = false;
            stardMathRandom();
            document.getElementById('right').innerHTML = '';
            stopGame();
        }
    }
};

/* ********************************************************************* */

/* PART 2: GUESS MATH ADDITION */

function stardMathRandom() {
    if (!game.MathRandom) {
        game.primary_number.innerHTML = Math.floor(Math.random() * 100);
        game.secondary_number.innerHTML = Math.floor(Math.random() * 100);
    } else {
        game.primary_number.innerHTML = '';
        game.secondary_number.innerHTML = '';
    }
    document.getElementById('guess').value = 0;
};

/* ********************************************************************* */

/* PART 3: COLOR CHANGE */
function getRndColor() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

/* ********************************************************************* */

/* PART 4: GUESS WORD */

function startGuessWord() {
    if (!game.GuessWord) {
        let words = ['Marcio', 'School', 'World'];
        game.secretWord = words[Math.floor(Math.random() * words.length)];
        game.secretAnswer = new Array(game.secretWord.length).fill('_');
        game.tries = 12;
        game.triedChars = [];
        document.getElementById('right').innerHTML = game.secretAnswer.join('');
        document.getElementById('remain').innerHTML = game.tries;
        document.getElementById('wrong').innerHTML = game.triedChars;
    }
}

function checkChars(char) {
    if (game.secretWord.toLowerCase().includes(char)) {
        for (const index in game.secretWord) {
            if (game.secretWord[index].toLowerCase() == char) {
                game.secretAnswer[index] = game.secretWord[index];
            }
        } document.getElementById('right').innerHTML = game.secretAnswer.join('');
    } else if (!game.triedChars.includes(char)) {
        game.triedChars.push(char);
        document.getElementById('wrong').innerHTML = game.triedChars.join(' ');
        document.getElementById('remain').innerHTML = --game.tries;
    }
    if (game.tries < 1) {
        alert(`You dont have more tries!!! \nThe right word was ${game.secretWord}.`);
        document.getElementById('right').innerHTML = '';
        stopGame();
    } else if (!game.secretAnswer.includes('_')) {
        game.GuessWord = true;
        checkEndGame();
    }
}

function checkEndGame() {
    if (game.GuessWord && game.MathRandom) {
        stopGame();
        if (confirm("Congratulations!!!\nYou passed all levels\nTry again?")) {
            start();
        } else {
            document.getElementById('right').innerHTML = '';
        }
    }
}

function stopGame() {
    game.clock[3] = '00';
    document.getElementById('timer').innerHTML = game.clock.join('');
    document.getElementById('timer-span').style.display = 'none';
    game.primary_number.innerHTML = '';
    game.secondary_number.innerHTML = '';
    document.getElementById('guess').value = 0;
    document.getElementById('math-result').innerHTML = '';
    document.getElementById('wrong').innerHTML = '';
    document.getElementById('remain').innerHTML = '';
    game.TimmeRunning = false;
    clearInterval(game.time);
}

function start() {
    if (!game.TimmeRunning) {
        game.TimmeRunning = true;
        game.MathRandom = false;
        game.GuessWord = false;
        game.clock[3] = 26;
        game.time = setInterval(timer, 1000);
        timer();
        stardMathRandom();
        startGuessWord();
    }
}

/* Event Buttons */
document.getElementById('btn').addEventListener('click', function () {
    if (!game.MathRandom) {
        let total = parseInt(game.primary_number.innerText) + parseInt(game.secondary_number.innerText);
        if (parseInt(document.getElementById('guess').value) === total) {
            alert('Correct!!!');
            document.getElementById('math-result').innerHTML = "Passed";
            game.MathRandom = true;
        } else {
            alert(`Wrong answer, the correct answer was ${total}!!!`);
            stardMathRandom();
        }
    }
});

document.getElementById('buttonColor').addEventListener('click', function () {
    document.getElementById('canvas').style.background = getRndColor();
});

document.onkeypress = function (event) {
    if (!game.GuessWord && game.MathRandom) {
        checkChars(event.key.toLowerCase());
    }
};

document.getElementById('start-btn').addEventListener('click', function () {
    start();
});