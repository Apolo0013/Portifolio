//React
import { useEffect, useRef, useState, type JSX, type RefObject } from 'react'
//SCSS
import './Projetos.scss'
//COMPONENTES
import Card from './Card'
import MoveScroll from './MoveScroll'
//dados
import projetos from '../../date/projetos.json'
import type { ProjetoDate } from '../../type'
import { UseGlobal } from '../../Context/ProviderContext'
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'

function Projetos({GetRef}: {GetRef: RefObject<HTMLElement | null>}) {
    //Funcao que vai add os cards no State
    function AddCardsStateProjeto() {
        const listatempoElemento: JSX.Element[] = [] // lista temporaria
        //Percorrendo os projetos
        let key: number = 100
        //Conteundo
        const conteudo = projetos as ProjetoDate[]
        for (const info of conteudo) {
            //add na lista temporia
            listatempoElemento.push(
                <Card
                    //heranca
                    nomeProjeto={info.nomeProjeto} // nome do projeto
                    pathPrint={info.pathPrint} // print do projeto
                    resumo={info.resumo} // resumo do projeto
                    tags={info.tags} // tags
                    linkGitHub={info.linkGitHub} // link do github
                    linkSite={info.linkSite} // link do site hospedado
                    sobreMais={info.sobreMais}
                    //Props
                    GetRef={RefConteinerCardsProjetos} // esse GetRef ai pegar a referencia do conteinero wraper lado dos cards
                    onClick={(): void => {
                        console.log(info)
                        global.StateSetInfoProjeto({
                            show: true,
                            info: info
                        })
                    }}
                    key={key}
                    />
                )
            //Mulplicando a chave
            key *= 10
        }
        //Add no state
        SetCardsProjetos(listatempoElemento) // add no state
    }

    //Globalo contexto
    const global = UseGlobal()!
    //State que ondem vai fica os cards
    const [StateCardsProjetos, SetCardsProjetos] = useState<JSX.Element[]>([])
    //Refencia ao conteinr div.conteiner-cards-scroll
    const RefConteinerCardsScroll = useRef<HTMLDivElement>(null)
    //Referencia dos conteiner cards projetos
    const RefConteinerCardsProjetos = useRef<Array<HTMLDivElement | null>>([])
    useEffect(() => {
        AddCardsStateProjeto()
    }, [])
    return (
        <Show_Conteiner>
            <section className="sessao-corpo conteiner-projetos" ref={GetRef}>
                <h1 className="h1-main">Projetos</h1>
                <div className='wraper-conteiner-cards'>
                    <MoveScroll direcao="left" conteiner={RefConteinerCardsScroll} ListaCards={RefConteinerCardsProjetos}/> {/*Controlado do scroll*/}
                    <div className="conteiner-cards-scroll" ref={RefConteinerCardsScroll}>
                        {StateCardsProjetos}                    
                    </div>
                    <MoveScroll direcao='right' conteiner={RefConteinerCardsScroll} ListaCards={RefConteinerCardsProjetos}/> {/*Controlado do scroll*/}
                </div>
            </section>
        </Show_Conteiner>
    )
}

export default Projetos