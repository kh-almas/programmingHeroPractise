//javascript object notation return string
//object
const user = {
    name: 'almas',
    address: 'badda',
    phone: '01111111111',
}

// convert to json
const userJSON = JSON.stringify(user);
/*
* json output
* {"name":"almas","address":"badda","phone":"01111111111"}
*/


const shop = {
    name: 'daraz',
    shop: 'online',
    address: {
        rode: '5/a',
        house: 56,
        area: 'farmgate',
        city: 'dhaka'
    },
    product: ['phone', 'laptop', 'mouse', 'keyboard'],
    homeDelivery: true,
}

// convert to json
const shopJSON = JSON.stringify(shop);
/*{
    //json output
    "name":"daraz",
    "shop":"online",
    "address":{
        "rode":"5/a",
        "house":56,
        "area":"farmgate",
        "city":"dhaka"
    },
    "product":["phone","laptop","mouse","keyboard"],
    "homeDelivery":true
}*/

//convert to object again
const data = JSON.parse(shopJSON);
console.log(data);