import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: 'bottom center',
  timeout: 2000,
  offset: '30px',
  transition: 'fade',
  type: 'error'
}


ReactDOM.render(
  <React.StrictMode>
<AlertProvider template={AlertTemplate} {...options} >
    <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
