const fetchData = () =>
{
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(response => response.json())
        .then(json => useData(json))
}

const useData = (allData) => {
    const info = document.getElementById('info');

    //by use for
    for (const data of allData){

        // first way

        // const name = document.createElement('h3');
        // name.innerText = 'Country Name:' + ' ' + data.name.common;
        // info.appendChild(name);
        //
        // const capital = document.createElement('h5');
        // capital.innerText = 'Countries capital:' + ' ' + data.capital ? data.capital[0] : 'no capital';
        // info.appendChild(capital);


        // second way

        // const div = document.createElement('div');
        // div.classList.add('border_bottom');
        // div.innerHTML = `
        //     <h3>Country Name: ${ data.name.common }</h3>
        //     <h3>Countries capital: ${ data.capital ? data.capital[0] : 'no capital' }</h3>
        // `;
        // info.appendChild(div);
        // console.log(data.capital[0]);
    }

    //by use foreach
    allData.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('border_bottom');
        div.innerHTML = `
            <h3>Country Name: ${ data.name.common }</h3>
            <h3>Countries capital: ${ data.capital ? data.capital[0] : 'no capital' }</h3>
            <button onclick="showDetails('${data.cca2}')">see details</button>
        `;
        info.appendChild(div);
    })

}

const showDetails = (data) => {
    const url = `https://restcountries.com/v2/alpha/${data}`;
    fetch(url)
        .then(response => response.json())
        .then(json => pushSingleCountryInfo(json))
}

const pushSingleCountryInfo = (data) => {
    const section = document.getElementById('showInfo');
    section.innerHTML = `
            <h1>Single country Info</h1>
            <h3>Country Name: ${ data.name }</h3>
            <h3>Countries capital: ${ data.capital ? data.capital : 'no capital' }</h3>
            <img src="${data.flags.png}" alt="img">

        `;
}

fetchData();