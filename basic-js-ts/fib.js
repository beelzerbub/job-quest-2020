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
  const result = fib(input);
  console.log(result);
  rl.close();
});
