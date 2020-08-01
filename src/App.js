import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Awesome! <code>#cushcush</code> is now here!
        </p>
        <p>
          아무말아무말아무말 -한빛 <br/>
          우갸갸갸우갸갸 - 광훈
          - 규빈
          - 민규
          - 찬란
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's learn React
        <a
          href="https://devhints.io/react"
          target='_blank'>
          react-cheatsheet
        </a>
        </a>
      </header>
    </div>
  );
}

export default App;
