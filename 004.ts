let largestPalindrome = 0;

const isPalindrome = (n: number) => {
  let nString: string = n.toString();
  const reversed = nString.split("").reverse().join("");
  return nString == reversed;
};
for (let i = 100; i < 1000; i++) {
  for (let j = 100; j < 1000; j++) {
    if (isPalindrome(i * j) && i * j > largestPalindrome)
      largestPalindrome = i * j;
  }
}
console.log(largestPalindrome);
