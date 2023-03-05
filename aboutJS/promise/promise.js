/*
* 39-5
* Fetch return a promises
*
*
* Promise (asynchronous process)
* pending
* resolve
* reject
*/

const getData = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    if (num < 5){
        resolve(num);
    }else {
        reject('no data fount');
    }
})

// console.log(getData); // return object

getData
    .then(data => console.log(data)) // return resolve
    .catch(error => console.log(error)) // catch reject


/*
* Aync/Await
*
* for return error try/catch should use
*/
async function getUsers(){
    const url = '';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}