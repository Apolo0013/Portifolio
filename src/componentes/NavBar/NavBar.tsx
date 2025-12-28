//Navegacao rapida
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { UseGlobal } from '../../Context/ProviderContext'
import './NavBar.scss'
import SeletorIdioma from './SeletorIdioma/Seletor-Idioma'
import type { JSONLinguagemNavBar } from '../../date/linguagem/linguagem'
//imagens
import MenuIMG from '../../assets/imagens/menu.svg'
import { useMediaQuery } from '../../hooks/MediaQuery'

//botao para nevegar ate o sessao
function NavigatorBar() {
    function HandlerMenuMobile() {
        //essa funcao que fazer o conteiner em si, se esconder e aparace
        if (!RefNav.current) return // caso ainda for null
        //largura atual !- Importtante para responsividade, evitar numero fixo
        // left == 0, ele esta visivel
        // left != 0, ele nao esta visivel
        if (LeftNav == 0) { // se ele for igual 0, que dizer que devo voltar ele
            const { width }: { width: number } = RefNav.current.getBoundingClientRect()
            //Dando valor para o left
            SetLeftNav(-width) // ( - ) é para ele ir para esquerda nao pra frente no caso direcao para direita
        }
        else { // se ele for diferente 0, que dizer que devo mostrar ele.
            SetLeftNav(0)
        }
    }

    const global = UseGlobal()!
    //!-Traducao
    const [Lingua, SetLingua] = useState<JSONLinguagemNavBar | null>(null)
    //useeffect para o state que contem a lingua atual
    useEffect(() => { 
        if (!global) return
        SetLingua(global.Linguas[global.LinguaAtual].navBar)
    }, [global.LinguaAtual])

    //===============================================================
    //const left do conteiner principal, ondem sera manipulado
    const [LeftNav, SetLeftNav] = useState<number>(0)
    //Referencia o elemento
    const RefNav = useRef<HTMLElement | null>(null)
    //mediaquery via js.
    const IsMobile: boolean = useMediaQuery('(max-width: 500px) and (pointer: coarse)')
    
    //useLayoutEffect, ele roda antes de rederizar.
    useLayoutEffect(() => {
        if (!RefNav.current || !IsMobile) return
        const { width }: { width: number } = RefNav.current.getBoundingClientRect()
        SetLeftNav(-width)
    }, [])
    
    return (    
        <nav className={`Navegador  ${IsMobile ? "Navegador-dispositivo-movel-navbar" : ""}`}
            ref={RefNav}
            style={{
                left: LeftNav + 'px' 
            }}
        >
            <span className="menu-mobile-nav"
                //so estarar disponivel se for mobile
                style={{display: IsMobile ? "block" : "none"}}
                onClick={HandlerMenuMobile}
            >
                <img src={MenuIMG} alt="Foto do menur burguer" />
            </span>
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
            {
                <SeletorIdioma left={LeftNav} />
            }
        </nav>
        //aria apolo
    )
}

export default NavigatorBar