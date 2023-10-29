import { Link } from 'react-router-dom';
import WhatsImage from '../../../images/whstass.png'
import Email from '../../../images/email.png'
import Home from '../../../images/home.png';

import './header.css';

export default function Header() {
    return(
        <header className='container_header'>
            <div>
                <Link to="/">
                    <img className='img_home' src={Home} alt=""/>
                </Link>
            </div>
            <div className='container_whats'>
                <img src={WhatsImage} alt="" width={50}/>
                <a href="https://vitejs.dev/guide/">WhatsApp</a>
            </div>

            <div className='container_email'>
                <img src={Email} alt="" width={40}/>
                <p>anaa.paula.oliver@gmail.com</p>
            </div>

            <div className='container_info'>
                <Link to="/contato">Fale conosco</Link>
            </div>
        </header>
    )
}