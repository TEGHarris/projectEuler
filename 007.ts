const isPrime = (n: number) => {
  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

let numPrimes = 0;
let counter = 1;
while (true) {
  counter++;
  if (isPrime(counter)) numPrimes++;
  if (numPrimes == 10001) {
    console.log(counter);
    break;
  }
}

export{}