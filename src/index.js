import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

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
        <BrowserRouter>
        <div id='container'>

            <div id='navbar'>
                <Link to='/blue'>Go to Blue</Link>
                <Link to='/red'>Go to Red</Link>
            </div>

            <div id='main-section'>
                <Routes>
                    <Route path='/blue' element={<Blue />}/>
                    <Route path='/red' element={<Red />}/>
                    <Route path='/' element={Red} />
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);