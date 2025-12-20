//CSS
import './Ver-Imagem.scss'
//Controladores de Eventos
import { HandlerMouseDown, HandlerMouseLeave, HandlerMouseMove, HandlerMouseUp, HandlerMouseDbl } from './handlers'
//
import t from '../../../assets/print-projeto/Enciclopedia-Negra/imagem2.jpg'
import useModal from './VarHandler'

function VerImagem() {
    //Pegando o useState do modal, styleinline do elemento ondem vai controlar a imagem
    const Modal = useModal()
    const {PegarCursor, PegarTranslate, PegarScale, RefImagem, RefWraperImagem} = Modal
    return (
        <section className='conteiner-ver-imagem'>
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
                    <img src={t} alt="" draggable="false"/>
                </div>
            </div>
        </section>
    )
}

export default VerImagem