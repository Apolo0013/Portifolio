//Navegacao rapida
import './NavBar.scss'
import SeletorIdioma from './SeletorIdioma/Seletor-Idioma'

//botao para nevegar ate o sessao
function NavigatorBar() {
    return (
        <nav className='Navegador'>
            <ul className='NOTYPELIST lista-nav'>
                <li>
                    <a href="" className='A-normal'>Projetos</a>
                </li>
                <li>
                    <a href="" className='A-normal'>Habilidades</a>
                </li>
                <li>
                    <a href="" className='A-normal'>Sobre</a>
                </li>
                <li>
                    <a href="" className='A-normal'>Contato</a>
                </li>
            </ul>
            <SeletorIdioma />
        </nav>
        //aria apolo
    )
}

export default NavigatorBar