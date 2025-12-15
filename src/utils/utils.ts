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
    TS: `src\\assets\\tags\\tag-typescript.svg`,
    JS: 'src\\assets\\tags\\tag-javascript.svg',
    CSS: 'src\\assets\\tags\\tag-css.svg',
    SCSS: 'src\\assets\\tags\\tag-scss.svg',
    HTML: 'src\\assets\\tags\\tag-html.svg',
    RC: "src\\assets\\tags\\tag-rc.svg",
    CS: "src\\assets\\tags\\tag-cs.svg",
    PY: "src\\assets\\tags\\tag-py.svg",
    API: "src\\assets\\tags\\tag-api.svg",
    FR: "src\\assets\\tags\\tag-ferramentas.svg"
}