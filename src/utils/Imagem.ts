//Ondem nois vai carregar todas as imagens
//imagens
//Tags
import TagTS from "../assets/tags/tag-typescript.svg"
import TagJS from "../assets/tags/tag-javascript.svg"
import TagCSS from "../assets/tags/tag-css.svg"
import TagSCSS from "../assets/tags/tag-scss.svg"
import TagHTML from "../assets/tags/tag-html.svg"
import TagRC from "../assets/tags/tag-rc.svg"
import TagCS from "../assets/tags/tag-cs.svg"
import TagPY from "../assets/tags/tag-py.svg"
import TagAPI from "../assets/tags/tag-api.svg"
import TagFR from "../assets/tags/tag-ferramentas.svg"
//Imagems projetos
//Importacao:
//-----------
//Import print para coloca no fundo do card
//Import imagens sobremais
//-----------
//Tabela Periodica
import TP_PrintCardIMG from '../assets/print-projeto/Tabela-Periodica/print-tabela.png'
import TP_SobreMaisIMG1 from '../assets/print-projeto/Tabela-Periodica/imagem1.jpg'
import TP_SobreMaisIMG2 from '../assets/print-projeto/Tabela-Periodica/imagem2.jpg'
//Enciclopedia Negra
import EN_PrintCardIMG from '../assets/print-projeto/Enciclopedia-Negra/print-enciclopedia-negra.png'
import EN_SoreMaisIMG1 from '../assets/print-projeto/Enciclopedia-Negra/imagem1.jpg'
import EN_SoreMaisIMG2 from '../assets/print-projeto/Enciclopedia-Negra/imagem2.jpg'
import EN_SoreMaisIMG3 from '../assets/print-projeto/Enciclopedia-Negra/imagem3.jpg'
import EN_SoreMaisIMG4 from '../assets/print-projeto/Enciclopedia-Negra/imagem4.jpg'
//Quiz React
import QR_PrintCardImg from '../assets/print-projeto/Quiz-React/print-projeto.jpg'
import QR_SobreMaisIMG1 from '../assets/print-projeto/Quiz-React/imagem1.jpg'
import QR_SobreMaisIMG2 from '../assets/print-projeto/Quiz-React/imagem2.jpg'
import QR_SobreMaisIMG3 from '../assets/print-projeto/Quiz-React/imagem3.jpg'
import QR_SobreMaisIMG4 from '../assets/print-projeto/Quiz-React/imagem4.jpg'
import QR_SobreMaisIMG5 from '../assets/print-projeto/Quiz-React/imagem5.jpg'
//Youtube DownLoad
import YD_PrintCardImg from '../assets/print-projeto/YouTube-DowLoad/print-projeto.jpg'
import YD_SobreMaisIMG1 from '../assets/print-projeto/YouTube-DowLoad/imagem1.jpg'
import YD_SobreMaisIMG2 from '../assets/print-projeto/YouTube-DowLoad/imagem2.jpg'
import YD_SobreMaisIMG3 from '../assets/print-projeto/YouTube-DowLoad/imagem3.jpg'


//PATH dos icone/tag
export type TypePATHTAG = {
    JS: string,
    TS: string,
    HTML: string,
    SCSS: string,
    CSS: string,
    PY: string,
    CS: string,
    API: string,
    FR: string,
    RC: string
}

export const PATHTAG: TypePATHTAG = {
    TS: TagTS,
    JS: TagJS,
    CSS: TagCSS,
    SCSS: TagSCSS,
    HTML: TagHTML,
    RC: TagRC,
    CS: TagCS,
    PY: TagPY,
    API: TagAPI,
    FR: TagFR
}
//Imagens Projeto
type TypePATHImagemProjeto = {
    PrintProjetoCard: string,
    SobreMaisImagens: string[]
}

type TypeProjetoImagens = {
    ENCICLOPEDIANEGRA: TypePATHImagemProjeto,
    TABELAPERIODICA: TypePATHImagemProjeto,
    QUIZREACT: TypePATHImagemProjeto,
    YOUTUBEWEBDOWNLOAD: TypePATHImagemProjeto
}

export const PathImagemProjeto: TypeProjetoImagens = {
    ENCICLOPEDIANEGRA: {
        PrintProjetoCard: EN_PrintCardIMG,
        SobreMaisImagens: [
            EN_SoreMaisIMG1,
            EN_SoreMaisIMG2,
            EN_SoreMaisIMG3,
            EN_SoreMaisIMG4
        ]
    },
    TABELAPERIODICA: {
        PrintProjetoCard: TP_PrintCardIMG,
        SobreMaisImagens: [
            TP_SobreMaisIMG1,
            TP_SobreMaisIMG2
        ]
    },
    QUIZREACT: {
        PrintProjetoCard: QR_PrintCardImg,
        SobreMaisImagens: [
            QR_SobreMaisIMG1,
            QR_SobreMaisIMG2,
            QR_SobreMaisIMG3,
            QR_SobreMaisIMG4,
            QR_SobreMaisIMG5
        ]
    },
    YOUTUBEWEBDOWNLOAD: {
        PrintProjetoCard: YD_PrintCardImg,
        SobreMaisImagens: [
            YD_SobreMaisIMG1,
            YD_SobreMaisIMG2,
            YD_SobreMaisIMG3
        ]
    }
}