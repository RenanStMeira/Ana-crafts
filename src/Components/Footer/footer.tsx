import Facebook from '../../../images/face.png';
import './footer.css';
import BannerML from '../BannerML/bannerMl';

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
            </div>
        </footer>
    )
}