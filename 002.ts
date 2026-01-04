const isEven = (n: number) => {
  return n % 2 == 0;
};
const fibonacciNums: number[] = [1, 1];

const generateFibonacciNum = (farr: number[]) => {
  const len = farr.length;
  const n = farr[len - 1] + farr[len - 2];
  fibonacciNums.push(n);
};
while (fibonacciNums[fibonacciNums.length - 1] < 4000000) {
  generateFibonacciNum(fibonacciNums);
}
console.log(fibonacciNums.length);
console.log(
  fibonacciNums.reduce((acc: number, val: number) => {
    if (isEven(val)) acc += val;
    return acc;
  }, 0)
);
