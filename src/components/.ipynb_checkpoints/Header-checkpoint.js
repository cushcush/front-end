import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header className="Menu-header">
        <div>
            <img src="/logo.png" alt="image" />
            <p className="sub-text">인스타그램 기반 맛집 찾기 서비스! 내가 쓰고 싶어서 만들었다! <br/>
                자체 필터링 기술을 통해 체인점, 광고는 제외하려고 노력!
            </p>
            <nav>
                <Link className="App-link" to='/'>Home</Link> &nbsp;
                <Link className="App-link" to='/search'>search</Link> &nbsp;
                <Link className="App-link" to='/dnd'>dnd</Link> &nbsp;
                <Link className="App-link" to='/card'>card</Link> &nbsp;

                {/* <Link className="App-link" to='/grid'>grid</Link> &nbsp; */}

            </nav>
        </div>
  </header>
)

export default Header
