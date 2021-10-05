//creating a menu ordering script using .argv
//creating the menu object

let menu = {
  burger: 5.00,
  fries: 3.50,
  shake: 1.11,
  salad: 4.25,
  //creating a method to take the userOrder from the .argv
  order: function (userOrder) {
    //declaring our total to initialize at 0
    let totalOrder = 0;
    //for of loop to create a sum of all the user input items
    for (let key of userOrder) {
      totalOrder += this[key];
    }
    //returning the total with two decimals. NOTE: .toFixed() turns it into a string, since number will automatically truncate anything ending in 0s
    return totalOrder.toFixed(2);
  },
};
//creating user order variable with argv to pass into our object method
let userOrder = process.argv.slice(2);

//console logging the calculated total
console.log("Your total is $" + menu.order(userOrder));
