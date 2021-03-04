const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter number : ", (input) => {
  const fib = (num) => {
    if (num <= 2) {
      return 1;
    }
    return fib(num - 1) + fib(num - 2);
  };
  if (input > 0) {
    const result = fib(input);
    console.log(result);
  } else {
    console.error(`Number can't be less than 1`);
  }
  rl.close();
});
