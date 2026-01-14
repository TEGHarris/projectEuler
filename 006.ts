const n = 100;

const sumSquares = (n: number) => {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i ** 2;
  return total;
};

const squareSum = (n: number) => {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total ** 2;
};

console.log(Math.abs(sumSquares(n) - squareSum(n)));
export{}