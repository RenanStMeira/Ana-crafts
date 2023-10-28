import { Link } from 'react-router-dom';
import './linksNav.css';

export default function LinksNav() {
    return(
        <div>
            <Link className='links_nav' to="/sala">SALA</Link>
            <Link className='links_nav' to="/cozinha">COZINHA</Link>
            <Link className='links_nav' to="/banheiro">BANHEIRO</Link>
            <Link className='links_nav' to="/passadeiras">PASSADEIRAS</Link>
            <Link className='links_nav' to="/camonho">CAMINHO DE MESA</Link>
        </div>
    )
}