import React from 'react';
import './assets/css/portfolio.css';
import Header from "./components/Header";
import Head from "./components/Head";
import {Nav} from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import StatisticsSection from "./components/Statistics";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    return (
        <div className="App">
            <Head/>
            <Header/>
            <Nav/>
            <About/>
            <Resume/>
            <Service/>
            <StatisticsSection/>
            <Portfolio/>
        </div>
    );
}

export default App;
