const step1 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 1 : Running...");

  const instructions = Deno.readTextFileSync("day-3/input.txt");

  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = [...instructions.matchAll(regex)];

  let resultsSum = 0;

  matches.forEach((match) => {
    const [, x, y] = match;
    resultsSum += parseInt(x) * parseInt(y);
  });

  console.log(`The the results of the multiplications is : ${resultsSum}`);
  console.log("----------------------------------------------------");
};

const step2 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 2 : Running...");

  const instructions = Deno.readTextFileSync("day-3/input.txt");

  const regex = /(mul\((\d{1,3}),(\d{1,3})\))|(do\(\))|(don't\(\))/g;
  const matches = [...instructions.matchAll(regex)];

  let isEnable = true;
  let resultsSum = 0;

  matches.forEach((match) => {
    const [fullMatch, , x, y] = match;
    if (fullMatch === "do()") {
      isEnable = true;
    } else if (fullMatch === "don't()") {
      isEnable = false;
    } else if (isEnable && fullMatch.startsWith("mul(")) {
      resultsSum += parseInt(x) * parseInt(y);
    }
  });

  console.log(`The the results of the multiplications is : ${resultsSum}`);
  console.log("----------------------------------------------------");
};

console.log("----------------------------------------------------");
console.log("--- Day 3: Mull It Over ---");
step1();
step2();
