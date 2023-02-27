function add(a, b) //a,b is parameter
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

const result = add(5);// 5 is argument
console.log(result);


//ES6 default parameter
function anotherAdd(a = 0, b = 0) //a,b is parameter
{
    const result = a + b;
    return result;
}

const anotherResult = anotherAdd(50); // 50 is argument
console.log(anotherResult);