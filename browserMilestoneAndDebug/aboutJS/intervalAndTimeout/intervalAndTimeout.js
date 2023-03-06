/*
* clearTimeout(timeOutId);
* clearInterval(intervalId);
 */

console.log(1);
console.log(2);
console.log(3);
const timeOutId = setTimeout(() => {
    console.log(4);
},3000)
console.log(5);
// clearTimeout(timeOutId); //for stop setTimeout execution
console.log(6);
let num = 7;
const intervalId = setInterval(() => {
    console.log(++num);
    if (num === 20){
        clearInterval(intervalId);
    }
}, 500)
console.log(8);
console.log(9);
console.log(10);
console.log(11);