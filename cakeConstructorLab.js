//creating a class that generates objects that represent cakes with 3 properties (flavor of cake, flavor of frosting, decoration). method attached to class to print a description of the cake to the terminal. creating a factory function that generates a default cake.

//creating the cake class
class Cake {
  //static factory function to return a default cake
  static factoryCake() {
    return new Cake("vanilla", "chocolate", "no decorations");
  }
  //constructor that sets the expected inputs and input types.
  constructor(cake, frost, dec, eat) {
    if (
      typeof cake != "string" ||
      typeof frost != "string" ||
      typeof dec != "string"
    ) {
      throw "All inputs must be strings with values!";
    }
    if (eat < 0) {
      throw "Cannot eat negative slices of cake!";
    }
    //NOTE: Due to the if statements above the || assignment of default values is not necessary. Leaving in for clarity.
    this.flavor = cake || "vanilla";
    this.icing = frost || "chocolate";
    this.decoration = dec || "no decorations";
    this.eatenSlices = eat || 0;
    this.startingSlices = 8;
  }
  //creating method to 'eat' a select amount of slices.
  eatSlice() {
    this.remainingSlices = this.startingSlices - this.eatenSlices;
    console.log(
      `This is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}. You have eaten ${this.eatenSlices} slices of the cake and there are ${this.remainingSlices} slices remaining.\n`
    );
  }
  //creating a method to describe the called cake.
  describe() {
    console.log(
      `This is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}.\n`
    );
  }
}

//declaring two cakes, one with new and one with the factory function method.
let myCake = new Cake("chocolate", "caramel", "sprinkles", 5);
let newCake = new Cake("chocolate", "peanut butter", "peanuts");
let defaultCake = Cake.factoryCake();

//this no longer works since it falls outside of if statement on line 8, but previously it would appear as confetti, chocolate, no decorations, and 0 eaten because of the || operator setting a default value if undefined.
// let testCake = new Cake('confetti')

//calling both cakes with the describe and eatSlice functions.
defaultCake.describe();
// defaultCake.eatSlice();
// myCake.describe();
myCake.eatSlice();
// newCake.describe();
newCake.eatSlice();
