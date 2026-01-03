import { type Dispatch, type RefObject, type SetStateAction, useState, useRef} from "react"
//TYPE/////////////////////////////////////////////////////////////////////////
//Type
//state do styleinline
type CursorType = 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing'
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
    //Cursor
    AlterarCursor: (tipo: CursorType) => void,
    PegarCursor: () => CursorType,
    //Translate
    AlterarTranslate: ({ x, y }: xyType) => void,
    PegarTranslate: () => xyType
    //Scale
    AlterarScale: (scale: number) => void,
    PegarScale: () => number
    //Parte das variavel de controle
    //ZoomActive / Zoom Ativado
    AlterarZoomActive: (opcao: boolean) => void,
    PegarZoomActive: () => boolean
    //Posicao Atual
    AlterarPosicaoAtual: ({ x, y }: xyType) => void,
    PegarPosicaoAtual: () => xyType,
    //Posicao Last/Anterior
    AlterarPosicaoLast: ({ x, y }: xyType) => void,
    PegarPosicaoLast: () => xyType
    //Press/Pressionando
    AlterarPress: (opcao: boolean) => void,
    PegarPress: () => boolean
    //Referencia aos elementos
    RefWraperImagem: RefObject<HTMLDivElement | null>,
    RefImagem: RefObject<HTMLDivElement | null>,
}
/////////////////////////////////////////////////////////////////////////
//Type Das variavel de controle
type TypeVarHandler = {
    zoomactive: boolean,
    posicaoAtual: xyType,
    posicaoLast: xyType // posicao passado/anterior,
    press: boolean // pressionando ou nao?
}

//Componente ondem vai  fica as variavel globais, type etc
function useModal(): ReturnUseModal {
    //State ondem vai guardar as propriedades do style do conteiner imagem ondem esta servido como wraper.
    const [StateStyleInlineImagem, SetStyleInlineImagem] = useState<StyleInlineImagem>({
        scale: 1,
        translate: {x: 0, y: 0},
        cursor: 'zoom-in'
    })

    //Cursor/////////////////////////////////////////////////////////////////////
    //Set
    function AlterarCursor(tipo: CursorType) {
        SetStyleInlineImagem(prev => ({
            cursor: tipo,
            translate: prev.translate,
            scale: prev.scale
        }))
    }
    //State
    function PegarCursor(): CursorType {return StateStyleInlineImagem.cursor}

    //Translate//////////////////////////////////////////////////////////////////
    //Set
    function AlterarTranslate({ x, y }: xyType ) {
        SetStyleInlineImagem(prev => ({
            translate: { x: x, y: y },
            cursor: prev.cursor,
            scale: prev.scale
        }))
    }
    //State
    function PegarTranslate(): xyType { return StateStyleInlineImagem.translate }
    
    //Scale//////////////////////////////////////////////////////////////////////////
    //Set
    function AlterarScale(scale: number) {
        SetStyleInlineImagem(prev => ({
            scale: scale,
            translate: prev.translate,
            cursor: prev.cursor
        }))
    }

    //State
    function PegarScale(): number {return StateStyleInlineImagem.scale}
    //Agora variavels de controle
    const [StateVarHandler, SetVarHandler] = useState<TypeVarHandler>({
        posicaoAtual: { x: 0, y: 0 },
        posicaoLast: { x: 0, y: 0 },
        zoomactive: false,
        press: false
    })
    //
    //Zoomacitve//////////////////////////////////////////////////////////////////////////
    //Set
    function AlterarZoomActive(opcao: boolean) {
        SetVarHandler(prev => ({
            zoomactive: opcao,
            posicaoAtual: prev.posicaoAtual,
            posicaoLast: prev.posicaoLast,
            press: prev.press
        }))
    }
    //State
    function PegarZoomActive(): boolean { return StateVarHandler.zoomactive }

    //Posicao Atual//////////////////////////////////////////////////////////////////////////
    //Set
    function AlterarPosicaoAtual({ x, y }: xyType) {
        SetVarHandler(prev => ({
            posicaoAtual: { x: x, y: y },
            posicaoLast: prev.posicaoLast,
            zoomactive: prev.zoomactive,
            press: prev.press
        }))
    }
    //state
    function PegarPosicaoAtual(): xyType { return StateVarHandler.posicaoAtual }

    //Posicao Last/Anterior//////////////////////////////////////////////////////////////////////////
    //Set
    function AlterarPosicaoLast({ x, y }: xyType) {
        SetVarHandler(prev => ({
            posicaoLast: { x: x, y: y},
            posicaoAtual: prev.posicaoAtual,
            zoomactive: prev.zoomactive,
            press: prev.press
        }))
    }
    //State
    function PegarPosicaoLast(): xyType { return StateVarHandler.posicaoLast }
    
    //Press///////////////////////////////////////////////////////////////////////////
    //Set
    function AlterarPress(opcao: boolean) {
        SetVarHandler(prev => ({
            press: opcao,
            zoomactive: prev.zoomactive,
            posicaoAtual: prev.posicaoAtual,
            posicaoLast: prev.posicaoLast
        }))
    }   
    //State
    function PegarPress(): boolean { return StateVarHandler.press }
    //=================================================================
    //Referencia conteiner ondem fica a img e a propria imagem
    const RefWraperImagem = useRef<HTMLDivElement | null>(null)
    const RefImagem = useRef<HTMLDivElement | null>(null)
    return {
        Style: StateStyleInlineImagem, // somente leitura
        //Cursor
        AlterarCursor: AlterarCursor,
        PegarCursor: PegarCursor,
        //Translate
        AlterarTranslate: AlterarTranslate,
        PegarTranslate: PegarTranslate,
        //Scale
        AlterarScale: AlterarScale,
        PegarScale: PegarScale,
        //Variavel Controladores
        //ZoomActive
        AlterarZoomActive: AlterarZoomActive,
        PegarZoomActive: PegarZoomActive,
        //PosicaoAtual
        AlterarPosicaoAtual: AlterarPosicaoAtual,
        PegarPosicaoAtual: PegarPosicaoAtual,
        //Posicao Last/Anterior
        AlterarPosicaoLast: AlterarPosicaoLast,
        PegarPosicaoLast: PegarPosicaoLast,
        //Press
        AlterarPress: AlterarPress,
        PegarPress: PegarPress,
        //Referencia
        RefImagem: RefImagem,
        RefWraperImagem: RefWraperImagem,

    }
}

export default useModal