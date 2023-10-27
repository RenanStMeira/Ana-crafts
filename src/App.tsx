import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from "./Pages/Home/home";
import Contact from './Pages/Contact/contact';
import './App.css';

function App() {

  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/contato" element={ <Contact /> } />
      </Routes>
    </Router>
    
   </div>
  )
}

export default App
