import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import TagManager from 'react-gtm-module';
import ReactGA from "react-ga4";
const tagManagerArgs = {
  gtmId: 'GTM-MD6W7G2V' 
};
TagManager.initialize(tagManagerArgs);
ReactGA.initialize("G-VY7SR4146Y"); 
ReactGA.send("pageview"); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
