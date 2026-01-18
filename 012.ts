const nthTriangleNum = (n : number) => {
return n * (n+1) /2
}

const enoughFactors = (n : number) =>{
    let factors = 0
    for (let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0) factors += 2
    }
    return factors > 500
}

let n = 7000
while(!enoughFactors(nthTriangleNum(n))){
    n++
    if(n % 1000 == 0 ) console.log(n)
}
console.log(nthTriangleNum(n))
export{}