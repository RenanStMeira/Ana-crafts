import Passadeira from '../../../images/passadeira.jpeg';
import CaminhoMesa from '../../../images/caminhoDeMesa.png';
import JogoBanheiro from '../../../images/jogoBanhiero.jpeg';
import Cozinha from '../../../images/cozinha.jpeg';
import Sala from '../../../images/sala.jpeg';

import './offers.css';
import ButtonMl from '../ButtonML/buttonMl';

export default function Offers() {
    return(
        <section className='section_offers'>
            <div className='title_container'>
                <h1 className='title_offers'>Ofertas</h1>
            </div>

            <div className='offers'>
                <div className='container_offers'>
                    <img className='offers_image' src={Passadeira} alt="" />
                    <h2>Passadeira</h2>
                    <p>R$: 130,00</p>
                    <a href="" className='link_pay'>Comprar</a>
                    <ButtonMl />
                </div>
                <div className='container_offers'>
                    <img className='offers_image' src={CaminhoMesa} alt="" />
                    <h2>Caminho de mesa</h2>
                    <p>R$: 130,00</p>
                    <a href="" className='link_pay'>Comprar</a>
                    <ButtonMl />
                </div>
                <div className='container_offers'>
                    <img className='offers_image' src={JogoBanheiro} alt="" />
                    <h2>Jogo de banheiro</h2>
                    <p>R$: 130,00</p>
                    <a href="" className='link_pay'>Comprar</a>
                    <ButtonMl />
                </div>
                <div className='container_offers'>
                    <img className='offers_image' src={Cozinha} alt=""/>
                    <h2>Jogo de cozinha</h2>
                    <p>R$: 130,00</p>
                    <a href="" className='link_pay'>Comprar</a>
                    <ButtonMl />
                </div>
                <div className='container_offers'>
                    <img className='offers_image' src={Sala} alt=""/>
                    <h2>Tapete para Sala</h2>
                    <p>R$: 130,00</p>
                    <a href="" className='link_pay'>Comprar</a>
                    <ButtonMl />
                </div>
                <div className='container_offers'>
                    <img className='offers_image' src={CaminhoMesa} alt="" />
                    <h2>Passadeira</h2>
                    <p>R$: 130,00</p>
                    <a href="" className='link_pay'>Comprar</a>
                    <ButtonMl />
                </div>
            </div>
            
        </section>
    )
}