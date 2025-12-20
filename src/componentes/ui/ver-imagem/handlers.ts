import type { MouseEvent, RefObject } from "react";
import type { ReturnUseModal, xyType } from "./VarHandler";

//Contraladores.
//PegarDirecoes ultrapassadas
type Direcao = "left" | "right" | "bottom" | "top"
type ParamPosicaoVazadas = {
    RefImagem: RefObject<HTMLDivElement | null>,
    RefWraperImagem: RefObject<HTMLDivElement | null>
}
function PosicaoVazadas({ RefImagem, RefWraperImagem }: ParamPosicaoVazadas): Direcao[] | null {
    //Verificando se o Referencia nao sao nula
    if (!RefImagem.current || !RefWraperImagem.current) return null
    //Rect  
    const rectpai: DOMRect = RefWraperImagem.current.getBoundingClientRect()
    const rectfilho: DOMRect = RefImagem.current.getBoundingClientRect()
    //Verificando direcao
    const direcao: Direcao[] = []
    if (rectfilho.left > rectpai.left) direcao.push('left')
    if (rectfilho.top > rectpai.top) direcao.push('top')
    if (rectfilho.bottom < rectpai.bottom) direcao.push('bottom')
    if (rectfilho.right < rectpai.right) direcao.push('right')
    return direcao
}

//Ajusta a posicao dele
type ParamAjustaPosicao = {
    RefImagem: RefObject<HTMLDivElement | null>,
    RefWraperImagem: RefObject<HTMLDivElement | null>,
    AlterarPosicaoAtual: ({ x, y }: xyType) => void,
    PegarPosicaoAtual: () => xyType,
    AlterarTranslate: ({x, y}: xyType) => void
}
function AjustaPosicao({ RefImagem, RefWraperImagem, AlterarPosicaoAtual, PegarPosicaoAtual, AlterarTranslate}: ParamAjustaPosicao) {
    //verificando se o referencia nao sao nula
    if (!RefImagem.current || !RefWraperImagem.current) return 
    //rect do pai e filho
    const rectfilho: DOMRect = RefImagem.current.getBoundingClientRect()
    const rectpai: DOMRect = RefWraperImagem.current.getBoundingClientRect()
    //direcao vazadas
    const direcaoVazadas: Direcao[] = PosicaoVazadas({ RefImagem: RefImagem, RefWraperImagem: RefWraperImagem })!
    if (!direcaoVazadas || direcaoVazadas.length == 0) return
    //Percorrendo essas direcao vazadas e criando a posicao nova pra ele
    const posatual: xyType = PegarPosicaoAtual() // referencia
    const posnova: xyType = {x: posatual.x, y: posatual.y} //mundando a referencia
    for (const d of direcaoVazadas) {
        switch (d) {
            case "left":
                posnova.x -= (rectfilho.left - rectpai.left)
                break
            case "right":
                posnova.x -= (rectfilho.right - rectpai.right)
                break
            case "bottom":
                posnova.y -= (rectfilho.bottom - rectpai.bottom)
                break
            case "top":
                posnova.y -= (rectfilho.top - rectpai.top)
                break
        }
    }
    //Depois de percorrer a lista, e alterando a nova posicao vamos add ele.
    AlterarPosicaoAtual(posnova)
    AlterarTranslate(posnova)
}

