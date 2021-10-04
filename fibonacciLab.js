//Fibonacci sequence begins 0 1 1 2 3 5 8 13 21 34
//each value is the sum of the previous 2 values
//create a script that prints the first 10 numbers in the sequence

//Setting up the readline.
const readline = require("readline");
const rli = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((res, rej) => {
    rli.question(questionText, res);
  });
}

//creating a function to get a number from the user and then passing it to the fibSeq function to determine the sequence.
askingNumber();
async function askingNumber() {
  let num = await ask(
    "What number of values do you want in your Fibonacci Sequence?\n"
  );
  num = parseInt(num);
  fibSeq(num);
  console.log(series);
  process.exit();
}

//creating a function to take a number input representing the number of indexes wanted for the fibonacci sequence. NOTE: This is not a stack, since it is not using pop/push and is rather accessing the values via the index.
// function fibonacci(num) {
//   //setting the first values in the sequence.
//   fib = [0, 1];
//   let nextNum = 2;
//   //creating while loop to generate the selected number of values for the sequence.
//   while (nextNum < num) {
//     fib[nextNum] = fib[nextNum - 1] + fib[nextNum - 2];
//     nextNum++;
//   }
// }

//setting the initial series.
let series = [0, 1]

//creating a function to use the array as a stack with .pop and .push.
function fibSeq(num) {
    while (series.length < num) {
        let fibOne = series.pop()
            let fibTwo = series.pop()
            let newFib = fibOne + fibTwo

            series.push(fibTwo, fibOne, newFib)
        
    }
}
