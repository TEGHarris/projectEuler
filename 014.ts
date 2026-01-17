let sequenceLengths = [0];
const collatz = (n: number) => {
  if (n % 2 == 0) return n / 2;
  return 1 + 3 * n;
};

const getCollatzLength = (n: number) => {
  let counter = 0;
  while (n !== 1) {
    n = collatz(n);
    counter++;
  }
  return counter;
};
for (let i = 1; i < 1000000; i++) {
  sequenceLengths.push(getCollatzLength(i));
}
let maxLength = sequenceLengths.reduce((acc : number, val : number) => {
    acc = Math.max(acc,val)
    return acc
},0)
console.log(sequenceLengths.indexOf(maxLength))