const factorial = (n : bigint) : bigint =>{
    let product = 1n;
    for(let i =1n; i<= n; i += 1n){
        product *= i
    }
    return product
}
const val : bigint = factorial(100n)
console.log(val.toString().split("").reduce((acc : number, val: string) =>{
    acc += Number(val)
    return acc
},0))