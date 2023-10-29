import React from 'react';
import { banheiro } from '../../Data/images/dataImages';
import { Link } from 'react-router-dom';

const BanheiroComponent: React.FC = () => {
  return (
    <div className="sala">

      <div className='title_sala'>
        <h1>Jogos De Banheiro</h1>
      </div>

      <div className='connteiner_sala'>
        {banheiro.map(item => (
        <img key={item.id} src={item.image} alt={`Imagem ${item.id}`} className='image_sala'/>
        ))}
      </div>
      <div className='info_sala'>
        <p>Jogos de sala prontos ou sob encomenda.</p>
        <h3>Faça sua encomenda accesando o link a baixo</h3>
        <div><Link 
        to="/contato" className='title_contact'>FAÇA SUA ENCOMENDA</Link></div>
      </div>
    </div>
  );
};

export default BanheiroComponent;