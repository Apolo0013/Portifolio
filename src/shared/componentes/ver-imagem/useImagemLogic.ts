import type { MouseEvent, RefObject } from "react";
import type { ReturnUseModal, xyType } from "./type";

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

function AjustaPosicao(modal: ReturnUseModal) {
    //verificando se o referencia nao sao nula
    if (!modal.RefImagem.current || !modal.RefWraperImagem.current) return 
    //rect do pai e filho
    const rectfilho: DOMRect = modal.RefImagem.current.getBoundingClientRect()
    const rectpai: DOMRect = modal.RefWraperImagem.current.getBoundingClientRect()
    //direcao vazadas
    const direcaoVazadas: Direcao[] = PosicaoVazadas({
        RefImagem: modal.RefImagem,
        RefWraperImagem: modal.RefWraperImagem
    })!
    if (!direcaoVazadas || direcaoVazadas.length == 0) return
    //Percorrendo essas direcao vazadas e criando a posicao nova pra ele
    const posatual: xyType = modal.PosAtual // referencia
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
    modal.SetPosAtual(posnova)
    modal.SetTranslate(posnova)
}

//doubleclick
export function HandlerMouseDbl(e: MouseEvent<HTMLElement>, modal: ReturnUseModal) {
    //Antes de tudo vamos verificar se  o Referecia nao sao nulas
    if (!modal.RefImagem.current) return 
    //Se estive ativando vamos desativa
    if (modal.ZoomAtivado) {
        modal.SetZoomAtivado(false) // desativando o zoom
        modal.SetCursor('zoom-in') // alterando para o cursor de  zoom
        modal.SetScale(1) // 1 é o scale padrao
        modal.SetTranslate({x: 0, y: 0})
    }
    else {
        modal.SetCursor('grab') // mudar o cursor para maozinho segurando
        modal.SetZoomAtivado(true) // zoom ativado
        const rectimg: DOMRect = modal.RefImagem.current.getBoundingClientRect() 
        //X e Y dentro do pai
        const cX: number = e.clientX - rectimg.left
        const cY: number = e.clientY - rectimg.top
        //Translate
        const zoom = 1.5 // zoom sera de 1.5x
        //calculando o translate para ondem o usuario clicou
        const translateX: number = cX * (zoom - 1)
        const translateY: number = cY * (zoom - 1)
        //Alterando o scale
        const scale = modal.Scale * zoom // alterando...
        //Add a posicao no elemento
        modal.SetScale(scale)
        modal.SetTranslate({ x: translateX, y: translateY })
        modal.SetPosAtual({ x: translateX, y: translateY })
        //Ajustando posicao
        AjustaPosicao(modal)
    }
}
//ao move o mouse no conteiner
export function HandlerMouseMove(e: MouseEvent<HTMLElement>, modal: ReturnUseModal) {
    //deve esta com zoom ativado o pressionando tambem
    if (!modal.Press || !modal.ZoomAtivado || modal.Scale < 1.25) return
    //x e y do pai
    const { x, y } = { x: e.clientX, y: e.clientY }
    const poslast: xyType = modal.PosLast // pegando a posicao last/anterior
    const posatual: xyType = modal.PosAtual // Pegando a posicao atual
    const scale: number = modal.Scale//pegando o scale atual dele
    //calculando o delta
    const DeltaX: number = (x - poslast.x) / scale
    const DeltaY: number = (y - poslast.y) / scale
    //nova posicao
    const NovaPos: xyType = { x: posatual.x + DeltaX, y: posatual.y + DeltaY }
    modal.SetPosAtual(NovaPos)
    modal.SetPosLast({ x: x, y: y})
    modal.SetTranslate(NovaPos)
    //Ajustando posicao
    AjustaPosicao(modal)
}

//ao clica no mouse no conteiner
export function HandlerMouseDown(e: MouseEvent<HTMLElement>, modal: ReturnUseModal) {
    if (!modal.ZoomAtivado) return // se o zoom estive desativado
    //X e Y do elemento que esta manipular, no caso o pai
    const { x, y } = { x: e.clientX, y: e.clientY }
    //dando os x e y do pai como posicao  last/anteriro
    modal.SetPosLast({ x: x, y: y })
    modal.SetCursor('grabbing') // alterarndo o cursor
    modal.SetPress(true) //mundando para true(esta sendo pressionando)
}

//ao soltar o botao do mouse no conteiner.
export function HandlerMouseUp(modal: ReturnUseModal) {
    if (!modal.ZoomAtivado) return //caso o zoom esteja desativado.
    //mundando o cursor
    modal.SetCursor('grab')
    modal.SetPress(false) //mundando para nao pressionando
}

//ao mouse sair do conteiner
export function HandlerMouseLeave(modal: ReturnUseModal) {
    if (!modal.ZoomAtivado) return
    //Resentando tudo
    modal.SetPress(false) // para nao pressionando
    modal.SetScale(1) // padrao
    modal.SetTranslate({ x: 0, y: 0 }) // 0 e 0, padrao
    modal.SetCursor('zoom-in') // alterando para o cusro de dar zoom
    modal.SetZoomAtivado(false) // nao esta dando zoom
}

//Controlador do Scroll
export function HandlerScroll(
    e: React.WheelEvent<HTMLDivElement>,
    modal: ReturnUseModal) {
    //ajustando a posicao caso ele tenha escapulindo
    AjustaPosicao(modal)
    //Scale 
    let scale: number = modal.Scale
    //verificando se o scroll foi pra cima ou baixo
    if (e.deltaY < 0) scale += 0.1 // cima
    else if (e.deltaY > 0) scale -= 0.1 // baixo
    //se o scale for menor a 1
    if (scale < 1 || scale > 2) return // simplementes vamos retorna.
    //caso o scale passe de 1.25 scale o usuario ta permitido em mexer a tela
    if (scale >= 1.25) modal.SetZoomAtivado(true) // ele pode move na tela
    else modal.SetZoomAtivado(false)
    //mudando o scale
    modal.SetScale(scale)
}