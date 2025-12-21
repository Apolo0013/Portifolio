//componentes é um complemento do Info-Projetos
//Type
import type { sobreMaisType } from '../../../type'
//CSS
import './Info-Projetos+.scss'
//Componentes
import ModosPassaImagem from './Modos-Passa-Imagem/Modos-Passa-Imagem'

function Info_ProjetosMais({ SobreMaisDate }: { SobreMaisDate: sobreMaisType }) {
    return (
        <section className='conteiner-info-projeto-sobre-mais'>
            <h1 className='h1-main'>Sobre Mais</h1>
            <p className='p-main p-sobre-mais'>{SobreMaisDate.texto}</p>
            <ModosPassaImagem SobreMaisDate={SobreMaisDate}/>
        </section>
    )
}

export default Info_ProjetosMais