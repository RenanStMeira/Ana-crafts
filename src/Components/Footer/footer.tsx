import Facebook from '../../../images/face.png';
import BannerML from '../BannerML/bannerMl';
import PayMent from '../../../images/pay.jpeg';
import './footer.css';

export default function Footer() {
    return(
        <footer>
            <div>
                <BannerML />
                <h1>Nossa Rede Social</h1>
                <div className='containner_footer'>
                    <a href="https://www.facebook.com/ana.oliveiradossantos.73" target={'_blank'}>
                        <img className='img' src={Facebook} alt="" width={100}/>
                    </a>
                </div>
                <div className='container_payment'>
                    <div className='title_pay'>
                        <h1>Formas de pagamento</h1>
                    </div>
                    <img className='image_pay' src={PayMent} alt="Metodo de pagamento"/>
                </div>
                <div>
                    <p>&copy; 2023 35.986.410/0001-38 Ana Croches Rua: Estela, 27 - Alfredo Marcondes SP</p>
                </div>
            </div>
        </footer>
    )
}