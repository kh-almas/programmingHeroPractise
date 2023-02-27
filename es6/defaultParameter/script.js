function add(a, b)
{
    // console.log(a, b);
    // if(b === undefined)
    // {
    //     b = 0;
    // }
    b = b || 0;
    const result = a + b;
    return result;
}

const result = add(5);
console.log(result);


//ES6 default parameter
function anotherAdd(a = 0, b = 0)
{
    const result = a + b;
    return result;
}

const anotherResult = anotherAdd(50);
console.log(anotherResult);