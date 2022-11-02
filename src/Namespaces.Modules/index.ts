/*
    Exercise
1. Play around with declaration merging, to:
a. Reimplement companion objects (from “Companion Object Pattern” on page
140) using namespaces and interfaces, instead of values and types.

 
namespace Currency {

    export const DEFAULT = "USD" as  Currency.Currency["unit"];

    export interface Currency {
        unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
        value: number,
    }


    export function from (value: number, unit = Currency.DEFAULT) : Currency {
        return {unit , value}
    }

}

let otherAmountDue = Currency.from(330, 'EUR')





b. Add static methods to an enum.
enum units {
    EUR = 'EUR',
    GBP = 'GBP',
    JPY = 'JPY',
    USD = 'USD'
}


namespace Currency {


    export interface Currency {
        unit: units
        value: number,
    }


    export function from (value: number, unit = units.USD) : Currency {
        return {unit , value}
    }

}

let otherAmountDue = Currency.from(330, units.EUR)
*/

