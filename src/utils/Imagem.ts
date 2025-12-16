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
    TABELAPERIODICA: TypePATHImagemProjeto
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
    }
}