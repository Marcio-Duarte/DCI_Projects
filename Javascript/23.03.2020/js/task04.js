/* 4. Find the biggest element in an array of numbers
   - Create a script that prompts for a new number and which then gets added to the above array and find the biggest number again.
   - I want to see function, for loop and if statement in your solution. Please think a solution which uses all of them */

function isInteger(value) {
    let pattern = /^[-+]?\d+$/;
    return pattern.test(value);
}

$('#start-task4').click(function () {
    let numbers = [];
    for (let i = 0; i < 5; i++) {
        let value = prompt("Please enter a number");
        if (isInteger(value)) {
            numbers.push(value);
        } else {
            i--;
            alert("Please enter a valid number");
        }
    }
    alert(`The biggest number is ${Math.max(...numbers)}`);
});