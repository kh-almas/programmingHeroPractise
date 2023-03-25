import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const numbers = [23, 27, 55];

// const {name, address, phone} = [
//     {name: 'Pias', address: 'badda', phone: '01111111111111'},
//     {name: 'Noman', address: 'Abdullapur', phone: '02222222222222'},
//     {name: 'Jon', address: 'Dhanmondi', phone: '033333333333333'},
// ];

const persons = [
    {name: 'Pias', address: 'badda', phone: '01111111111111'},
    {name: 'Noman', address: 'Abdullapur', phone: '02222222222222'},
    {name: 'Jon', address: 'Dhanmondi', phone: '033333333333333'},
];

const personInfoStyle = {
    color: 'green',
    backgroundColor: 'white',
    padding: '0 30px',
    borderRadius: '15px',
    marginBottom: '10px',
}


function App() {
    const arr = ['Moon', 'Sun', 'Pankha', 'Mosha'];
    return (
        <div className="App">
            <header className="App-header">

                <Counter></Counter>

                {/*<Logo></Logo>*/}
                {/*{*/}
                {/*    arr.map(data => <Hello name={data}></Hello>)*/}
                {/*}*/}
                {/*<div>*/}
                {/*    <p>Addition result: {numbers[0] + numbers[1] + numbers[2]}</p>*/}
                {/*</div>*/}
                {/*{*/}
                {/*    persons.map(person => <Person data={person}></Person>)*/}
                {/*}*/}
            </header>
        </div>
    );
}

function Counter(){
    const [count, setCount] = useState(10);
    // console.log(state);

    // const increase = () => {
    //     // const newCount = count++; // Uncaught TypeError: Assignment to constant variable.
    //     const newCount = count+1;
    //     setCount(newCount);
    // }

    const increase = () => setCount(count+1);
    const decrease = () => setCount(count-1);


    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

function Logo() {
    return (
        <img src={logo} className="App-logo" alt="logo" />
    );
}

function Hello(props) {
    return (
        <div className="container">
            <h3>Hello, {props.name}</h3>
        </div>
    );
}

function Person(props) {
    return (
        <div style={personInfoStyle}>
            <p>Person info:</p>
            <p>Name: {props.data.name}</p>
            <p>Address: {props.data.address}</p>
            <p>Phone: {props.data.phone}</p>
        </div>
    );
}

export default App;
