import './bannerMl.css';
import Ml from '../../../images/ml.png'

export default function BannerML() {
    return(
        <section className="banner-container">
            <div>
                <img src={Ml} alt="" className='img_ml'/>
            </div>
            <div className="banner-text">
                <h2>Descubra um Mundo de Possibilidades no Mercado Livre</h2>
                <p>Explore nossa loja no Mercado Livre para produtos incríveis e descontos irresistíveis!</p>
                <a href="https://www.mercadolivre.com.br/perfil/MARIAAPARECIDADEOLIVEIRABAT" target="_blank" className="cta-button">Ver Ofertas</a>
            </div>
            <div>
                <img src={Ml} alt="" className='img_ml'/>
            </div>
        </section>

    )
}