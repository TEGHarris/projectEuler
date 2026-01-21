// Incomplete
import { readFileSync } from "fs";
const alphabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const names = readFileSync("0022_names.txt","utf-8").split(",").map((name : string) =>{return name.slice(1,name.length-1)}).sort()
console.log(names.reduce((acc : number, name : string) =>{
    const indexOfName = names.indexOf(name) +1 
    let total = 0
    for (let c of name){
        console.log(c)
        total += alphabet.indexOf(c)
    }
    return acc + (total * indexOfName)
},0))
