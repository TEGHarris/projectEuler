const evenDiv = (n: number) => {
  for (let i = 2; i < 21; i++) {
    if (n % i != 0) return false;
  }
  return true;
};
for (let i = 2520; true; i++) {
  if (evenDiv(i)) {
    console.log(i);
    break;
  }
}
