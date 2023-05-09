import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const Red = (props) => {
    return (
        <div className='red'>
            <h1>RED</h1>
        </div>
    )
}

const Blue = (props) => {
    return (
        <div className='blue'>
            <h1>BLUE</h1>
        </div>
    )
}

const Main = (props) => {
    return (
        <div id='container'>

            <div id='navbar'>
                {/* navigation here */}
            </div>

            <div id='main-section'>
                {/* routes here */}
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);