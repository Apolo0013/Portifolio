import './Botao-Selecionar.scss'

function Botao_Selecionar_UI({ text, onClick}: {text: string, onClick: () => void}) {
    return (
        <div className="conteiner-botao-selecionar" onClick={onClick}>
            <button>{text}</button>
        </div>
    )
}

export default Botao_Selecionar_UI