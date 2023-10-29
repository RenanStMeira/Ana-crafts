import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/home";
import Contact from './Pages/Contact/contact';
import Sala from './Pages/Sala/sala';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import './App.css';
import Cozinha from './Pages/Cozinha/cozinha';
import Banheiro from './Pages/Banheiro/banheiro';
import Caminho from './Pages/Caminho/caminho';
import Passadeira from './Pages/Passadeira/passadeira';
import Account from './Pages/Account/Account';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sala" element={<Sala />} />
          <Route path="cozinha" element={<Cozinha />}/>
          <Route path="/banheiro" element={<Banheiro />}/>
          <Route path="/caminho" element={<Caminho />}/>
          <Route path="/passadeiras" element={<Passadeira />}/>
          <Route path="/cadastro" element={<Account />}/>
        </Routes>
      </Router>
      <WhatsAppButton />
    </div>
  );
};

export default App;
