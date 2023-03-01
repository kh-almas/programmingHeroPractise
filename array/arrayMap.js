
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