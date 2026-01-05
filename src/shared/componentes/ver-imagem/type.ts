import { type Dispatch, type RefObject, type SetStateAction } from "react"

//TYPE/////////////////////////////////////////////////////////////////////////
//Type
//state do styleinline
export type CursorType = 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing'
export type xyType = {x: number, y: number}
export type StyleInlineImagem = {
    translate: xyType,
    scale: number,
    cursor: CursorType
}
/////////////////////////////////////////////////////////////////////////
//Type do set state styleinlien
export type SetStyleIMG = Dispatch<SetStateAction<StyleInlineImagem>>
//Type Retorno do UseModal
export type ReturnUseModal = {
    Style: StyleInlineImagem,
    RefImagem: RefObject<HTMLDivElement | null>,
    RefWraperImagem: RefObject<HTMLDivElement | null>,
    //State Style
    Cursor: CursorType,
    SetCursor: Dispatch<SetStateAction<CursorType>>
    Translate: XyType,
    SetTranslate: Dispatch<SetStateAction<xyType>>,
    Scale: number,
    SetScale: Dispatch<SetStateAction<number>>,
    //Controle
    PosLast: XyType,
    SetPosLast: Dispatch<SetStateAction<XyType>>,
    PosAtual: XyType,
    SetPosAtual: Dispatch<SetStateAction<XyType>>,
    ZoomAtivado: boolean,
    SetZoomAtivado: Dispatch<SetStateAction<boolean>>,
    Press: boolean,
    SetPress: Dispatch<SetStateAction<boolean>>
}

export type XyType = {x: number, y: number}
