import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/home";
import Contact from './Pages/Contact/contact';
import Sala from './Pages/Sala/sala';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import './App.css';
import Cozinha from './Pages/Cozinha/cozinha';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sala" element={<Sala />} />
          <Route path="cozinha" element={<Cozinha />}/>
        </Routes>
      </Router>
      <WhatsAppButton />
    </div>
  );
};

export default App;
