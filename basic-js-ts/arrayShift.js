const readline = require("readline");

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    rl.question(
      "Please enter list of text with comma ex. a,b : ",
      (inputList) => {
        const list = inputList.split(",");
        console.log(list);
        rl.question("Please enter direction (left,right) : ", (direction) => {
          if (direction === "left" || direction === "right") {
          } else {
            throw new Error("Wrong input");
          }
          console.log(direction);
          rl.question("Please enter move number : ", (inputNumber) => {
            const number = parseInt(inputNumber);
            list.reduce();
          });
        });
      }
    );
  } catch (e) {
    console.error(e);
  }
}

main();
