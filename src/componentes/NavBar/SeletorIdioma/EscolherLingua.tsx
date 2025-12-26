//esse compoentens seria a lista lingua de lingua disponivel
import './EscolherLingua.scss'
//type
import { type JSONIdiomas, type Siglas } from './Seletor-Idioma'
//imagens das badeira.
import brasilIMG from '../../../assets/pais/brasil.svg'
import usaIMG from '../../../assets/pais/usa.svg'
import { UseGlobal } from '../../../Context/ProviderContext'
import type { LinguagensDisponivel } from '../../../date/linguagem/linguagem'

function EscolherLingua({idiomas}: {idiomas: JSONIdiomas}) {
    const imgsrc: { [key: Siglas]: string } = {
        PT: brasilIMG,
        EN: usaIMG
    }   
    //Global
    const global = UseGlobal()!
    return (
        <div className="Escolher-Lingua">
            <span className="caret"></span>
            <ul className="NOTYPELIST">
                {Object.entries(idiomas).map((info, key) => (
                    <li key={key} className={
                        info[0] == global.LinguaAtual ?"idioma-selecionado" : ""
                        }
                        onClick={() => { // a funcao que faz mudar de idioma
                            if (!global) return
                            //confia as chave do json idiomas sao as mesma da "LinguagemDisponivel"
                            const lingua = info[0] as LinguagensDisponivel
                            global.SetLinguaAtual(lingua)
                        }}
                    >
                        <img src={imgsrc[info[1].sigla]} alt="imagem da lingua" className='img-pais'/>
                        <p className='nome-pais-idioma'>{info[1].nome}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EscolherLingua