import React, {useEffect, useState} from 'react';
import axios from "axios";
import logo from '../logo.svg';
import './Home.css';

const Home = () => (
  <div>
    <header className="App-header">
        <div>{RestApiHooksComponent()}</div>
        <p>
          Awesome! <code>#cushcush</code> is now here!
        </p>
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

function RestApiHooksComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://cush.kr:7770/api/find")
      .then(result => setData(result.data)); 
  }, []);

  return (
    <div>
      {data.map(({id, img, url, hashtag, userID }) => (
          <div class="card">
              <div class="card-header">
                  <a href={url}>
                      <img src={img} />
                  </a><br/>
              </div>
              <div class="card-body">
                  <div>
                    {keywordBreaks(hashtag)}
                  </div>
                  <br/>
                  <p class="body-content">{id}, {userID}</p>
              </div>
          </div>
      ))}
    </div>
  );
};

      /*{data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
        ))}*/

const keywordBreaks = string => 
  string.split(' ').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      <p class="keyword-btn">{text}</p>
    </React.Fragment>
  ));

export default Home