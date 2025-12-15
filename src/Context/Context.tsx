import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ProjetoDate } from "../type";

//Types
//Type valor state
export type StateShowInfoProjeto = {
    show: boolean,
    info: ProjetoDate | null
}
export type TypeContextGlobal = {
    StateSetInfoProjeto: Dispatch<SetStateAction<StateShowInfoProjeto>>
}

export const ContextGlobal = createContext<TypeContextGlobal | null>(null)