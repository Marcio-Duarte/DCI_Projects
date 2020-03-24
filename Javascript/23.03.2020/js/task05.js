/* 5. Create a random number checker
   - Create an array from 1 to 6 with 6 elements
   - Use map method to make them double (like 1 x 2 = 2)
   - Add a button and when you click the button show your random value inside the new array (because of map)
   - Write your normal array above the button inside the page */

let array = [];
for (let i = 1; i < 10; i++) {
    array.push(Math.trunc(Math.random() * 100));
}
console.log(array);
array.map(function (value) {
    console.log(value * 2);
});