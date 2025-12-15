//componentes é um complemento do Info-Projetos
//React
import { useState } from 'react'
//Type
import type { sobreMaisType } from '../../../type'
//CSS
import './Info-Projetos+.scss'
//Componentes
import PassaImagem from './PassaImagem'

function Info_ProjetosMais({ SobreMaisDate }: { SobreMaisDate: sobreMaisType }) {
    //controlador, vinda daqui, mas ativado do outro componentes "PassaImagem"
    const handlerclick = (direcao: 'left' | 'right'): void => {
        //alterando o index
        SetIndexSRCIMG(prev => {
            //caso for direito
            if (direcao == 'right') {
                if (prev + 1 == SobreMaisDate.pathImagem.length) return 0
                else return prev + 1
            }
            //esquerdo
            else {
                //caos ele fique forar o index
                if (prev - 1 < 0) return SobreMaisDate.pathImagem.length - 1 // coloca ele pro final
                //senao vamos apenas subtrair
                else return prev - 1
            }
        })
    }

    //State index
    const [StateIndexSRCIMG, SetIndexSRCIMG] = useState<number>(0)
    return (
        <section className='conteiner-info-projeto-sobre-mais'>
            <h1 className='h1-main'>Sobre Mais</h1>
            <p className='p-main p-sobre-mais'>{SobreMaisDate.texto}</p>
            <section className='conteiner-info-projeto-sobre-mais-imagens'>
                <PassaImagem direcao='left' onClick={handlerclick}/>
                {<img src={SobreMaisDate.pathImagem[StateIndexSRCIMG]} alt='imagem projeto' />}
                <PassaImagem direcao='right' onClick={handlerclick}/>
            </section>
        </section>
    )
}

export default Info_ProjetosMais