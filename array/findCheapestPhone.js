const phones = [
    {name: 'abc', camera: '12px', price: 12000,},
    {name: 'acd', camera: '12px', price: 12500,},
    {name: 'aef', camera: '12px', price: 22000,},
    {name: 'egc', camera: '12px', price: 17000,},
    {name: 'jfd', camera: '12px', price: 8000,},
    {name: 'vnm', camera: '12px', price: 19300,},
    {name: 'por', camera: '12px', price: 11900,},
];

function cheapestPhone(data)
{
    let cheapest = data[0];
    for (let i=0; i < data.length; i++)
    {
        const phone = data[i];
        if (cheapest.price > phone.price)
        {
            cheapest = phone;
        }
    }
    return cheapest;
}


let myChoose = cheapestPhone(phones);
console.log(myChoose);