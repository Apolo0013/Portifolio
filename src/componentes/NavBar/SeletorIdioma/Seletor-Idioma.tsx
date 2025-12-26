import './Seletor-Idioma.scss'
//Imagens
import MundoImg from '../../../assets/imagens/mundo.svg'
import ArrowBottom from '../../../assets/imagens/arrowbottom.svg'
//React
import { useEffect, useState } from 'react'
//Compoentens
import EscolherLingua from './EscolherLingua'
//JSON com as linguagem disponivel
import JSONidiomas from '../../../date/linguagem/idioma-disponivel.json'
import { UseGlobal } from '../../../Context/ProviderContext'

//Tipa o json
//string para o ts parar de pertubar
export type Siglas = "EN" | "PT" | string
type Nomes = "Português" | "English" | string


type IdiomasInfo = {
    sigla: Siglas, 
    nome: Nomes
}

export type JSONIdiomas = {
    brasil: IdiomasInfo,
    ingles: IdiomasInfo
}


function SeletorIdioma() {
    //state para o style do setinha para baixo
    const [StyleSetar, SetStyleSetar] = useState<"0deg" | "180deg">("0deg")
    //State que controlar o componentes EscolherLingua
    const [StateEscolherLingua, SetEscolherLingua] = useState<boolean>(false)
    //State para a singla
    const [Sigla, SetSigla] = useState<Siglas>("PT")
    //Global
    const global = UseGlobal()!
    //JSON tipado
    const idiomas: JSONIdiomas = JSONidiomas

    useEffect(() => { 
        if (!global) return
        //Setando a igual/atualizando
        SetSigla(idiomas[global.LinguaAtual].sigla)
    }, [global.LinguaAtual])
    return (
        <div className='Seletor-Idioma'>
            <ul className="NOTYPELIST">
                <li>
                    <img src={MundoImg} alt="Imagem de um globo" className='img-globo'/>
                </li>
                <li>
                    <p className='sigla-lingua'>{Sigla}</p>
                </li>
                <li>
                    <img
                        src={ArrowBottom}
                        alt="imagem de um flecha pra abaixo"
                        className='setar-baixo'
                        style={{ transform: `rotate(${StyleSetar})` }}
                        onClick={() => {
                            //Virando e desvirando ele
                            SetStyleSetar(prev => (prev == '0deg' ? "180deg" : "0deg"))
                            //Chamando o compoentnes
                            SetEscolherLingua(prev => (!prev))
                        }}
                    />
                </li>
            </ul>
            {StateEscolherLingua ? <EscolherLingua idiomas={JSONidiomas} /> : null}
        </div>
    )
}

export default SeletorIdioma