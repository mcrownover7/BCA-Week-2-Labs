//lab for searching through an array based on objects and tags.

//Setting up the readline.
const readline = require("readline");
const rli = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((res, rej) => {
    rli.question(questionText, res);
  });
}

//creating results array of objects (surrounded by {}). each has a title and tags property.
let results = [
  {
    title: "A Wizard of Earthsea",
    tags: ["fantasy", "ursula k. le guin"],
  },
  {
    title: "Thing Explainer",
    tags: ["science", "technology", "humor", "randal munro"],
  },
  {
    title: "The Fellowship of the Ring",
    tags: ["fantasy", "jrr tolkien"],
  },
  {
    title: "A Brief History of Time",
    tags: ["history", "science", "stephen hawking"],
  },
  {
    title: "The Great Fairy Tale Tradition",
    tags: ["fairy tale", "history", "jack zipes"],
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    tags: ["science fiction", "humor", "douglas adams"],
  },
  {
    title: "The Silmarillion",
    tags: ["fantasy", "mythology", "jrr tolkien"],
  },
  {
    title: "Eloquent JavaScript",
    tags: ["programming", "technology", "marijn haverbeke"],
  },
];

//calling function to ask user for a tag.
askingForTag();

//creating a function to ask a user for a tag. passes the tag and calls the filter/search function.
async function askingForTag() {
  let string = await ask("Please enter a tag!\n");
  search(string);
}

//creating a function (search) that takes a single argument to return a new array of each book with a matching tag.
function search(string) {
  string = string.toLowerCase();
  //setting the filter to include any results were the tag includes the user input.
  let containsTag = results.filter(function (word) {
    return word.tags.includes(string);
  });
  console.log(containsTag);
  process.exit();
}
