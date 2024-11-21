import React from 'react';
import './assets/css/portfolio.css';
import Header from "./components/Header";
import Head from "./components/Head";
import {Nav} from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";

function App() {
    return (
        <div className="App">
            <Head/>
            <Header/>
            <Nav/>
            <About/>
            <Resume/>
            <Service/>
            <Portfolio/>
        </div>
    );
}

export default App;
