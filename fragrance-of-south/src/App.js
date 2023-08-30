import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sliders from './components/Sliders';
import Header from './components/Navbar';
import Services from './components/services';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonials from './components/testinomials';
import Footer from './components/Footers';

function App() {
  return (
    <div className="App">
      <Header />
      <Sliders></Sliders>
      <Services/>
      <Menu/>
      <Team/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
