const numbers = [12, 34, 65, 79, 92, 36, 44, 77];

// 0 is initial value here
// const total = numbers.reduce((previous, current) => previous + current, 0);
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0);
console.log(total);

const product = {
    id: 1,
    name: 'laptop',
    price:45000,
    address: {
        village: 'abc',
        area: 'pqr',
        city: 'dhaka',
    }
};


const city = product.address.city;
console.log(city);

// find something by compare with variable . dosen't work
const findAddress = 'area';
const fromProduct = product.address[findAddress];
console.log(fromProduct);