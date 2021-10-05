//FIRST iteration that does basic grade calculation.
// let grades = {
//   midterm: 3.3,
//   project: 4.0,
//   final: 3.2,
// };

// console.log("The GPA is " + gpa(grades));

// function gpa(grades) {
//   return (
//     (grades.midterm + grades.project + grades.final) /
//     Object.keys(grades).length
//   );
// }

//SECOND iteration that calculates a weighted GPA from an updated array.
// let gradesWeighted = {
//   midterm: {
//     grade: 3.3,
//     weight: 0.25,
//   },
//   project: {
//     grade: 4.0,
//     weight: 0.25,
//   },
//   final: {
//     grade: 3.2,
//     weight: 0.5,
//   },
// };

// console.log("The Weighted GPA is " + gpaWeighted(gradesWeighted));

// function gpaWeighted(gradesWeighted) {
//   return (
//     (gradesWeighted.midterm.grade * gradesWeighted.midterm.weight +
//       gradesWeighted.project.grade * gradesWeighted.project.weight +
//       gradesWeighted.final.grade * gradesWeighted.final.weight) /
//     (gradesWeighted.midterm.weight +
//       gradesWeighted.project.weight +
//       gradesWeighted.final.weight)
//   );
// }

//FINAL iteration of the GPA calculation that can use any array that is provided.
//creating a array that follows the same grade and weight format, but with new 'random' data.
let gradesNonStructured = {
  randomAssignment: {
    grade: 2.3,
    weight: 0.1,
  },
  randomAssignment2: {
    grade: 4.0,
    weight: 0.1,
  },
  randomAssignment3: {
    grade: 3.2,
    weight: 0.1,
  },
  randomAssignment4: {
    grade: 1.5,
    weight: 0.1,
  },
  randomAssignment5: {
    grade: 2.5,
    weight: 0.1,
  },
  final: {
    grade: 3.5,
    weight: 0.5,
  },
};

//creating a function to calculate the gpa of any input array matching the grade and weight structure.
function gpaNonStructured(gradesNonStructured) {
  //creating an array of just the keys from the input array.
  let compArray = Object.keys(gradesNonStructured);
  //determining the number of objects in the generated array. NOTE: changed the for loop to do this inside, without the need for another variable.
  // let numberInputs = compArray.length;
  //setting the variables for the for loops.
  let numerator = 0;
  let denominator = 0;
  //for of loop to create the numerator of the equation. this uses the compArray and length to determine each added value per loop. Using for of since it is better at handling arrays.
  for (let key of compArray) {
    numerator +=
      gradesNonStructured[key].grade * gradesNonStructured[key].weight;
  }
  //for of loop to create the denominator of the equation. this uses the compArray and length to determine each added value per loop. Using for of since it is better at handling arrays.
  for (let key of compArray) {
    denominator += gradesNonStructured[key].weight;
  }
  return numerator / denominator;
  //replaced the following for loop with the for of loop in both the numerator and denominator calculation.
  // for (let i = 0; i < compArray.length; i++) {
  //   denominator += gradesNonStructured[compArray[i]].weight;
  // }
}

//console logging the calculated gpa of the random array and verifying it with manual calculation.
console.log(
  "The weighted GPA of the provided array is: " +
    gpaNonStructured(gradesNonStructured)
);
console.log(
  "\n\nVerification weighted GPA with manual entry: " +
    (2.3 * 0.1 + 4.0 * 0.1 + 3.2 * 0.1 + 1.5 * 0.1 + 2.5 * 0.1 + 3.5 * 0.5) /
      (0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.5)
);
console.log("Non-weighted GPA is: " + (2.3 + 4 + 3.2 + 1.5 + 2.5 + 3.5) / 6);
