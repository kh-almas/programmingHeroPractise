function getData()
{
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url) // get the data from url
        .then(res => res.json()) // convert the data to json object
        .then(data => console.log(data)) //display the json object
}

function getUser()
{
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url) // get the data from url
        .then(res => res.json()) // convert the data to json object
        .then(data => processUser(data)) //display the json object
}

function processUser(data)
{
    const ul = document.getElementById('users');
    for (const user of data)
    {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
    // console.log(ul)
}