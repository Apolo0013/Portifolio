//SCSS
import { useEffect, useRef} from 'react'
import './App.scss'
//COMPONENTES
import Cabeca from './componentes/cabeca/Cabeca'
import Projetos from './componentes/Projetos/Projetos'
import Sobre from './componentes/Sobre/Sobre'
import MinhasSkills from './componentes/MinhasSkills/MinhasSkills'
import Contato from './componentes/Contato/Contato'
//Contexto
import { UseGlobal } from './Context/ProviderContext'


function App() {
    //Referencia dos componentes
    const RefProjetos = useRef<HTMLElement | null>(null)
    const RefContato = useRef<HTMLElement | null>(null)
    //State para o componente Info_Projetos
    const global = UseGlobal()!
    useEffect(() => {
        if (!global) return // caso ele seja null
    }, [])
    return (
        <div className="App">
            <Cabeca RefConteiner={{contato: RefContato, projeto: RefProjetos}}/>
            <Sobre />
            <Projetos GetRef={RefProjetos} />
            <MinhasSkills />
            <Contato  GetRef={RefContato} />
        </div>
    )
}

export default App
