let numbs = 30;
let result = numbs.push(67); // type error
console.log(result);

let address = {
    city: 'barisal',
    postcode: 345,
}

console.log(address.home.building); // type error
console.log(address?.home?.building); // solution

const a = 'abc';
a = 'def'; // type error