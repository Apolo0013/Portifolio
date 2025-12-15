//Type
import { useEffect, useRef, useState, type RefObject } from 'react'
import type { ProjetoDate, Typetipo } from '../../type'
//SCSS
import './Card.scss'
//Utils
import { UseObserverCard } from '../../utils/utils.tsx'
//Componentes
import TagsInline from '../ui/tags/tags.tsx'

//PropsCard: type para os props do Card
interface PropsCard extends ProjetoDate { // vou herda os tipo do ProjetoDate
    GetRef: RefObject<Array<HTMLDivElement | null>>,
    onClick: () => void
}


function Card({ nomeProjeto, pathPrint, resumo, tags, onClick, GetRef}: PropsCard ) {
    //State do data set dele
    const [StateDataSet, SetDataSet] = useState<Typetipo>('nao-visto')
    //Referncia ao conteiner
    const RefConteiner = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (!RefConteiner.current) return
        //Pegando a referncia...
        //caso ele nao esteja na lista, evita mulplicacao de elemenos
        if (!GetRef.current.some(el => el == RefConteiner.current)) GetRef.current.push(RefConteiner.current) //colocando a referencia para ca
        //observer
        UseObserverCard({ // observado
            //Ele basicamente vai add "visto" e "nao-visto" no data-visto, falando se ele nao esta sendo visto
            el: RefConteiner,
            SetData: SetDataSet
        })
    }, [])
    return (
        <div className="wraper-conteiner-card" ref={RefConteiner} data-visto={StateDataSet}>
            <div className="conteiner-card" onClick={onClick}>
                {/*background*/}
                <div className="conteiner-card-img-projeto">
                    <img src={pathPrint} alt="Foto do Projeto" />
                </div>
                {/*front*/}
                <div className="conteiner-card-info-projeto">
                    <h1 className="nome-projeto-card">
                        {nomeProjeto}
                    </h1>

                    <span className='card-info-projeto-text'>
                        <h3 className='card-info-projeto-text-h3'>Resumo</h3>
                        <p className='card-info-projeto-text-p'>{resumo}</p>
                    </span>
                    <span className='card-info-projeto-text'>
                        <h3 className="card-info-projeto-h3">Tags</h3>
                        <TagsInline listatag={tags}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card