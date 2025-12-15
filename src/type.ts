import type { Dispatch, RefObject, SetStateAction } from "react"

//Types
//Type do json
export type sobreMaisType = {
    texto: string,
    pathImagem: string[]
}

export type ProjetoDate = {
    nomeProjeto: string,
    pathPrint: string,
    tags: string[],
    resumo: string,
    linkGitHub: string,
    linkSite: string,
    sobreMais: sobreMaisType
}
//tipo dos card do projeto
export type Typetipo = 'visto' | 'nao-visto'

export type CardsProjetoInfo = {
    el: RefObject<HTMLDivElement | null>,
    SetData: Dispatch<SetStateAction<Typetipo>>
}