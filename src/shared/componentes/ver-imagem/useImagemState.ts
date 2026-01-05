import { useState, useRef } from "react"
//Type
import type {XyType, ReturnUseModal, CursorType} from './type'


//Componente ondem vai  fica as variavel globais, type etc
function useModal(): ReturnUseModal {
    //State Relacionado aos style
    const [Translate, SetTranslate] = useState<XyType>({ x: 0, y: 0 }) // Translate
    const [Cursor, SetCursor] = useState<CursorType>('zoom-in') // cursor
    const [Scale, SetScale] = useState<number>(1)
    //State relacionado ao controle
    const [PosLast, SetPosLast] = useState<XyType>({ x: 0, y: 0 }) // ultima posicao
    const [PosAtual, SetPosAtual] = useState<XyType>({ x: 0, y: 0 }) // posicao atual
    const [ZoomAtivado, SetZoomAtivado] = useState<boolean>(false) // zoom esta ativado?
    const [Press, SetPress] = useState<boolean>(false)
    //Referencia conteiner ondem fica a img e a propria imagem
    const RefWraperImagem = useRef<HTMLDivElement | null>(null)
    const RefImagem = useRef<HTMLDivElement | null>(null)
    return {
        //Referencia
        RefImagem: RefImagem,
        RefWraperImagem: RefWraperImagem,
        //state style
        Translate: Translate,
        SetTranslate: SetTranslate,
        Cursor: Cursor,
        SetCursor: SetCursor,
        Scale: Scale,
        SetScale: SetScale,
        //Controle
        PosAtual: PosAtual,
        SetPosAtual: SetPosAtual,
        PosLast: PosLast,
        SetPosLast: SetPosLast,
        Press: Press,
        SetPress: SetPress,
        ZoomAtivado: ZoomAtivado,
        SetZoomAtivado: SetZoomAtivado
    }
}

export default useModal