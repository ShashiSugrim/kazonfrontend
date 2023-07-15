import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h2>Welcome To Kazon!</h2>
        <h3>Search</h3>
        <input type="text" id="name" name="name" required
       minlength="5" maxlength="50" size="8" />
      </header>
    </div>
  );
}

export default App;
