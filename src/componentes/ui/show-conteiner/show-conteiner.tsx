//essa componentes vai fazer que o conteiner tenha um transicao quando ele fica visivel
import { useEffect, useRef, useState } from 'react'
//CSS
import './show-conteiner.scss'
//Outros
import { type typeShowOrSide, UseObserverShow } from '../../../utils/utils.tsx'


function Show_Conteiner({ children }: { children: React.ReactNode }) {
    //State que irar trabalha com a funcao UseObserverShow, sera usar pra alterar a class
    const [StateObsClass, SetObsClass] = useState<typeShowOrSide>('conteiner-side')
    //Refencia ao conteiner
    const RefConteinerMain = useRef<HTMLElement | null>(null)
    useEffect(() => {
        if (!RefConteinerMain.current) return // caso for null
        UseObserverShow(RefConteinerMain.current, SetObsClass) // observa...
    }, [])
    return (
        <main className={"wraper-show-conteiner" + " " + StateObsClass} ref={RefConteinerMain}>
            {children}
        </main>
    )
}
export default Show_Conteiner