import './Contato.scss'
//imagens
import ZapIMG from '../../assets/imagens/zap.svg'
import LKIMG from '../../assets/imagens/linkdin.svg'
import EmailIMG from '../../assets/imagens/email.svg'
import GitHubIMG from '../../assets/imagens/github.svg'
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'
import type { RefObject } from 'react'
import type { JSONLinguagemContato } from '../../date/linguagem/linguagem'

type Props = {
    GetRef: RefObject<HTMLElement | null>,
    Lingua: JSONLinguagemContato | null
}


function Contato({ GetRef, Lingua}: Props) {
    return (
        <Show_Conteiner>
            <section className='sessao-corpo conteiner-contato' ref={GetRef}>
                <h1 className='h1-main'>{Lingua ? Lingua.tituloMain :  ""}</h1>
                <p className='p-main'>{Lingua ? Lingua.texto : ""}</p>
                {/*Icones que redirencionar para o github, email, zap e linkdin*/}
                <div className='conteiner-icone-link'>
                    <a href="https://wa.me/5584986640358"
                        className="link-contato"
                        //aria
                        aria-label="Meu whatsApp"
                        tabIndex={0}
                    >
                        <img src={ZapIMG} alt="Imagem do whatsApp" />
                    </a>
                    <a href="https://www.linkedin.com/in/apolonio-guilherme-11a825322/"
                        className="link-contato"
                        //aria
                        aria-label='Meu Linkdin'
                        tabIndex={0}
                    >
                        <img src={LKIMG} alt="Imagem do LinkDin" />
                    </a>
                    <a href="mailto:apolonbio913@gmail.com?subject=Contato%20Portfólio de Apolonio Guilherme&body=Vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você."
                        className="link-contato"
                        //aria
                        aria-label="Meu Email"
                        tabIndex={0}
                    >
                        <img src={EmailIMG} alt="Imagem do Email" />
                    </a>
                    <a href="https://github.com/Apolo0013"
                        className="link-contato"
                        //aria
                        aria-label="Meu GitHub"
                        tabIndex={0}
                    >
                        <img src={GitHubIMG} alt="Imagem do GitHub" />
                    </a>
                </div>
            </section>
        </Show_Conteiner>
    )
}

export default Contato
//https://www.linkedin.com/in/apolonio-guilherme-11a825322/


