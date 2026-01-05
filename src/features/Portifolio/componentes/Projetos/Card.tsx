//Type
import { useEffect, useRef, useState, type RefObject } from 'react'
import type { ProjetoDate , TypetipoView} from '../../../../type.ts'
//SCSS
import './Card.scss'
//Utils
import { UseObserverCard } from '../../../../utils/utils.tsx'
//Componentes
import TagsInline from '../../../../shared/componentes/tags/tags.tsx'
//Imagens
import { PathImagemProjeto } from '../../../../utils/Imagem.ts'
import { UseGlobal } from '../../../../store/ProviderContext.tsx'

//PropsCard: type para os props do Card
interface PropsCard extends ProjetoDate { // vou herda os tipo do ProjetoDate
    GetRef: RefObject<Array<HTMLDivElement | null>>,
    onClick: () => void,
    RefConteinerScroll: RefObject<HTMLElement | null>, // esse conteiner é o carinha que sera usado para manipular o scroll
}


function Card({
    nomeProjeto,
    resumo,
    tags,
    IDNAME,
    onClick,
    GetRef,
    RefConteinerScroll,
}: PropsCard) {
    //State do data set dele
    const [StateDataSet, SetDataSet] = useState<TypetipoView>('nao-visto')
    //Referncia ao conteiner
    const RefConteiner = useRef<HTMLDivElement | null>(null)
    //Global contexto
    const global = UseGlobal()!
    //Lingua, vai se servido como wraper
    type CardLingua = {
        resumo: string,
        tags: string
    }
    const [Lingua, SetLingua] = useState<CardLingua>({
        resumo: "",
        tags: ""
    })
    useEffect(() => {
        if (global.Linguas)
        SetLingua(global.Linguas[global.LinguaAtual].projeto.Card)
    }, [global.LinguaAtual])

    useEffect(() => {
        if (!RefConteiner.current || !RefConteinerScroll.current) return
        //Pegando a referncia...
        //caso ele nao esteja na lista, evita mulplicacao de elemenos
        if (!GetRef.current.some(el => el == RefConteiner.current)) GetRef.current.push(RefConteiner.current) //colocando a referencia para ca
        //observer
        UseObserverCard({ // observado
            //Ele basicamente vai add "visto" e "nao-visto" no data-visto, falando se ele nao esta sendo visto
            root: RefConteinerScroll.current,
            target: RefConteiner.current,
            SetData: SetDataSet
        })
    }, [])
    return (
        <div className="wraper-conteiner-card" ref={RefConteiner} data-visto={StateDataSet}>
            <div className="conteiner-card" onClick={onClick}>
                {/*background*/}
                <div className="conteiner-card-img-projeto">
                    <img src={PathImagemProjeto[IDNAME].PrintProjetoCard} alt="Foto do Projeto" />
                </div>
                {/*front*/}
                <div className="conteiner-card-info-projeto">
                    <h1 className="nome-projeto-card">
                        {nomeProjeto}
                    </h1>
                    <span className='card-info-projeto-text'>
                        <h3 className='card-info-projeto-text-h3'>{Lingua.resumo}</h3>
                        <p className='card-info-projeto-text-p'>{resumo[global.LinguaAtual]}</p>
                    </span>
                    <span className='card-info-projeto-text'>
                        <h3 className="card-info-projeto-h3">{Lingua.tags}</h3>
                        <TagsInline listatag={tags}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card