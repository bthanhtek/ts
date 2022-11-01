/*
1. Implement a general-purpose promisify function, which takes any function that
takes exactly one argument and a callback and wraps it in a function that returns
a promise. When you’re done, you should be able to use promisify like this
(install type declarations for NodeJS first, with npm install @types/node --
save-dev):
import {readFile} from 'fs'


type TReadFile = (path: string,
options: {encoding: string, flag?: string},
callback: (err: Error | null, data: string | null) => void ) => void



function promisify(readFile : TReadFile) {
    return (path : string) : Promise<string> => {
       return new Promise((resolve, reject) => {
            readFile(path,{encoding: 'utf8'}, (error, result) => {
                  if (error) {
                        reject(error)
                    } else {
                        resolve(result!)
                    }
           })
    })
} 
}

let readFilePromise = promisify(readFile)
readFilePromise('./myfile.ts')
.then(result => console.log('success reading file', result.toString()))
.catch(error => console.error('error reading file', error))

*/