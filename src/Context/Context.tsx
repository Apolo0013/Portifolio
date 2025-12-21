import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ProjetoDate } from "../type";

//Types
//Type para o Componente Mostrar informcao projeto
export type StateShowInfoProjeto = {
    show: boolean,
    info: ProjetoDate | null
}
//Type para o componente ver a imagem
export type StateVerImagem = {
    show: boolean,
    src: string
}
export type TypeContextGlobal = {
    StateSetInfoProjeto: Dispatch<SetStateAction<StateShowInfoProjeto>>,
    StateVerImagem: Dispatch<SetStateAction<StateVerImagem>>
}

export const ContextGlobal = createContext<TypeContextGlobal | null>(null)