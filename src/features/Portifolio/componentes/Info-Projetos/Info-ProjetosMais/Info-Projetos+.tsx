//componentes é um complemento do Info-Projetos
//Type
import { useEffect, useState } from 'react'
import { UseGlobal } from '../../../store/ProviderContext'
import type { sobreMaisType } from '../../../type'
//CSS
import './Info-Projetos+.scss'
//Componentes
import ModosPassaImagem from './Modos-Passa-Imagem/Modos-Passa-Imagem'

function Info_ProjetosMais({ SobreMaisDate }: { SobreMaisDate: sobreMaisType }) {
    const global = UseGlobal()!
    //lingua se servido como wraperuseState
    const [Lingua, SetLingua] = useState<{ tituloMain: string }>({ tituloMain: ""})
    useEffect(() => {
        if (!global) return
        SetLingua(global.Linguas[global.LinguaAtual].projetoInfoMais)
    }, [])
    return (
        <section className='conteiner-info-projeto-sobre-mais'>
            <h1 className='h1-main'>{Lingua.tituloMain}</h1>
            <p className='p-main p-sobre-mais'>{SobreMaisDate.texto[global.LinguaAtual]}</p>
            <ModosPassaImagem SobreMaisDate={SobreMaisDate}/>
        </section>
    )
}

export default Info_ProjetosMais