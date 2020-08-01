import React from 'react'
import logo from '../logo.svg';
import './Home.css';

const Home = () => (
  <div>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Awesome! <code>#cushcush</code> is now here!
        </p>
        <p>
          아무말아무말아무말 -한빛 <br/>
          우갸갸갸우갸갸 - 광훈 <br/>
          - 규빈 <br/>
          - 민규 <br/>
          - 찬란 <br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's learn React
        </a>
        <a
          className="App-link"
          href="https://devhints.io/react"
          target='_blank'
          rel="noopener noreferrer"
        >
          react-cheatsheet
        </a>
      </header>
  </div>
)

export default Home