import type { Dispatch, RefObject, SetStateAction } from "react"

//Type da truducao
//-resumo
//-sobreMais -> texto
//terao essa tipagem
type TraducaoTexto = {
    brasil: string,
    ingles: string
}

//Types
//Type do json
export type sobreMaisType = {
    texto: TraducaoTexto,
    pathImagem: string[]
}

//IDNAME Presente no projeto
type TypeIDNAMEJSON = "ENCICLOPEDIANEGRA" | "TABELAPERIODICA" | 'QUIZREACT' | 'YOUTUBEWEBDOWNLOAD'

export type ProjetoDate = {
    IDNAME: TypeIDNAMEJSON
    nomeProjeto: string,
    tags: string[],
    resumo: TraducaoTexto,
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