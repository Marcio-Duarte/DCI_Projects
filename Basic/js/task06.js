/* 6. Create a script that lists everyone in the class from a prompt, 1 prompt per name
   - Ask "How many students are there in the class" and 'what is student #2 name' by prompt */

$('#start-task6').click(function () {
    const fbw10 = ["Costel Cuconoiu", "Bisrate", "Younes", "Parviz", "Cristian Rogojina",
        "Kriss Meyer", "Tim Nauman", "Marcio Duarte", "Daniel Bakare", "Kalu Annas"];

    alert("I will display to you all students from the FBW10");
    fbw10.forEach(function (student, index) {
        alert(`${student} is the student number: ${index + 1}`);
    });

    let question = prompt(`    Now ask me something the class fbw10
    [Hints]\n    How many students are in the class?\n    Who is the student <number>[1-${fbw10.length}]?`);

    if (question.toLowerCase().includes("how many students")) {
        alert(`The class has ${fbw10.length} students`);
    } else if (question.toLowerCase().includes("who is the student")) {
        try {
            let getNumber = question.match(/\d/g).join('');
            console.log(getNumber);
            if (getNumber > 0 && getNumber < fbw10.length + 1) {
                alert(`The student number ${getNumber} is ${fbw10[getNumber - 1]}.`)
            } else {
                alert(`Must be a number between 1 and ${fbw10.length}!!!`);
            }
        } catch (error) {
            console.log(error);
            alert(`Please enter a valid number to get a student. \n[Hint]\nNumber [1-${fbw10.length}].`);
        }
    } else {
        alert("Wrong question");
    }
});


