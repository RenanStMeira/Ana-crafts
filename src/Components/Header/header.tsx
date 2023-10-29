import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import WhatsImage from '../../../images/whstass.png';
import Email from '../../../images/email.png';
import Home from '../../../images/home.png';
import Login from '../../../images/login.png';
import './header.css';

interface FormData {
  email: string;
  senha: string;
}

const Header: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    senha: '',
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <header className='container_header'>
      <div>
        <Link to='/'>
          <img className='img_home' src={Home} alt='' />
        </Link>
      </div>
      <div className='container_whats'>
        <img src={WhatsImage} alt='' width={50} />
        <a href='https://api.whatsapp.com/send?phone=5518935002592' target='_blank'>WhatsApp</a>
      </div>

      <div className='container_email'>
        <img src={Email} alt='' width={40} />
        <p>anaa.paula.oliver@gmail.com</p>
      </div>

      <div className='containner_login'>
        <p onClick={openModal} className='login-button'>
            <div className='container_link_login'>
                <img src={Login} alt='Login' />
                <span>Login /</span>
                <Link to='/cadastro'>Cadastre-se</Link>
            </div>
          
        </p>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel='Login Modal'
          className='modal login-modal'
        >
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Senha:</label>
            <input
              type='password'
              name='senha'
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <button type='submit' style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 20px', margin: '10px' }}>Entrar</button>
          </form>
            <button onClick={closeModal} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
            Fechar
            </button>

        </Modal>
      </div>

      <div className='container_info'>
        <Link to='/contato'>Fale conosco</Link>
      </div>
    </header>
  );
};

export default Header;
