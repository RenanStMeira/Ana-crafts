import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/home";
import Contact from './Pages/Contact/contact';
import Sala from './Pages/Sala/sala';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sala" element={<Sala />} />
        </Routes>
      </Router>
      <WhatsAppButton />
    </div>
  );
};

export default App;
