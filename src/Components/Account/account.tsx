import React, { useState, ChangeEvent, FormEvent } from 'react';
import './account.css';

const AccountComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    rua: '',
    bairro: '',
    numero: '',
    cep: '',
    cidade: ''
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para enviar o formulário
  };

  return (
    <div className="container">
      <h2>Criar uma Conta</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Senha:</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />

        <label>Rua:</label>
        <input type="text" name="rua" value={formData.rua} onChange={handleChange} required />

        <label>Bairro:</label>
        <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} required />

        <label>Número:</label>
        <input type="text" name="numero" value={formData.numero} onChange={handleChange} required />

        <label>CEP:</label>
        <input type="text" name="cep" value={formData.cep} onChange={handleChange} required />

        <label>Cidade:</label>
        <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} required />

        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default AccountComponent;
