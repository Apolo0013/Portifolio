import type { Dispatch, SetStateAction } from "react"
import type { CardsProjetoInfo } from "../type"

//Observar os cards dos projetos
//Basicamente: ele vai add
export function UseObserverCard(Info: CardsProjetoInfo) {
    const obs = new IntersectionObserver((entradas, _) => {
        entradas.forEach(entry => {
            console.log(entry.intersectionRatio ? "vendo" : 'nao')
            if (entry.isIntersecting) Info.SetData('visto') // vendo
            else Info.SetData('nao-visto') // nao vendo
        })
    })
    const elemento = Info.el.current as Element
    obs.observe(elemento) // observando
}

//funcao basicamente vai add aquele efeito de sujimentos
export type typeShowOrSide = 'conteiner-show' | 'conteiner-side'

export function UseObserverShow(conteiner: HTMLElement, SetClass: Dispatch<SetStateAction<typeShowOrSide>>) {
    const obs = new IntersectionObserver((entradas, _) => {
        entradas.forEach(entry => { 
            //se viu, vamos exbir ele.
            if (entry.isIntersecting) {
                SetClass('conteiner-show') // mostrando o conteiner
                obs.unobserve(entry.target) // desconectando ele, para nao compremeter recurso
            }
        })
    })

    obs.observe(conteiner)
}