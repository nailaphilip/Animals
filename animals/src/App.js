import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimalsPage from './pages/AnimalsPage';
import Birds from './pages/BirdsPage';
import About from './pages/About';


import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animals" element={<AnimalsPage />} />
        <Route path="/Birds" element={<Birds />} />
        <Route path="/About" element={<About />} />
      </Routes>
  </BrowserRouter>
    );
  }
}

export default App;

