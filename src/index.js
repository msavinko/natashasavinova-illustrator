import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {getPictures, getTravel, getWonder, getCeramics, getVietnam, getNauka, getMaze, getHome} from "./state";

ReactDOM.render(
  <React.StrictMode>
    <App getPictures={getPictures} getTravel={getTravel} getWonder={getWonder} getCeramics={getCeramics} getVietnam={getVietnam} getNauka={getNauka} getMaze={getMaze} getHome={getHome}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
