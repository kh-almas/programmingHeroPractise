let a = 5;
let b = 7;

// console.log(z);

// console.log(name);
//
// var name = 'alu'; // undefined
// let name = 'alu'; // reference error
// const name = 'alu'; // reference error


console.log(add(2,3)); // normal function can call before or after initialization
function  add (a, b)
{
    return a + b;
}


console.log(add2(2,3)); // arrow function can not call before initialization
const add2 = (a,b) => a+b;