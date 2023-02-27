//function declaration
function add(a,b)
{
    const result = a + b;
    return result;
}

// Function expression
const add1 = function add1(a,b)
{
    const result = a + b;
    return result;
}

// Function expression with anonymous function
const add2 = function (a,b)
{
    const result = a + b;
    return result;
}

const add3 = function (a,b)
{
    return a + b;
}

const add4 = (a, b) => a + b; //Arrow function

const fullName = (first, last) => first + ' ' + last;

//without parameter
const getPie = () => first + ' ' + last;

//one parameter. Both are correct.
const singleParameter = (one) => first + ' ' + last;
const oneParameter = one => first + ' ' + last;

//multiline arrow function. in this arrow function need return something.
const multiline = (a, b, c, d) =>{
    const one = a + b;
    const two = one * c;
    const three = two - d;
    return three;
};

console.log(multiline(2, 5, 6, 1));