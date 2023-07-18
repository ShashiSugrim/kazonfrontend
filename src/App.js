import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome To Kazon!</h2>
        <div className="Search-bar">
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="7"
            maxlength="50"
            size="30"
            placeholder="Search" // Add this line
          />
        </div>
      </header>
    </div>
  );
}

export default App;
