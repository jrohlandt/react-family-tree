import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // https://codepen.io/chuongdang/pen/lcnsC
  return (
    <div>
      <div class="tree">
        <ul>
          <li>
            <a href="#">Parent</a>
            <ul>
              <li>
                <a href="#">Child</a>
                <ul>
                  <li>
                    <a href="#">Grand Child</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Child</a>
                <ul>
                  <li><a href="#">Grand Child</a></li>
                  <li>
                    <a href="#">Grand Child</a>
                    <ul>
                      <li>
                        <a href="#">Great Grand Child</a>
                      </li>
                      <li>
                        <a href="#">Great Grand Child</a>
                      </li>
                      <li>
                        <a href="#">Great Grand Child</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Grand Child</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
