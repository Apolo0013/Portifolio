import { useContext, useState } from "react"
//Type context
import { type StateShowInfoProjeto , type TypeContextGlobal, ContextGlobal} from './Context'
//Componentes
import Info_Projetos from "../componentes/Info-Projetos/Info-Projetos"


function ProviderContext({ children }: {
    children: React.ReactNode
}) {
    //State para o componente que exbir as informacao do projeto
    const [StateInfoProjeto, SetInfoProjeto] = useState<StateShowInfoProjeto>({info: null, show: false})
    return (
        <ContextGlobal.Provider value={{
            StateSetInfoProjeto: SetInfoProjeto
        }}>
            {children}
            {StateInfoProjeto.show && <Info_Projetos info={StateInfoProjeto.info!} />}
        </ContextGlobal.Provider>
    )
}

export default ProviderContext

export function UseGlobal(): TypeContextGlobal | null { // usar o contexto
    return useContext(ContextGlobal)
}
