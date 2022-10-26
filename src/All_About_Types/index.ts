//1

let a = 1042 // number

let b = 'apples and oranges' // string

const c = 'pineapples' // pineapples

let d = [true, true, false] // boolean[]

let e = {type: 'ficus'} // {type: string;}

let f = [1, false] //(number | boolean)[]

const g = [3] // number[]

let h = null // any




// 2

let i: 3 = 3 // 3
i = 4 // Error TS2322: Type '4' is not assignable to type '3'.
// it a Type literal have explicitly that your value is a specific number  = 3


let j = [1, 2, 3]
j.push(4)
j.push('5') // Error TS2345: Argument of type '"5"' is not
// assignable to parameter of type 'number'.
// this is an array with type number so it is not possible to push an element of type string into it


let k: never = 4 // Error TSTS2322: Type '4' is not assignable
// to type 'never'.
//The type never in TypeScript is a type that does not contain a value. Therefore, you cannot assign any value to a variable of type never


let l: unknown = 4
let m = l * 2 // Error TS2571: Object is of type 'unknown'.
//Unlike any, uknown type almost does not allow any operation if not through typechecks 