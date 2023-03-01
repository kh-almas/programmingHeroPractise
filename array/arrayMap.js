
const numbers = [34, 56, 2, 7, 9];
function getDoubles(numbers)
{
    const newNumbers = [];
    for (const number of numbers)
    {
        const double = doubleIt(number);
        newNumbers.push(double)
    }
    return newNumbers;
}

const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);
console.log(getDoubles(numbers));

const direct = [1,2,3,4,5].map(x => x * 2);
console.log(direct);


const name = ['Almas', 'Emon', 'Evan', 'Mahedi'];
const firstLetter = name.map(n => n[0]);
console.log(firstLetter);
const length = name.map(n => n.length);
console.log(length);


const product = [
    {id: 1, name: 'laptop', price:45000},
    {id: 2, name: 'phone', price:80000},
    {id: 3, name: 'tablet', price:35000}
];
const id = product.map(n => n.id);
console.log(id);


//no return from foreach
const productName = product.forEach(n => console.log(n.name));
// console.log(productName);
