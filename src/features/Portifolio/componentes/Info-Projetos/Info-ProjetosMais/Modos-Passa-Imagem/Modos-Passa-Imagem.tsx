//Esse componentes foi criado para adpita o conteiner em si, pq so com CSS nao da.
import './Modos-Passas-Imagem.scss'
//React
import { useEffect, useState } from 'react'
//Type
import type { sobreMaisType } from '../../../../type'
//Global
import { UseGlobal } from '../../../../store/ProviderContext'
//Componentes
import PassaImagem from '../PassaImagem'
//Hooks pensonalizado
import { useMediaQuery } from '../../../../shared/hooks/MediaQuery'


type PropsModos = {
    handlerPassagemImagem: (direcao: 'left' | 'right') => void,
    handlerVerImagem: () => void,
    src: string
}

function ModoInline({handlerPassagemImagem, handlerVerImagem, src}: PropsModos) {
    return (
        <section className='conteiner-info-projeto-sobre-mais-imagens-inline'>
            <PassaImagem direcao='left' onClick={handlerPassagemImagem}/>
            {
                <img
                    className='imagem-sobre-projeto'
                    src={src}
                    alt='imagem projeto'
                    onClick={handlerVerImagem} 
                />
            }
            <PassaImagem direcao='right' onClick={handlerPassagemImagem}/>
        </section>
    )
}

function ModoColuna({handlerPassagemImagem, handlerVerImagem, src}: PropsModos) {
    return (
        <section className='conteiner-info-projeto-sobre-mais-imagens-coluna'>
            <img src={src}
                alt="Imagem sobre projeto"
                className="imagem-sobre-projeto"
                onClick={handlerVerImagem}
            />
            <div className="conteiner-botao-passa-imagem">
                <PassaImagem onClick={handlerPassagemImagem} direcao='left'/>
                <PassaImagem onClick={handlerPassagemImagem} direcao='right'/>
            </div>
        </section>
    )
}

function ModosPassaImagem({SobreMaisDate}: { SobreMaisDate: sobreMaisType }) {
    //controlador, vinda daqui, mas ativado do outro componentes "PassaImagem"
    const handlerPassaImagem = (direcao: 'left' | 'right'): void => {
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

    //handlerVerImagem, controlado que manipular o componente veriamgem
    const handlerVerImagem = () => {
        global.StateVerImagem({
                show: true,
                src: StateSrc
            })
    }

    //State index
    const [StateIndexSRCIMG, SetIndexSRCIMG] = useState<number>(0)
    //State Src é o caminho ate o imagem
    const [StateSrc, SetSrcIMG] = useState<string>('#')
    //Responsivade
    const MenorIgual750 = useMediaQuery('(max-width: 750px)')
    //Global
    const global = UseGlobal()!
    useEffect(() => {
        SetSrcIMG(SobreMaisDate.pathImagem[StateIndexSRCIMG])
    }, [StateIndexSRCIMG])
    return (
        <>
            {MenorIgual750
                ? <ModoColuna handlerPassagemImagem={handlerPassaImagem} handlerVerImagem={handlerVerImagem} src={StateSrc}/> 
                : <ModoInline handlerPassagemImagem={handlerPassaImagem} handlerVerImagem={handlerVerImagem} src={StateSrc}/> 
             }
        </>
    )
}

export default ModosPassaImagem