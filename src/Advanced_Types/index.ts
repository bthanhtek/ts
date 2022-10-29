/*
1. For each of the following pairs of types, decide if the first type is assignable to the
second type, and why or why not. Think about these in terms of subtyping and
variance, and refer to the rules at the start of the chapter if you’re unsure (if
you’re still unsure, just type it into your code editor to check!):

a. 1 and number // can because 1 is suptype number
b. number and 1 // can't because number is not suptype of 1
c. string and number | string // can
d. boolean and number // can't because boolean is not suptype number
e. number[] and (number | string)[] 
f. (number | string)[] and number[] // can
g. {a: true} and {a: boolean} // can
h. {a: {b: [string]}} and {a: {b: [number | string]}} // can
i. (a: number) => string and (b: number) => string // can
j. (a: number) => string and (a: string) => string // can't because parameter a:number is not supertype a : string 
k. (a: number | string) => string and (a: string) => string // can
l. E.X (defined in an enum enum E {X = 'X'}) and F.X (defined in an enum
enum F {X = 'X'}) // can't because enum is only
2. If you have an object type type O = {a: {b: {c: string}}}, what’s the type of
keyof O? What about O['a']['b']?

    // {c : string}

3. Write an Exclusive<T, U> type that computes the types that are in either T or U,
but not both. For example, Exclusive<1 | 2 | 3, 2 | 3 | 4> should resolve
to 1 | 4. Write out step by step how the typechecker evaluates Exclusive<1 |
2, 2 | 4>.

4. Rewrite the example (from “Definite Assignment Assertions” on page 151) to
avoid the definite assignment assertion.

let userId: string = ''
fetchUser()
userId.toUpperCase() // OK
function fetchUser() {
  userId = globalCache.get('userId')
}

}
*/

