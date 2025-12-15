//imagens
import TagTS from "@/assets/tags/tag-typescript.svg"
import TagJS from "@/assets/tags/tag-javascript.svg"
import TagCSS from "@/assets/tags/tag-css.svg"
import TagSCSS from "@/assets/tags/tag-scss.svg"
import TagHTML from "@/assets/tags/tag-html.svg"
import TagRC from "@/assets/tags/tag-rc.svg"
import TagCS from "@/assets/tags/tag-cs.svg"
import TagPY from "@/assets/tags/tag-py.svg"
import TagAPI from "@/assets/tags/tag-api.svg"
import TagFR from "@/assets/tags/tag-ferramentas.svg"


//CHATGPT
export function findLastIndex<T>(arr: T[], fn: (value: T, index: number, array: T[]) => boolean): number {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (fn(arr[i], i, arr)) return i;
    }
    return -1;
}


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