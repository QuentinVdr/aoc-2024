import { leftList, rightList } from "./input.js";

const step1 = () => {
  console.log("----------------------------------------------------");
  console.log("The first step is running...");

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
  console.log("----------------------------------------------------");
};

const step2 = () => {
  console.log("----------------------------------------------------");
  console.log("The second step is running...");

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
  console.log("----------------------------------------------------");
};

console.log("----------------------------------------------------");
console.log("Day 1");
step1();
step2();
