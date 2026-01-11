let acc = 0

const isPrime = (n: number) => {
  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

for(let i = 2; i < 2000000; i++){
    if(isPrime(i)) acc += i 
}
console.log(acc)