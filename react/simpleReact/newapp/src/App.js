import logo from './logo.svg';
import './App.css';

const numbers = [23, 27, 55];
const {name, address, phone} = {
  name: 'almas',
  address: 'badda',
  phone: '01111111111111'
}
const personInfoStyle = {
  color: 'green',
  backgroundColor: 'white',
  padding: '0 30px',
  borderRadius: '15px',
  marginBottom: '10px',
}


function App() {
  return (
      <div className="App">
        <header className="App-header">

          <Logo></Logo>
          <Hello name="Moon"></Hello>
          <Hello name="Sun"></Hello>
          <Hello name="Pankha" on="Ghurte thako"></Hello>


          <div>
            <p>Addition result: {numbers[0] + numbers[1] + numbers[2]}</p>
          </div>
          <Person></Person>
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
        <p>{props.on}</p>
      </div>
  );
}

function Person() {
  return (
      <div style={personInfoStyle}>
        <p>Person info:</p>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Phone: {phone}</p>
      </div>
  );
}

export default App;
