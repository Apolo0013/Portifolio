import { useEffect, useState } from 'react'
import './tags.scss'
//Utils
import {PATHTAG, type TypePATHTAG} from '../../../utils/Imagem'

function TagsInline({ listatag }: { listatag: string[] }) {
    function GetPathsImgTag() {
        //Reserta o state caso ele chame dnv
        SetListaPathImgTag([])
        for (const tag of listatag) { // pecorrendo o lista de linguagem/tecnologia
            const tagupper: string = tag.toUpperCase()
            if (Object.entries(PATHTAG).some(x => x[0] == tagupper)) { // se ele estive na lista...
                const path: string = PATHTAG[tagupper as keyof TypePATHTAG] // pegando o path
                SetListaPathImgTag(prev => [...prev, path])
            }
        }
    }

    const [StateListaPathImgTag, SetListaPathImgTag] = useState<string[]>([])
    useEffect(() => {
        GetPathsImgTag()
    }, [])
    return (
        <div className="conteiner-tags">
            {
                StateListaPathImgTag.map((path, key) => (
                    <div className="conteiner-tag-img" key={key + 'tag'} >
                        <img src={path} alt="Imagem da tag" />
                    </div>
                ))
            }
        </div>
    )
}

export default TagsInline
