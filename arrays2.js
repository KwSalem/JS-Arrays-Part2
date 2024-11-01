// Task 1;
/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

function isArrayLengthOdd(numbers) {
  return numbers.length % 2 !== 0;
}
console.log(isArrayLengthOdd([1, 2, 3])); // --- True
console.log(isArrayLengthOdd([1, 2, 3, 4])); //--- False
//----------------------------------------------------------//

// Task 2:
/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  return numbers.length % 2 === 0;
}
console.log(isArrayLengthEven([1, 2, 3])); // --- False
console.log(isArrayLengthEven([1, 2, 3, 4])); // --- True
//--------------------------------------------------------------//

// Task 3:
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  let newArray = [...instructors];
  newArray.push("Laila");
  return newArray;
}
console.log(addLailaToArray(["Mshary", "Hasan"])); // -- ["Mshary", "Hasan", "Laila"]
// ---------------------------------------------------------------//

// Task 4:
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  return teams.pop();
}
console.log(eliminateTeam(["Brazil", "Germany", "Italy"])); // result= "Italy"
