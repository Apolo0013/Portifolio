import type { Dispatch, RefObject, SetStateAction } from "react"

//Types
//Type do json
export type sobreMaisType = {
    texto: string,
    pathImagem: string[]
}

//IDNAME Presente no projeto
type TypeIDNAMEJSON = "ENCICLOPEDIANEGRA" | "TABELAPERIODICA"

export type ProjetoDate = {
    IDNAME: TypeIDNAMEJSON
    nomeProjeto: string,
    tags: string[],
    resumo: string,
    linkGitHub: string,
    linkSite: string,
    sobreMais: sobreMaisType
}
//tipo dos card do projeto
export type TypetipoView = 'visto' | 'nao-visto'

export type CardsProjetoInfo = {
    el: RefObject<HTMLDivElement | null>,
    SetData: Dispatch<SetStateAction<TypetipoView>>
}