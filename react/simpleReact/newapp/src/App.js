import logo from './logo.svg';
import './App.css';

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

                <Logo></Logo>
                {
                    arr.map(data => <Hello name={data}></Hello>)
                }
                <div>
                    <p>Addition result: {numbers[0] + numbers[1] + numbers[2]}</p>
                </div>
                {
                    persons.map(person => <Person data={person}></Person>)
                }

            </header>
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
