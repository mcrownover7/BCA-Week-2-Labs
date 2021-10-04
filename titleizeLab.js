//Setting up the readline.
const readline = require("readline");
const rli = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((res, rej) => {
    rli.question(questionText, res);
  });
}

//calling the function.
askingForTitle();

//creating an async function to ask for a title.
async function askingForTitle() {
  let string = await ask("Please enter your title!\n");
  titleize(string);
}

//creating a function to handle the string returned from the ask function and turn it into an array. then the map method is used to correct the capitalization.
function titleize(string) {
  let userTitleArr = string.split(" ");
  //using map method to create a new array with the corrected capitalization.
  let correct = function (word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  };
  let correctTitle = userTitleArr.map(correct);
  console.log(correctTitle.join(" "));
  process.exit();
}
