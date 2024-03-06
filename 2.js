function isFibonacci(number) {
  if (number === 0 || number === 1) {
    return true;
  }

  let a = 0;
  let b = 1;

  while (b < number) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return b === number;
}

const number = 13;
if (isFibonacci(number)) {
  console.log(number + " está na sequência de Fibonacci.");
} else {
  console.log(number + " não está na sequência de Fibonacci.");
}
