import React, { useState, FormEvent, ChangeEvent } from 'react';
import './contactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    modelo: '' 
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section className='section_contact'>
      <div className='containner_contact'>
        <h1>Deixe Sua Mensagem</h1>
      </div>

      <div className='container_form'>
        <form className='form' onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />

          <label>Telefone:</label>
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />

          <label>Qual modelo deseja?</label>
          <select className='option_container' name="modelo" value={formData.modelo} onChange={handleChange}>
            <option className='option1' value="">Selecione um modelo</option>
            <option className='option' value="modelo1">Sala</option>
            <option className='option' value="modelo2">Cozinha</option>
            <option className='option' value="modelo2">Banheiro</option>
            <option className='option' value="modelo2">Passadeira</option>
            <option className='option' value="modelo2">Caminhos de mesa</option>
          </select>

          <label>Mensagem:</label>
          <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} cols={40} rows={8}></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
