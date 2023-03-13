const setItem = () => {
    localStorage.setItem('phone', 'samsung');
}


const getItem = () => {
    const value = localStorage.getItem('phone');
    // console.log(value);
    document.getElementById('viewItem').innerText = value;
}


const removeItem = () => {
    const value = localStorage.removeItem('phone');
    console.log(value);
}



const arrSetItem = () => {
    /// array converted into string and set the value in local storage
    const arr = [34, 456, 23, 567,23, 457, 2, 765]
    localStorage.setItem('ages', arr);
}


const arrGetItem = () => {
    const value = localStorage.getItem('ages');
    // console.log(value);
    document.getElementById('arrayItemView').innerText = value;
}


const arrRemoveItem = () => {
    const value = localStorage.removeItem('ages');
    console.log(value);
}


const objSetItem = () => {
    const person = {
        name: 'almas',
        age: 96,
        place: 'badda',
    }

    // localStorage.setItem('person', person); // set [object Object] in local storage

    // object need converted manually
    const converted = JSON.stringify(person);
    localStorage.setItem('person', converted);
}


const objGetItem = () => {
    const value = localStorage.getItem('person');
    // console.log(value);
    document.getElementById('objItemView').innerText = value;

    const converted = JSON.parse(value);
    console.log(converted.name);
}


const objRemoveItem = () => {
    const value = localStorage.removeItem('person');
    console.log(value);
}