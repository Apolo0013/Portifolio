//SCSS
import './App.scss'
//COMPONENTES
import Cabeca from './componentes/cabeca/Cabeca'
import Projetos from './componentes/Projetos/Projetos'
import Sobre from './componentes/Sobre/Sobre'
import MinhasSkills from './componentes/MinhasSkills/MinhasSkills'
import Contato from './componentes/Contato/Contato'
//Contexto
import { UseGlobal } from './Context/ProviderContext'
//Outros
import { useEffect, useState, useRef } from 'react'
import type { JSONLinguagem, LinguagensDisponivel } from './date/linguagem/linguagem'
import NavigatorBar from './componentes/NavBar/NavBar'

function App() {
    //Referencia dos componentes
    const RefProjetos = useRef<HTMLElement | null>(null)
    const RefContato = useRef<HTMLElement | null>(null)
    //State para o componente Info_Projetos
    //Global contexto
    const global = UseGlobal()!
    const [StateLinguaContent, SetLinguaContent] = useState<JSONLinguagem | null>(null)
    useEffect(() => {
        if (!global) return // caso ele for null.
        const lingua: LinguagensDisponivel = global.LinguaAtual
        SetLinguaContent(global.Linguas[lingua])
    }, [global.LinguaAtual])
    return (
        <div className="App">
            <NavigatorBar/>
            <Cabeca RefConteiner={{ contato: RefContato, projeto: RefProjetos }} Lingua={
                    StateLinguaContent
                    ? StateLinguaContent?.cabeca
                    : null
            } />
            <Sobre Lingua={
                    StateLinguaContent
                    ? StateLinguaContent?.sobreMim
                    : null
            }/>
            <Projetos GetRef={RefProjetos} Lingua={
                    StateLinguaContent 
                    ? StateLinguaContent.projeto
                    : null
            } />
            <MinhasSkills />
            <Contato GetRef={RefContato} Lingua={
                    StateLinguaContent 
                        ? StateLinguaContent.contato
                        : null
                    }
            />
        </div>
    )
}

export default App
