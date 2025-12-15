import './Cabeca.scss'
//Imagens
import ImgMe from '../../assets/imagens/minhafoto.jpg'
import Botao_Selecionar_UI from '../ui/botao-seleciona/Botao-Selecionar'
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'
import type { RefObject } from 'react'

type Props = {
    RefConteiner: { contato: RefObject<HTMLElement | null>, projeto: RefObject<HTMLElement | null>},
}

function Cabeca({ RefConteiner }: Props) {
    return (
        <Show_Conteiner>
            <header className="wraper-conteiner-cabeca">
                <div className="conteiner-cabeca">
                    <div className="conteiner-imagem-penso">
                        <img src={ImgMe} alt="Minha foto"  className='img-MinhaFoto'/>
                    </div>
                    <div className="wraper-conteiner-conteudo-head">
                        <h3 className='meunome-head'>Apolonio Guilherme</h3>
                        <p className='frase-curta-head'>Desenvolvedor Front-End focado em <strong className='bold-italic'>React/JS</strong></p>
                        <span className='conteiner-botao-head'>
                            <Botao_Selecionar_UI text="Projetos" onClick={() => {
                                    if (!RefConteiner.projeto.current) return
                                    RefConteiner.projeto.current.scrollIntoView({block: "center", behavior: "smooth"})
                                }}/>
                            <Botao_Selecionar_UI text="Contato"
                                onClick={() => {
                                    if (!RefConteiner.contato.current) return
                                    RefConteiner.contato.current.scrollIntoView({block: 'center', behavior: "smooth"})
                                }}
                            />
                        </span>
                    </div>
                </div>
            </header>
        </Show_Conteiner>
    )
}

export default Cabeca