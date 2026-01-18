const n: bigint = BigInt(Math.pow(2,1000))
let digitSum = n.toString().split("").reduce((acc: number, val : string) => {
    acc += Number(val)
    return acc
},0)
console.log(digitSum)