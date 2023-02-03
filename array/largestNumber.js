let numbers = [45, 65, 78, 34, 99, 120, 40, 90, 70, 40];

function find_largest(numbers) {
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++)
    {
        const element = numbers[i];
        if(element > largest)
        {
            largest = element;
        }
    }
    return largest;
}

let largeNumber = find_largest(numbers);
console.log(largeNumber);