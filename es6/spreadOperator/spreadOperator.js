const maxNumber = Math.max(2, 240, 780, 45, 67, 98);
// console.log(maxNumber);

const numbers = [78, 45, 67, 98];

// spread operator is consist with ...

// console.log(Math.max(...numbers));
// console.log(...numbers);

//can not insert value in one array
// const numbers2 = numbers;

// for inert value in one array
const numbers2 = [...numbers];
const numbers3 = [68, 93, ...numbers, 46];

numbers.push(457);
numbers2.push(47);
console.log(numbers);
console.log(numbers2);
console.log(numbers3);