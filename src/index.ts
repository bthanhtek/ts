type Filter = {
    (array: number[], f: (item: number) => boolean): number[]
}

function filter(array: string | any[], f: { (_: any): boolean; (arg0: any): any }) : Filter {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let item = array[i]
        if (f(item)) {
            result.push(item)
        }
    }
    return result
}
filter([1, 2, 3, 4], _ => _ < 3)
