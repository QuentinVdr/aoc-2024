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

const step1 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 1 : Running...");

  let nbValideReports = 0;

  for (const currentReport of reports) {
    let prev = currentReport[0];
    if (prev === currentReport[1]) {
      continue;
    }
    const isAsc = prev < currentReport[1];
    for (let j = 1; j < currentReport.length; j++) {
      if (!checkGap(prev, currentReport[j], isAsc)) {
        break;
      }
      prev = currentReport[j];
      if (j === currentReport.length - 1) {
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

  for (let i = 0; i < reports.length; i++) {
    const currentReport = reports[i];
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
    if (index === 3) {
      index = 2;
      prev = currentReport[1];
      while (index < currentReport.length) {
        if (checkGap(prev, currentReport[index], !isAsc)) {
          prev = currentReport[index];
          if (index === currentReport.length - 1) {
            nbValideReports++;
          }
        } else {
          break;
        }
        index++;
      }
    }
    if (index === 3) {
      index = 2;
      prev = currentReport[1];
      while (index < currentReport.length) {
        if (checkGap(prev, currentReport[index], !isAsc)) {
          prev = currentReport[index];
          if (index === currentReport.length - 1) {
            nbValideReports++;
          }
        } else {
          break;
        }
        index++;
      }
    }
  }

  console.log(`The number of valide reports is : ${nbValideReports}`);
  console.log("----------------------------------------------------");
};

console.log("----------------------------------------------------");
console.log("Day 2");
step1();
step2();
