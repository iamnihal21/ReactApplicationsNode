import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import TextForm from './components/textForm';
import LightDarkMode from './components/LightDarkModes';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'rgb(3, 4, 41)';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'rgb(3, 4, 41)';
    }
  };

  return (
    <Router>
      <Navbar title="textUtils" about="About TextUtils" mode={mode} toggle={toggleMode} />
      <Routes>
        <Route path="/" element={<TextForm heading="TextUtils" />} />
        <Route path="/light-dark-mode" element={<LightDarkMode mode={mode} />} />
      </Routes>
    </Router>
  );
}
export default App;