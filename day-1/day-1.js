import { firstList, secondList } from "./input.js";

const orderedFirstList = firstList.toSorted((a, b) => a - b);
const orderedSecondList = secondList.toSorted((a, b) => a - b);

let result = 0;

for (let i = 0; i < orderedFirstList.length; i++) {
  if (orderedFirstList[i] > orderedSecondList[i]) {
    result += orderedFirstList[i] - orderedSecondList[i];
  } else {
    result += orderedSecondList[i] - orderedFirstList[i];
  }
}

console.log(`The total distance is : ${result}`);
