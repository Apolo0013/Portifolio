import './Info-Projetos+.scss'
//Imagens
import SetaIMG from '../../../assets/imagens/seta.svg'
//Props
type PropsPassaImagem = {
    direcao: "left" | "right",
    onClick: (direcao: "left" | 'right') => void
}

function PassaImagem({ direcao, onClick}: PropsPassaImagem ) {
    return (
        <div className='botao-passa-imagem' onClick={() => onClick(direcao)}>
            <img src={SetaIMG} alt="Imagem deu certa"
                style={{
                    transform: `rotate(${direcao == 'right' ? '-180deg' : '0deg'})`
                }}
            />
        </div>
    )
}

export default PassaImagem