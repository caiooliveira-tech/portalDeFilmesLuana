import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
        <ul className='flex gap-5 text-white '>
        <li><Link to ="/">Menu</Link></li>
        <li><Link to ="filmes"> Filmes</Link></li>
        <li><Link to ="noticias">Noticías</Link></li>
        <li><Link to ="contato">Contato</Link></li>
        </ul>
        </nav>
     );
}
export default Navbar ;