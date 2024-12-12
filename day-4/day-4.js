const step1 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 1 : Running...");

  const textLines = Deno.readTextFileSync("day-4/input.txt").split("\r\n");
  console.log("🚀 ~ step1 ~ textLines:", textLines);

  const regex = /XMAS|SAMX/g;
  const matches = textLines.map((line) => line.matchAll(regex)).flat();

  let xmasCount = matches.length;

  for (let line = 0; line < textLines.length - 3; line++) {
    for (let char = 0; char < textLines[line].length; char++) {
      if (textLines[line][char] === "X") {
        if (
          textLines[line + 1][char + 1] === "M" &&
          textLines[line + 2][char + 2] === "A" &&
          textLines[line + 3][char + 3] === "S"
        ) {
          xmasCount++;
        }
        if (
          textLines[line + 1][char] === "M" &&
          textLines[line + 2][char] === "A" &&
          textLines[line + 3][char] === "S"
        ) {
          xmasCount++;
        }
        if (
          textLines[line + 1][char - 1] === "M" &&
          textLines[line + 2][char - 2] === "A" &&
          textLines[line + 3][char - 3] === "S"
        ) {
          xmasCount++;
        }
      }
      if (textLines[line][char] === "S") {
        if (
          textLines[line + 1][char + 1] === "A" &&
          textLines[line + 2][char + 2] === "M" &&
          textLines[line + 3][char + 3] === "X"
        ) {
          xmasCount++;
        }
        if (
          textLines[line + 1][char] === "A" &&
          textLines[line + 2][char] === "M" &&
          textLines[line + 3][char] === "X"
        ) {
          xmasCount++;
        }
        if (
          textLines[line + 1][char - 1] === "A" &&
          textLines[line + 2][char - 2] === "M" &&
          textLines[line + 3][char - 3] === "X"
        ) {
          xmasCount++;
        }
      }
    }
  }

  console.log(`The the results of the multiplications is : ${xmasCount}`);
  console.log("----------------------------------------------------");
};

console.log("----------------------------------------------------");
console.log("--- Day 4: Ceres Search ---");
step1();

// Try : 2088 to low
