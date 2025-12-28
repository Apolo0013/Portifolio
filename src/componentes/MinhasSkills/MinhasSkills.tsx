import './MinhasSkills.scss'
//Utils
import { PATHTAG, type TypePATHTAG } from '../../utils/Imagem'
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'
import { useEffect, useState, type RefObject } from 'react'
import  { type JSONLinguagemMinhasSkills, JSONMinhasSkills } from '../../date/linguagem/linguagem'
import { UseGlobal } from '../../Context/ProviderContext'

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


function MinhasSkills({ GetRef }: { GetRef: RefObject<HTMLElement | null>}) {
    const [Lingua, _] = useState<JSONLinguagemMinhasSkills>(JSONMinhasSkills)
    //global, sera usa pra saber a lingua atual
    const global = UseGlobal()!
    //lingua atual
    const [LinguaAtual, SetLinguaAtual] = useState< "brasil" | "ingles">("brasil")
    useEffect(() => {
        if (!global) return
        SetLinguaAtual(global.LinguaAtual)
    }, [global.LinguaAtual])
    return (
        <Show_Conteiner>
            <section className='sessao-corpo conteiter-minhas-habilidade'
                ref={GetRef}
            >
                <h1 className='h1-main'>{Lingua.tituloMain[LinguaAtual]}</h1>
                <div className="conteiner-habilidades">
                    {
                        global
                        ?Lingua.skills.map((info, key) => (
                            <DescreverHabilidade title={info.title} text={info.text[LinguaAtual]} tag={info.tag} key={key}/>
                        ))
                        : null
                    }
                </div>
            </section>
        </Show_Conteiner>
    )
}

export default MinhasSkills