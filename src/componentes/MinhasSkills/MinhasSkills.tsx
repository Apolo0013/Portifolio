import './MinhasSkills.scss'
//json 
import HabilidadeJSON from '../../date/minhaskills.json'
//Utils
import { PATHTAG, type TypePATHTAG } from '../../utils/Imagem'
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'

//Texto simple descrevendo as habilidade
function DescreverHabilidade({ title, text, tag }: { title: string, text: string, tag: string }) {
    return (
        <section className='skill-sobre'>
            <div className="skill-sobre-text">
                <h2 className="h2-main">{title}</h2>
                <p className="p-main">{text}</p>
            </div>
            <div className='skill-sobre-img-tag'>
                <img src={PATHTAG[tag as keyof TypePATHTAG]} alt="Icone da habalidade/linguagem" />
            </div>
        </section>
    )
}


function MinhasSkills() {
    return (
        <Show_Conteiner>
            
            <section className='sessao-corpo conteiter-minhas-habilidade'>
                <h1 className='h1-main'>Minhas Habilidades</h1>
                <div className="conteiner-habilidades">
                    {
                        HabilidadeJSON.map((info, key) => (
                            <DescreverHabilidade title={info.title} text={info.text} tag={info.tag} key={key}/>
                        ))
                    }
                </div>
            </section>
        </Show_Conteiner>
    )
}

export default MinhasSkills