//doubleclick
export function HandlerMouseDbl(e: MouseEvent<HTMLElement>, {
    PegarZoomActive,
    AlterarZoomActive,
    AlterarCursor,
    AlterarTranslate,
    AlterarScale,
    PegarScale,
    AlterarPosicaoAtual,
    RefImagem,
    RefWraperImagem,
    PegarPosicaoAtual
}: ReturnUseModal) {
    //Antes de tudo vamos verificar se  o Referecia nao sao nulas
    if (!RefImagem.current) return 
    //Se estive ativando vamos desativa
    if (PegarZoomActive()) {
        AlterarZoomActive(false) // desativando o zoom
        AlterarCursor('zoom-in') // alterando para o cursor de  zoom
        AlterarScale(1) // 1 é o scale padrao
        AlterarTranslate({x: 0, y: 0})
    }
    else {
        AlterarCursor('grab') // mudar o cursor para maozinho segurando
        AlterarZoomActive(true) // zoom ativado
        const rectimg: DOMRect = RefImagem.current.getBoundingClientRect() 
        //X e Y dentro do pai
        const cX: number = e.clientX - rectimg.left
        const cY: number = e.clientY - rectimg.top
        //Translate
        const zoom = 1.5 // zoom sera de 1.5x
        //calculando o translate para ondem o usuario clicou
        const translateX: number = cX * (zoom - 1)
        const translateY: number = cY * (zoom - 1)
        //Alterando o scale
        const scale = PegarScale() * zoom // alterando...
        //Add a posicao no elemento
        AlterarScale(scale)
        AlterarTranslate({ x: translateX, y: translateY })
        AlterarPosicaoAtual({ x: translateX, y: translateY })
        //Ajustando posicao
        AjustaPosicao({
            RefImagem: RefImagem,
            RefWraperImagem: RefWraperImagem,
            AlterarPosicaoAtual: AlterarPosicaoAtual,
            PegarPosicaoAtual: PegarPosicaoAtual,
            AlterarTranslate: AlterarTranslate
        })
    }
}
//ao move o mouse no conteiner
export function HandlerMouseMove(e: MouseEvent<HTMLElement>, {
    PegarPress,
    PegarZoomActive,
    PegarPosicaoAtual,
    PegarScale,
    PegarPosicaoLast,
    AlterarPosicaoAtual,
    AlterarPosicaoLast,
    AlterarTranslate,
    RefImagem,
    RefWraperImagem
}: ReturnUseModal) {
    //deve esta com zoom ativado o pressionando tambem
    if (!PegarPress() || !PegarZoomActive) return
    //x e y do pai
    const { x, y } = { x: e.clientX, y: e.clientY }
    const poslast: xyType = PegarPosicaoLast() // pegando a posicao last/anterior
    const posatual: xyType = PegarPosicaoAtual() // Pegando a posicao atual
    const scale: number = PegarScale()//pegando o scale atual dele
    //calculando o delta
    const DeltaX: number = (x - poslast.x) / scale
    const DeltaY: number = (y - poslast.y) / scale
    //nova posicao
    const NovaPos: xyType = { x: posatual.x + DeltaX, y: posatual.y + DeltaY }
    AlterarPosicaoAtual(NovaPos)
    AlterarPosicaoLast({ x: x, y: y})
    AlterarTranslate(NovaPos)
    //Ajustando posicao
    AjustaPosicao({
        RefImagem: RefImagem,
        RefWraperImagem: RefWraperImagem,
        AlterarPosicaoAtual: AlterarPosicaoAtual,
        PegarPosicaoAtual: PegarPosicaoAtual,
        AlterarTranslate: AlterarTranslate
    })
}

//ao clica no mouse no conteiner
export function HandlerMouseDown(e: MouseEvent<HTMLElement>,
    {
        AlterarCursor,
        PegarZoomActive,
        AlterarPress,
        AlterarPosicaoLast
    }: ReturnUseModal) {
    if (!PegarZoomActive()) return // se o zoom estive desativado
    //X e Y do elemento que esta manipular, no caso o pai
    const { x, y } = { x: e.clientX, y: e.clientY }
    //dando os x e y do pai como posicao  last/anteriro
    AlterarPosicaoLast({ x: x, y: y })
    AlterarCursor('grabbing') // alterarndo o cursor
    AlterarPress(true) //mundando para true(esta sendo pressionando)
}

//ao soltar o botao do mouse no conteiner.
export function HandlerMouseUp({ AlterarCursor, PegarZoomActive, AlterarPress}: ReturnUseModal) {
    if (!PegarZoomActive()) return //caso o zoom esteja desativado.
    //mundando o cursor
    AlterarCursor('grab')
    AlterarPress(false)//mundando para nao pressionando
}

//ao mouse sair do conteiner
export function HandlerMouseLeave({
    PegarZoomActive,
    AlterarScale,
    AlterarCursor,
    AlterarTranslate,
    AlterarPress,
    AlterarZoomActive }: ReturnUseModal) {
    if (!PegarZoomActive()) return
    //Resentando tudo
    AlterarPress(false) // para nao pressionando
    AlterarScale(1) // padrao
    AlterarTranslate({ x: 0, y: 0 }) // 0 e 0, padrao
    AlterarCursor('zoom-in') // alterando para o cusro de dar zoom
    AlterarZoomActive(false) // nao esta dando zoom
}