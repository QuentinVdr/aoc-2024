import { reports } from "./input.js";

const checkGap = (prev, current, isAsc) => {
  const gap = current - prev;
  if (Math.abs(gap) > 3 || Math.abs(gap) < 1) {
    return false;
  }
  if ((isAsc && gap < 0) || (!isAsc && gap > 0)) {
    return false;
  }
  return true;
};

const validateReport = (report) => {
  const isAsc = report[0] < report[1];

  let prev = report[0];
  for (let j = 1; j < report.length; j++) {
    if (!checkGap(prev, report[j], isAsc)) {
      return false;
    }
    prev = report[j];
  }
  return true;
};

const step1 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 1 : Running...");

  let nbValideReports = 0;

  for (const currentReport of reports) {
    if (currentReport[0] !== currentReport[1]) {
      if (validateReport(currentReport)) {
        nbValideReports++;
      }
    }
  }

  console.log(`The number of valide reports is : ${nbValideReports}`);
  console.log("----------------------------------------------------");
};

const step2 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 2 : Running...");

  let nbValideReports = 0;

  for (const currentReport of reports) {
    let prev = currentReport[0];
    let isSecondChance = false;
    let index = 1;
    if (prev === currentReport[1]) {
      if (currentReport[1] === currentReport[2]) {
        continue;
      }
      isSecondChance = true;
      index = 2;
    }
    const isAsc = prev < currentReport[index];
    while (index < currentReport.length) {
      if (checkGap(prev, currentReport[index], isAsc)) {
        prev = currentReport[index];
        if (index === currentReport.length - 1) {
          nbValideReports++;
        }
      } else {
        if (isSecondChance) {
          break;
        }
        isSecondChance = true;
      }
      index++;
    }
    if (index !== currentReport.length - 1) {
      // todo
    }
  }

  console.log(`The number of valide reports is : ${nbValideReports}`);
  console.log("----------------------------------------------------");
};

console.log("----------------------------------------------------");
console.log("Day 2");
step1();
step2();
