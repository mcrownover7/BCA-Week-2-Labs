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

//creating the callback function for the filter.

function search(tags) {
  //creating callback function to check for included tags.
  function checkTags(book) {
    let bookTags = book.tags;
    return tags.every(function (tag) {
      return bookTags.includes(tag);
    });
  }

  let matched = results.filter(checkTags);

  //only console logging the book titles.
  matched.forEach((book) => {
    console.log(book.title);
  });
  process.exit();
}

//calling the function with an array search that is exclusive (both need to be present in the book).
search(["science fiction", "humor"]);
