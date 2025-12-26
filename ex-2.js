// Exercise #2: Sum the Numbers
let numbers = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here

//แบบ for loop
// for(let i = 0 ; i < numbers.length ; i++) {
//     total = numbers[i] + total
//     //console.log(total);
// }

//แบบ for of loop
for (let i of numbers) {
    total = i + total
    // console.log(total);
}
console.log(total);
