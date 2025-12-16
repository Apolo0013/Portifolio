

//CHATGPT
export function findLastIndex<T>(arr: T[], fn: (value: T, index: number, array: T[]) => boolean): number {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (fn(arr[i], i, arr)) return i;
    }
    return -1;
}
