import './Sobre.scss'
import '../../utils/utils.scss'
//UI
import Show_Conteiner from '../ui/show-conteiner/show-conteiner'
import type { JSONLinguagemSobreMim } from '../../date/linguagem/linguagem'

function Sobre({Lingua}: {Lingua: JSONLinguagemSobreMim | null}) {
    return (
        <Show_Conteiner>
            <section className="sessao-corpo conteiner-sobre-mim">
                <h1 className='h1-main'>{Lingua ? Lingua.tituloMain : ""}</h1>
                <span className='wraper-text-sobre-mim'>
                    <p className="p-text-sobre-mim">{Lingua ? Lingua.textoSobre : ""}</p>
                </span>
            </section>
        </Show_Conteiner>
    )
}

export default Sobre
