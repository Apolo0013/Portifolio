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
import { UseGlobal } from '../../../store/ProviderContext'
import { useMediaQuery } from '../../../shared/hooks/MediaQuery'

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

//Left do NavBar, nois fica sabendo se ele esta visivel ou nao
function SeletorIdioma({ left }: { left: number }) {
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

    //vamos monitora o valor de leftt
    useEffect(() => {
        //se left for direferente de que dizer que ele esta invisivel, entao vamos retirar esse componentes
        if (left != 0) {
            SetEscolherLingua(false) // retirando o compoentnens
            SetStyleSetar('0deg') // deixa a setar na direcao normal
        }
    }, [left])

    //mediaquery via js.
    const IsMobile: boolean = useMediaQuery('(max-width: 500px) and (pointer: coarse)')
    return (
        <div className={`Seletor-Idioma ${IsMobile
            //so terar essa class se for mobile
            ? "Navegador-dispositivo-movel-SeletorIdioma"
            : ""}`}
            style={{
                //so terar essa propriedade se for para mobile
                left: IsMobile ? (left == 0 ? 110 : 0) + '%' : "0"
            }}

            //aria
            //se ele esta expandido ou nao.
            aria-expanded={IsMobile && left != 0 ? 'false' : "true"
            }
        >
            <ul className="NOTYPELIST" aria-hidden="true">
                <li aria-hidden="true">
                    <img src={MundoImg} alt="Imagem de um globo" className='img-globo'/>
                </li>
                <li aria-hidden="true">
                    <p className='sigla-lingua'>{Sigla}</p>
                </li>
                <li aria-hidden="true">
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
            {
                StateEscolherLingua ? <EscolherLingua idiomas={JSONidiomas} /> : null
            }
        </div>
    )
}

export default SeletorIdioma