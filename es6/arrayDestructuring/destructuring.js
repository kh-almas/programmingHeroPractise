const fish = {
    name: 'king Hilsa',
    address: 'chandpur'
}

// const name = fish.name;
// const address = fish.address;
// const phone = fish.phone;

// access the object value. variable name should be object property name
const {name} = fish;
const {address} = fish;

console.log(name);
console.log(address);


//change the variable name like this phone:phoneNumber
const {color, phone:phoneNumber, price} = {
    color: 'silver',
    phone: '01111111111',
    price: 5000,
}
console.log(phoneNumber);
console.log(color);
console.log(price);


//array destructuring
// z hold all other value
const [a, b, c, d, e, ...z] = [26, 78, 39, 87, 99, 100, 23, 56, 72, 16];
console.log(d);
console.log(c);
console.log(b);
console.log(z);