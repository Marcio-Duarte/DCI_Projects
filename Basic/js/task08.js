/* 8. Create a script that asks for x amount of people.
   - And then asks for their ages and finds the oldest and youngest age. As well as the average age
   - Create an empty array and push all entered ages by promt in that array
   - Print the oldest, youngest and the average ages. using console */

$('#start-task8').click(function () {
    let ages = [];
    let age = 0;
    let numberOfPersons;

    while (!isInteger(numberOfPersons)) {
        numberOfPersons = parseInt(prompt("How many persons?"));
        if (!isInteger(numberOfPersons)) {
            alert("Please enter a valid number!!!");
        }
    }
    for (var i = 0; i < numberOfPersons; i++) {
        age = parseInt(prompt("Enter an age?"));
        if (isInteger(age)) {
            ages.push(age);
        } else {
            alert("Please enter a valid number!!!");
            i--;
        }
    }
    alert(`    The oldest age is ${Math.max(...ages)}
    The youngest age is ${Math.min(...ages)}
    The average age is ${(ages.reduce(function (a, b) {
        return a + b;
    })) / ages.length}`);
});