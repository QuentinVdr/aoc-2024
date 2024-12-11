import { reports } from "./input.js";

const checkGap = (prev, current, isAsc) => {
  const gap = current - prev;
  if (Math.abs(gap) > 3 || Math.abs(gap) < 1) {
    return false;
  }
  return !((isAsc && gap < 0) || (!isAsc && gap > 0));
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
    if (validateReport(currentReport)) {
      nbValideReports++;
      continue;
    }

    for (let i = 0; i < currentReport.length; i++) {
      if (validateReport(currentReport.toSpliced(i, 1))) {
        nbValideReports++;
        break;
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
