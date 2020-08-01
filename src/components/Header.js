import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header className="Menu-header">
        <nav>
            <Link className="App-link" to='/'>Home</Link> &nbsp;
            <Link className="App-link" to='/search'>search</Link> &nbsp;
            <Link className="App-link" to='/dnd'>dnd</Link> &nbsp;
            <Link className="App-link" to='/card'>card</Link> &nbsp;
            
            {/* <Link className="App-link" to='/grid'>grid</Link> &nbsp; */}
            
        </nav>
  </header>
)

export default Header
