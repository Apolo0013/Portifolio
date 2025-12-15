import './Contato.scss'
//imagens
import ZapIMG from '../../assets/imagens/zap.svg'
import LKIMG from '../../assets/imagens/linkdin.svg'
import EmailIMG from '../../assets/imagens/email.svg'
import GitHubIMG from '../../assets/imagens/github.svg'
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'
import type { RefObject } from 'react'

function Contato({ GetRef }: { GetRef: RefObject<HTMLElement | null>}) {
    return (
        <Show_Conteiner>
            <section className='sessao-corpo conteiner-contato' ref={GetRef}>
                <h1 className='h1-main'>Contato</h1>
                <p className='p-main'>Quer falar comigo? Me chama por qualquer canal abaixo.</p>
                {/*Icones que redirencionar para o github, email, zap e linkdin*/}
                <div className='conteiner-icone-link'>
                    <a href="https://wa.me/5584986640358" className="link-contato">
                        <img src={ZapIMG} alt="Imagem do whatsApp" />
                    </a>
                    <a href="https://www.linkedin.com/in/apolonio-guilherme-11a825322/" className="link-contato">
                        <img src={LKIMG} alt="Imagem do LinkDin" />
                    </a>
                    <a href="mailto:apolonbio913@gmail.com?subject=Contato%20Portfólio&body=Vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você." className="link-contato">
                        <img src={EmailIMG} alt="Imagem do Email" />
                    </a>
                    <a href="https://github.com/Apolo0013" className="link-contato">
                        <img src={GitHubIMG} alt="Imagem do GitHub" />
                    </a>
                </div>
            </section>
        </Show_Conteiner>
    )
}

export default Contato
//https://www.linkedin.com/in/apolonio-guilherme-11a825322/


