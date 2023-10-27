import Header from '../Header/header';
import Facebook from '../../../images/face.png';
import './footer.css';

export default function Footer() {
    return(
        <footer>
            <div>
                <h1>Entre em contato</h1>
                <div className='containner_footer'>
                    <a href="https://www.facebook.com/ana.oliveiradossantos.73" target={'_blank'}>
                    <img src={Facebook} alt="" width={100}/>
                    </a>
                </div>
                <Header />
            </div>
        </footer>
    )
}