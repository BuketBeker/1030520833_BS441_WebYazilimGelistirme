import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Game from './Game';
import reportWebVitals from './reportWebVitals';
import {Link, Route, Routes} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <div>
            <nav style={{textAlign: "center", marginTop: 10, marginBottom: 10}}>
                <div style={{backgroundColor: "white", height: 150, width: 800, marginLeft: 420, paddingTop: 10, marginBottom: 10}}>
                    <h1>
                        Taş Kağıt Makas oyununda iki oyun modu bulunmaktadır.
                    </h1>
                    <p>
                        <b>Oyun Modu 1: </b> Bu oyun modunda 1 Kullanıcı ve 1 Bilgisayar vardır.
                    </p>
                    <p>
                        <b>Oyun Modu 2: </b> Bu oyun modunda 2 Bilgisayar vardır.
                    </p>
                </div>
                <div>
                    <button style={{fontSize: 35, backgroundColor: "#16b1c9", marginRight: 5}}>
                        <Link to="/app">Oyun Modu 1</Link>
                    </button>
                    <button style={{fontSize: 35, backgroundColor: "#16b1c9", marginLeft: 5}}>
                        <Link to="/game">Oyun Modu 2</Link>
                    </button>
                </div>
            </nav>
            <Routes>
                <Route path="/app" element={<App />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </div>
    </Router>
);

reportWebVitals();
