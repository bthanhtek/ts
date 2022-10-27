/*
1. Which parts of a function’s type signature does TypeScript infer: the parameters,
the return type, or both?

    TypeScript could infer both the type of the Input type parameter, as well as the Output type parameter based on the return value of the function expression.

2 . Is JavaScript’s arguments object typesafe? If not, what can you use instead?

    unsafe , we can use Rest parameters 
3 You want the ability to book a vacation that starts immediately. Update the over‐
loaded reserve function from earlier in this chapter (“Overloaded Function
Types” on page 58) with a third call signature that takes just a destination,
without an explicit start date. Update reserve’s implementation to support this
new overloaded signature.
*/

type Reservation = any

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination?: string): Reservation
}

let reserve: Reserve = (
    from: Date ,
    toOrDestination: Date | string,
    destination?: string
    ) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
    // Book a one-way trip
    } else if (typeof toOrDestination === 'string') {
    // Book a round trip
    }
 }

 /*
 5 
 */
 type TIS = <T>(arg1 : T, arg2 : T) => boolean


 let is : TIS = (arg1 , arg2) => {
    if(arg1 === arg2) {
      return true
    }
    return false
 }

 // Compare a string and a string
is('string', 'otherstring') // false
// Compare a boolean and a boolean
is(true, false) // false
// Compare a number and a number
is(42, 42) // true
// Comparing two different types should give a compile-time error
is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable
// to parameter of type 'number'.
// [Hard] I should be able to pass any number of arguments
// is([1], [1, 2], [1, 2, 3]) // false