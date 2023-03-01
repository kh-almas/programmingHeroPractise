const numbers = [12, 54, 66, 46, 35, 98, 85, 61, 8];
const bigNums = numbers.filter(num =>  num > 20);
console.log(bigNums);
const tiny = numbers.filter(num =>  num < 20);
console.log(tiny);
const even = numbers.filter(num =>  num%2 === 0);
console.log(even);
const odd = numbers.filter(num =>  num%2 === 1);
console.log(odd);

// find always give one value where filter gives all
const findEven = numbers.find(num =>  num%2 === 0);
console.log(findEven);
const findOdd = numbers.find(num =>  num%2 === 1);
console.log(findOdd);