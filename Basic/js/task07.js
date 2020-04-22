/* 7. Create an script that calculates the average number from an array
   - Numbers then can be added from prompt and new average given. */

$('#start-task7').click(function () {
    let numbers = [];
    var action = "Calculate the average number of an array";
    var question = "Add a number to calculate the average."
    var average = 0;
    let number;
    while (true) {
        if (confirm(`${action}`)) {
            number = parseInt(prompt(question));
            if (isInteger(number)) {
                numbers.push(number);
                question = "Add another number to calculate the average.";
                average = (numbers.reduce(function (a, b) {
                    return a + b;
                }) / numbers.length).toFixed(2);
                action = `The current average is ${average}\nDo you want to continue ?`;
            } else {
                alert("Insert a valid number!!!");
            }
        } else {
            break;
        }
    }
});