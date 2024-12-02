import { leftList, rightList } from "./input.js";

// first step of day 1

const step1 = () => {
  console.log("The first step of day 1 is running...");

  const orderedLeftList = leftList.toSorted((a, b) => a - b);
  const orderedRightList = rightList.toSorted((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < orderedLeftList.length; i++) {
    if (orderedLeftList[i] > orderedRightList[i]) {
      result += orderedLeftList[i] - orderedRightList[i];
    } else {
      result += orderedRightList[i] - orderedLeftList[i];
    }
  }

  console.log(`The total distance between the two list is : ${result}`);
};

step1();

console.log("----------------------------------------------------");

// second step of day 1

const step2 = () => {
  console.log("The second step of day 1 is running...");

  const leftListLength = leftList.length;
  const rightMap = new Map();

  for (let i = 0; i < rightList.length; i++) {
    if (rightMap.has(rightList[i])) {
      rightMap.set(rightList[i], rightMap.get(rightList[i]) + 1);
    } else {
      rightMap.set(rightList[i], 1);
    }
  }

  let result = 0;

  for (let i = 0; i < leftListLength; i++) {
    if (rightMap.has(leftList[i])) {
      result += leftList[i] * rightMap.get(leftList[i]);
    }
  }

  console.log(`The similarity score is : ${result}`);
};

step2();
