/* 5. Create a random number checker
   - Create an array from 1 to 6 with 6 elements
   - Use map method to make them double (like 1 x 2 = 2)
   - Add a button and when you click the button show your random value inside the new array (because of map)
   - Write your normal array above the button inside the page */


$('#start-task5').click(function () {
    let array = [];
    for (let i = 1; i < 7; i++) {
        array.push(Math.trunc(Math.random() * 100));
    }
    array.push("\nThe double of the array is:\n");
    array.map(function (value) {
        array.push(value * 2);
    });
    array.unshift("The random numbers of the array:\n");
    array.pop();
    alert(array.join('   '));
});
