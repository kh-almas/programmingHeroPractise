let arr = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'aa', 'cc', 'gg', 'dd'];

function uniqueName(data)
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let dataItem = data[i];
        if (newArr.includes(dataItem) === false) //indexOf
        {
            newArr.push(dataItem);
        }
    }
    return newArr;

}

let finalArr = uniqueName(arr);
console.log(finalArr);