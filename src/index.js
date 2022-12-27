import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import App from './App';
import Game from './Game';
import reportWebVitals from './reportWebVitals';
import {Link, Route, Routes} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <div>
            <nav className={styles.nav}>
                <button>
                    <Link to="/app">Oyun Modu 1</Link>
                </button>
                <button>
                    <Link to="/game">Oyun Modu 2</Link>
                </button>
            </nav>
            <Routes>
                <Route path="/app" element={<App />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </div>
    </Router>
);
//    <App />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
