//Navegacao rapida
import { useEffect, useState } from 'react'
import { UseGlobal } from '../../Context/ProviderContext'
import './NavBar.scss'
import SeletorIdioma from './SeletorIdioma/Seletor-Idioma'
import type { JSONLinguagemNavBar } from '../../date/linguagem/linguagem'

//botao para nevegar ate o sessao
function NavigatorBar() {
    const global = UseGlobal()!
    //!-Traducao
    const [Lingua, SetLingua] = useState<JSONLinguagemNavBar | null>(null)
    //useeffect para o state que contem a lingua atual
    useEffect(() => {
        if (!global) return
        SetLingua(global.Linguas[global.LinguaAtual].navBar)
    }, [global.LinguaAtual])
    return (
        <nav className='Navegador'>
            <ul className='NOTYPELIST lista-nav'>
                <li>
                    <a href={Lingua ? "#" +  Lingua.projeto : "#"} className='A-normal'>{Lingua ? Lingua.projeto : ""}</a>
                </li>
                <li>
                    <a href={Lingua ? Lingua.skills : "#"} className='A-normal'>{Lingua ? Lingua.skills : ""}</a>
                </li>
                <li>
                    <a href={Lingua ? Lingua.skills : "#"} className='A-normal'>{Lingua ? Lingua.sobre : ""}</a>
                </li>
                <li>
                    <a href={Lingua ? Lingua.contato : "#"} className='A-normal'>{Lingua ? Lingua.contato : ""}</a>
                </li>
            </ul>
            <SeletorIdioma />
        </nav>
        //aria apolo
    )
}

export default NavigatorBar