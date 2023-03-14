document.getElementById('submit').addEventListener('click', function (){
    const item = document.getElementById('item');
    const quantity = document.getElementById('quantity');
    const itemValue = item.value;
    const quantityValue = quantity.value;
    item.value = '';
    quantity.value = '';
    setItemInLocalStorage(itemValue, quantityValue);
    displayItemFromLocalStorage();
})

const previousItem = () => {
    let cart = {}
    const storageItem = localStorage.getItem('cart');
    if(storageItem){
        cart = JSON.parse(storageItem);
    }
    return cart;
}

const setItemInLocalStorage = (item, quantity) => {
    const cart = previousItem();
    cart[item] = quantity;
    const cartStr = JSON.stringify(cart);
    localStorage.setItem('cart', cartStr);
}

const displayItemFromLocalStorage = () => {
    const showItem = document.getElementById('showItem');
    showItem.innerHTML = '';
    const items =  previousItem();
    for (const item in items){
        // const quantity = items[item];
        // displayItem(item, quantity);
        const li = document.createElement('li');
        li.innerText = `item: ${item}, quantity: ${items[item]}`;
        showItem.appendChild(li);
    }
}

displayItemFromLocalStorage();