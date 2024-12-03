import { reports } from "./input.js";

const day2 = () => {
  console.log("----------------------------------------------------");
  console.log("Day 2 : Running...");

  let nbValideReports = 0;

  const checkGap = (prev, current, isAsc) => {
    let gap;
    if (isAsc) {
      gap = current - prev;
    } else {
      gap = prev - current;
    }
    if (gap > 3) {
      return false;
    }
    if (gap < 1) {
      return false;
    }
    return true;
  };

  for (let i = 0; i < reports.length; i++) {
    const currentList = reports[i];
    let prev = currentList[0];
    if (prev === currentList[1]) {
      continue;
    }
    const isAsc = prev < currentList[1];
    for (let j = 1; j < currentList.length; j++) {
      const isGapValide = checkGap(prev, currentList[j], isAsc);
      if (!isGapValide) {
        break;
      } else {
        prev = currentList[j];
        if (j === currentList.length - 1) {
          nbValideReports++;
        }
      }
    }
  }

  console.log(`The number of valide reports is : ${nbValideReports}`);
  console.log("----------------------------------------------------");
};

day2();
