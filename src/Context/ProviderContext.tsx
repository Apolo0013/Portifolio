import { useContext, useState } from "react"
//Type context
import { type StateShowInfoProjeto , type StateVerImagem, type TypeContextGlobal, ContextGlobal} from './Context'
//Componentes
import Info_Projetos from "../componentes/Info-Projetos/Info-Projetos"
import VerImagem from "../componentes/ui/ver-imagem/Ver-Imagem"


function ProviderContext({ children }: {
    children: React.ReactNode
}) {
    //State para o componente que exbir as informacao do projeto
    const [StateInfoProjeto, SetInfoProjeto] = useState<StateShowInfoProjeto>({ info: null, show: false })
    //State para o componentes de ver a imagem
    const [StateVerImagem, SetVerImagem] = useState<StateVerImagem>({
        show: false,
        src: ""
    })
    return (
        <ContextGlobal.Provider value={{
            StateSetInfoProjeto: SetInfoProjeto,
            StateVerImagem: SetVerImagem
        }}>
            {children}
            {
                StateInfoProjeto.show && <Info_Projetos info={StateInfoProjeto.info!} />
            }
            {
                StateVerImagem.show && <VerImagem src={StateVerImagem.src}/>
            }
        </ContextGlobal.Provider>
    )
}

export default ProviderContext

export function UseGlobal(): TypeContextGlobal | null { // usar o contexto
    return useContext(ContextGlobal)
}
