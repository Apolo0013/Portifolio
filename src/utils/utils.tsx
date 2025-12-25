import type { Dispatch, SetStateAction } from "react"
import type { TypetipoView} from "../type"

//Observar os cards dos projetos
//Basicamente: ele vai add
type ParamUseObserverCard = {
    target: HTMLElement,
    root: HTMLElement,
    SetData: Dispatch<SetStateAction<TypetipoView>>
}

export function UseObserverCard({target, root, SetData} : ParamUseObserverCard) {
    const obs = new IntersectionObserver((entradas, _) => {
        entradas.forEach(entry => {
            if (entry.isIntersecting) SetData('visto') // vendo
            else SetData('nao-visto') // nao vendo
        })
    },
        {
            root: root,
            threshold: 0.5 // 100% dipara
        }
    )
    obs.observe(target) // observando
}

//funcao basicamente vai add aquele efeito de sujimentos
export type typeShowOrSide = 'conteiner-show' | 'conteiner-side'

type ParamUseObserverShow = {
    target: HTMLElement,
    SetClass: Dispatch<SetStateAction<typeShowOrSide>>
}

export function UseObserverShow({
    target,
    SetClass
}: ParamUseObserverShow) {
    const obs = new IntersectionObserver((entradas, _) => {
        entradas.forEach(entry => { 
            //se viu, vamos exbir ele.
            if (entry.isIntersecting) {
                SetClass('conteiner-show') // mostrando o conteiner
                obs.unobserve(entry.target) // desconectando ele, para nao compremeter recurso
            }
        })
    })
    obs.observe(target)
}

//Funcao scroll
type ParamScrollElement = {
    ConteinerScroll: HTMLElement | null,
    ConteinerTarget: HTMLElement | null,
    Eixo?: "x" | "y"
}
export function ScrollElement({ConteinerScroll, ConteinerTarget, Eixo = 'x'}: ParamScrollElement) {
    if (!ConteinerScroll || !ConteinerTarget) return
    //pegando o gap la do CSS
    const gap: number = Number(getComputedStyle(ConteinerScroll).getPropertyValue('--gap-conteiner-scroll').replaceAll("px", ''))
    if (Number.isNaN(gap)) return // caso de errado em transforme em number
    if (Eixo == 'x') {
        const offSetX: number = ConteinerTarget.offsetLeft
        ConteinerScroll.scrollTo({
                left: (offSetX - gap)
                ,
            behavior: 'smooth'
        })
    }
    else {
        //nao sera usado...
        ConteinerScroll.scrollTo({
            top: ConteinerTarget.offsetTop,
            behavior: "smooth"
        })
    }
}