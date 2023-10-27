import WhatsImage from '../../../images/whstass.png'
import Email from '../../../images/email.png'

import './header.css';

export default function Header() {
    return(
        <header className='container_header'>
            <div className='container_whats'>
                <img src={WhatsImage} alt="" width={50}/>
                <a href="https://vitejs.dev/guide/">WhatsApp</a>
            </div>

            <div className='container_email'>
                <img src={Email} alt="" width={40}/>
                <p>anaa.paula.oliver@gmail.com</p>
            </div>

            <div className='container_info'>
                <h3>Como comprar</h3>
                <h3>Troca e devolução</h3>
                <h3>Fale conosco</h3>
            </div>
        </header>
    )
}