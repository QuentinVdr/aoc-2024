const step1 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 1 : Running...");

  const textLines = Deno.readTextFileSync("day-4/input.txt").split("\n");

  let xmasCount = 0;

  function searchXmasInDirection(line, char, lineDirection, charDirection) {
    if (
      line + lineDirection * 3 < 0 ||
      line + lineDirection * 3 >= textLines.length ||
      char + charDirection * 3 < 0 ||
      char + charDirection * 3 >= textLines[line].length
    ) {
      return 0;
    }
    for (const wordSymbol of "XMAS") {
      if (textLines[line][char] !== wordSymbol) {
        return 0;
      }

      line += lineDirection;
      char += charDirection;
    }

    return 1;
  }

  for (let line = 0; line < textLines.length; line++) {
    for (let char = 0; char < textLines[line].length; char++) {
      for (let lineDirection = -1; lineDirection <= 1; lineDirection++) {
        for (let charDirection = -1; charDirection <= 1; charDirection++) {
          if (lineDirection === 0 && charDirection === 0) {
            continue;
          }
          xmasCount += searchXmasInDirection(
            char,
            line,
            lineDirection,
            charDirection,
          );
        }
      }
    }
  }

  console.log(`The count of "XMAS" is : ${xmasCount}`);
  console.log("----------------------------------------------------");
};

console.log("----------------------------------------------------");
console.log("--- Day 4: Ceres Search ---");
step1();
