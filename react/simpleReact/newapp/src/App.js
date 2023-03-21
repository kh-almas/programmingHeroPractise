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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="container">
          <h3>Hello, react</h3>
        </div>
        <div>
          <p>Addition result: {numbers[0] + numbers[1] + numbers[2]}</p>
        </div>
        <div style={personInfoStyle}>
          <p>Person info:</p>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{marginBottom: '30px'}}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
