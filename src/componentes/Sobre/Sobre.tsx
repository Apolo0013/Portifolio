import './Sobre.scss'
import '../../utils/utils.scss'
//UI
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'

function Sobre() {
    return (
        <Show_Conteiner>
            <section className="sessao-corpo conteiner-sobre-mim">
                <h1 className='h1-main'>Sobre mim</h1>
                <span className='wraper-text-sobre-mim'>
                    <p className="p-text-sobre-mim"><strong>Sou desenvolvedor Front-End</strong> com experiência em <strong>JavaScript</strong> e <strong>TypeScript</strong>, criando interfaces rápidas e objetivas. Trabalho com <strong>React</strong> e foco em clareza, desempenho e código limpo. Gosto de resolver problemas de forma simples e prática, sempre buscando melhorar. Estou aberto a oportunidades para atuar em projetos reais e entregar resultado de verdade.</p>
                </span>
            </section>
        </Show_Conteiner>
    )
}

export default Sobre