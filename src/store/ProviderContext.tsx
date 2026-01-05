import { useContext, useState } from "react"
//Type context
import { type StateShowInfoProjeto , type StateVerImagem, type TypeContextGlobal, ContextGlobal} from './Context'
//Componentes
import Info_Projetos from "../componentes/Info-Projetos/Info-Projetos"
import VerImagem from "../shared/componentes/ver-imagem/Ver-Imagem"
//Json das linguagem
import { Linguagem, type LinguagensDisponivel } from "../date/linguagem/linguagem"


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
    //State que guardar o nome da lingua salva
    const [StateLingua, SetLingua] = useState<LinguagensDisponivel>('brasil')
    return (
        <ContextGlobal.Provider value={{
            StateSetInfoProjeto: SetInfoProjeto,
            StateVerImagem: SetVerImagem,
            Linguas: Linguagem,
            SetLinguaAtual: SetLingua,
            LinguaAtual: StateLingua
        }}>
            {children}
            {
                StateInfoProjeto.show && <Info_Projetos info={StateInfoProjeto.info!}
                />
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
