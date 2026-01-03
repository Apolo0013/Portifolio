import './Cabeca.scss'
//Imagens
import ImgMe from '../../assets/imagens/minhafoto1.jpg'
import Botao_Selecionar_UI from '../ui/botao-seleciona/Botao-Selecionar'
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'
//Type
import { type RefObject } from 'react'
import type { JSONLinguagemCabeca } from '../../date/linguagem/linguagem'

type Props = {
    RefConteiner: { contato: RefObject<HTMLElement | null>, projeto: RefObject<HTMLElement | null> },
    Lingua: JSONLinguagemCabeca | null
} 

function Cabeca({ RefConteiner, Lingua }: Props) {
    return (
        <Show_Conteiner>
            <header className="wraper-conteiner-cabeca">
                <div className="back-circle"></div>
                <div className="conteiner-cabeca">
                    <div className="conteiner-imagem-penso">
                        <img src={ImgMe} alt="Minha foto"  className='img-MinhaFoto'/>
                    </div>
                    <div className="wraper-conteiner-conteudo-head">
                        <h3 className='meunome-head'>Apolonio Guilherme</h3>
                        <p className='frase-curta-head'>{
                            Lingua ? Lingua?.fraseCurta : ""
                        }</p>
                        <span className='conteiner-botao-head'>
                            <Botao_Selecionar_UI
                                text={Lingua ? Lingua!.botoesRapido.projeto as string : ""}
                                onClick={() => {
                                    if (!RefConteiner.projeto.current) return
                                    RefConteiner.projeto.current.scrollIntoView({block: "center", behavior: "smooth"})
                                }}/>
                            <Botao_Selecionar_UI
                                text={Lingua ? Lingua!.botoesRapido.contato as string : ""}
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