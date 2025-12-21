//CSS
import './Ver-Imagem.scss'
//Controladores de Eventos
import { HandlerMouseDown, HandlerMouseLeave, HandlerMouseMove, HandlerMouseUp, HandlerMouseDbl } from './handlers'
//Variavel global
import useModal from './VarHandler'
import { UseGlobal } from '../../../Context/ProviderContext'

function VerImagem({ src }: { src: string}) {
    //Pegando o useState do modal, styleinline do elemento ondem vai controlar a imagem
    const Modal = useModal()
    const { PegarCursor, PegarTranslate, PegarScale, RefImagem, RefWraperImagem } = Modal
    //Global contexto
    const global = UseGlobal()!
    return (
        <section className='conteiner-ver-imagem'
            onClick={(e: React.MouseEvent) => {
                //se o click nao for nesse elemento
                if (e.target != e.currentTarget) return
                //retirar o StateVerImagem da tela
                global.StateVerImagem({
                    show: false,
                    src: ""
                })
            }}
        >
            <div className='conteiner-ver-imagem-show'
                ref={RefWraperImagem}
                //Controaldores de eventos
                onMouseDown={(e) => HandlerMouseDown(e ,Modal)}
                onMouseLeave={() => HandlerMouseLeave(Modal)}
                onMouseMove={(e) => HandlerMouseMove(e, Modal)}
                onMouseUp={() => HandlerMouseUp(Modal)}
                onDoubleClick={(e) => HandlerMouseDbl(e, Modal)}
            >
                <div className="imagem-ver"
                    ref={RefImagem}
                    style={{
                        transform: `
                            translate(${PegarTranslate().x}px, ${PegarTranslate().y}px) scale(${PegarScale()})
                        `,
                        cursor: PegarCursor()
                    }}
                >
                    <span className='noclick'></span>
                    <img src={src} alt="Imagem" draggable="false"/>
                </div>
            </div>
        </section>
    )
}

export default VerImagem