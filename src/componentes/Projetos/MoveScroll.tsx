import './MoveScroll.scss'
//Imagens
import ImgSeta from '../../assets/imagens/seta.svg'
import { type RefObject } from 'react'
//utils
import { findLastIndex } from '../../utils/utils.ts'
import { ScrollElement } from '../../utils/utils.tsx'

type Props = {
    direcao: 'left' | 'right',
    conteiner: RefObject<HTMLDivElement | null>,
    ListaCards: RefObject<Array<HTMLDivElement | null>> // essa lista é ondem contem os cards dos projetos
}

function MoveScroll({ direcao, conteiner, ListaCards }: Props) {                  
    //Cards pular
    const PULARCARDS: number = 1
    //Funcao responsavel por fazer o scroll
    function Scroll() {
        if (!conteiner.current || ListaCards.current.some(el => el == null)) return // conteiner é null
        //Indices do elemntos visto
        const indiceprimeiro: number = ListaCards.current.findIndex(el => el?.dataset.visto == 'visto')
        const indiceultimo: number = findLastIndex(ListaCards.current, el => el?.dataset.visto == "visto")
        //Elemento final
        let el: HTMLDivElement
        //Indice do elemento selecionado
        let indiceel: number = 0
        //Se for para direcao esquerda
        if (direcao == 'left') {
            //indice do elemento final.
            //um pequeno tratamento em questao dos indices
            indiceel = indiceprimeiro 
            for (let i = 0; i < PULARCARDS; i++) {
                if (indiceel == 0) break // 0 == olha ele ja esta no comeco da lista, ja basta
                indiceel --
            }
            //elemeno final
            el = ListaCards.current[indiceel]!
        }
        else {
            //o indice final do elemento dnetor da lista
            //se ele for maior que o indices da lista
            //se caso ele for maior ele vai se mater naquele indice, caso ao contrario ele vai somar normalmente
            indiceel = indiceultimo
            for (let i = 0; i < PULARCARDS; i++) { // aqui vamos tenta mostrar os outros que nao estao a mostrar, no max: 4(default)
                if (indiceel < ListaCards.current.length) { // ainda esta dentro do indices maximo da lista
                    indiceel ++
                }
                else break
            }
            el = ListaCards.current[indiceel]!
        }
        //antes de da scroll. vamos ver se o el é null
        if (!el) return
        //Scroll
        //caso ele for o primeiro
        if (indiceel == 0) {
            conteiner.current.scrollTo({
                left: 0,
                behavior: 'smooth'
            })
        }   
        //caso o proximo o scroll seja o ultimo.
        else if (indiceel + 1 == ListaCards.current.length) {
            conteiner.current.scrollTo({
                left: conteiner.current.scrollWidth,
                behavior: "smooth"
            })
        }
        else ScrollElement({
            ConteinerScroll: conteiner.current as HTMLElement,
            ConteinerTarget: el as HTMLElement
        })
    }

    return (
        <div
            className={`conteiner-move-scroll 
                ${direcao == 'left' ? 'deagrade-left' : 'deagrade-right'}`}
            
            style={{
                left: direcao == 'left' ? '0' : 'none',
                right: direcao == 'right' ? '0' : 'none'
            }}>
            <img src={ImgSeta} alt="Seta"
                style={
                    {
                        transform: direcao == 'right' ? 'rotate(-180deg)' : 'rotate(0deg)',
                    }}
                //Evento de click
                onClick={() => {
                    Scroll()
                }} 
            ></img>
        </div>
    )
}

export default MoveScroll