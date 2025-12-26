import BrasilJSON from './Brasil.json' // Brasil
import InglesJSON from './Ingles.json' // Ingles
import Skills from '../minhaskills.json'

//Tipadagem do json
//Titulo main
type TituloMain = {
    tituloMain: string
}

//conteudo da sessao Cabeca.tsx
export type JSONLinguagemCabeca = {
    fraseCurta: string,
    botoesRapido: {
        projeto: string,
        contato: string
    }
}
//Conteudo da sessao sobre mim
export interface JSONLinguagemSobreMim extends TituloMain {
    textoSobre: string
}
//Projeto + Card
export interface JSONLinguagemProjeto extends TituloMain {
    Card: {
        resumo: string,
        tags: string
    }
}
//Sobre Mais Projeto
interface LinksSobre extends TituloMain {
    texto: string
}

//Sobre mais projeto
export type JSONLinguagemSobreMaisProjeto = {
    resumoProjeto: string,
    linkGitHub: LinksSobre,
    linkSite: LinksSobre,
    tecnologiaLinguagem: string
}

//Contato
export interface JSONLinguagemContato extends TituloMain {
    texto: string
}
//Navegador bare
export type JSONLinguagemNavBar = {
    projeto: string,
    skills: string,
    sobre: string,
    contato: string
}

export type JSONLinguagem = {
    cabeca: JSONLinguagemCabeca,
    sobreMim: JSONLinguagemSobreMim,
    projeto: JSONLinguagemProjeto,
    projetoInfo: JSONLinguagemSobreMaisProjeto,
    projetoInfoMais: TituloMain,
    contato: JSONLinguagemContato,
    navBar: JSONLinguagemNavBar
}


export type LinguagensDisponivel = "ingles" | "brasil"

export type Linguagens = {
    brasil: JSONLinguagem,
    ingles: JSONLinguagem
}

export const Linguagem: Linguagens = {
    brasil: BrasilJSON,
    ingles: InglesJSON
}

//minhasskills ja sera seperado por ter o seu proprio json.
//Minhas SKills
export type JSONLinguagemMinhasSkills = {
    tituloMain: {
        brasil: string,
        ingles: string
    },
    skills: {
        title: string,
        text: {
            brasil: string,
            ingles: string
        },
        tag: string
    }[]
}

export const JSONMinhasSkills: JSONLinguagemMinhasSkills = Skills