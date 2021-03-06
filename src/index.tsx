import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MapsApp from "./MapsApp";

if (!navigator.geolocation) {
    alert('Geolocation is not available');
    throw new Error('Geolocation is not available');
}

ReactDOM.render(
    <React.StrictMode>
        <MapsApp/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
