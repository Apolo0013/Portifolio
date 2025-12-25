//React
import { useEffect, useState } from 'react'
//CSS
import './Info-Projetos.scss'
//Type
import type {ProjetoDate} from '../../type'
//Imagens
import BackIMG from '../../assets/imagens/back.svg'
import GitHubIMG from '../../assets/imagens/github.svg'
import SiteIMG from '../../assets/imagens/site.svg'
import { PathImagemProjeto } from '../../utils/Imagem'
//Componentes
import TagsInline from '../ui/tags/tags'
import Info_ProjetosMais from './Info-ProjetosMais/Info-Projetos+'
import { UseGlobal } from '../../Context/ProviderContext'
import type { JSONLinguagemSobreMaisProjeto } from '../../date/linguagem/linguagem'

function Info_Projetos({ info }: { info: ProjetoDate, Lingua: JSONLinguagemSobreMaisProjeto | null}) {
    //Global
    const global = UseGlobal()!
    const[Lingua, SetLingua] = useState<JSONLinguagemSobreMaisProjeto>({
        linkGitHub: {
            texto: "",
            tituloMain: ""
        },
        linkSite: {
            texto: "",
            tituloMain: ""
        },
        resumoProjeto: "",
        tecnologiaLinguagem: ""
    })
    useEffect(() => {
        if (!global) return
        SetLingua(global.Linguas[global.LinguaAtual].projetoInfo)
    }, [global.LinguaAtual])
    return (
        <main className='wraper-conteiner-main-info-projeto'>
            <div className='conteiner-botao-voltar-projeto-info' onClick={() => {
                //retirando o conteudo da tela
                global.StateSetInfoProjeto(prev => ({info: prev.info, show: false}))
            }}>
                <img src={BackIMG} alt="Voltar" />
            </div>
            
            {/*Essa sessao é ondem vai fica os pequeno resumo do projeto ex: tecnologia usadas, resumo escrito dele, titulo e uma foto a direita.*/}
            <section className="conteiner-info-projeto-info-comum">
                <div className="conteiner-info-comum-escrito">
                    <h1 className="h1-main">{info.nomeProjeto}</h1>
                    <div className="conteiner-resumo-info-comum">
                        <h2 className='h2-main'>{Lingua ? Lingua.resumoProjeto : ""}</h2> 
                        <p className='p-main p-resumo-info-comum'>{info.resumo[global.LinguaAtual]}</p>
                    </div>
                    <span className='conteiner-info-comum-link' onClick={() => window.location.href = info.linkGitHub}>
                        <h2 className="h2-main">{Lingua ? Lingua.linkGitHub.tituloMain : ""}</h2>
                        <span className="botao-link">
                            <p>{Lingua ? Lingua.linkGitHub.texto : ""}</p>
                            <img src={GitHubIMG} alt="Imagem GitHub" />
                        </span>
                    </span>
                    <span className="conteiner-info-comum-link">
                        <h2 className="h2-main">{Lingua ? Lingua.linkSite.tituloMain : ""}</h2>
                        <span className={
                            "botao-link " + (!info.linkSite ? "link-indisponivel" : "")
                        }
                            onClick={() => window.location.href = info.linkSite}>
                            <p>{Lingua ? Lingua.linkSite.texto : ""}</p>
                            <img src={SiteIMG} alt="Imagem Site" />
                        </span>
                    </span>
                    {/*tags da linguagem ou tecnologia*/}
                    <span className="wraper-conteiner-tag">
                        <h2 className='h2-main'>{Lingua ? Lingua.tecnologiaLinguagem : ""}</h2>
                        <TagsInline listatag={info.tags}/>
                    </span>
                </div>
                <div className='print-start-info-comum'>
                    <img src={PathImagemProjeto[info.IDNAME].PrintProjetoCard} alt="Print do projeto" />
                </div>
            </section>
            {/*Essa sessao é ondem terar a sessao de imagem e um pequeno texto mais detalhado*/}
            <Info_ProjetosMais SobreMaisDate={{
                texto: info.sobreMais.texto,
                pathImagem: PathImagemProjeto[info.IDNAME].SobreMaisImagens
            }} />
        </main>
    )
}

export default Info_Projetos