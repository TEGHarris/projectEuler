const isPythagorean = (a : number, b : number, c:number) => {
    return (a**2 + b**2) == c**2
}

for(let c = 1; c < 1000; c++){
    for(let b = 0; b < c; b++){
        for(let a =0; a < b; a++){
            if(isPythagorean(a,b,c) && a + b+c == 1000){
                console.log(a*b *c)
                break
            }
        }
    }
}