const bold = "\x1b[1m";
const reset = "\x1b[0m";

const step1 = () => {
  console.log("----------------------------------------------------");
  console.log(`${bold}Step 1 : Running...${reset}`);

  const map = Deno.readTextFileSync("day-6/input.txt").split("\n").map((line) =>
    line.split("")
  );

  const guard = { x: null, y: null, direction: "up" };

  for (let i = 0; i < map.length; i++) {
    const guardIndex = map[i].findIndex((element) => element === "^");
    if (guardIndex !== -1) {
      guard.x = guardIndex;
      guard.y = i;
      break;
    }
  }

  const distinctPositions = new Set();
  distinctPositions.add(`${guard.x},${guard.y}`);

  let isOut = false;

  while (!isOut) {
    const inFront = { x: guard.x, y: guard.y };
    switch (guard.direction) {
      case "up":
        inFront.y--;
        break;
      case "down":
        inFront.y++;
        break;
      case "left":
        inFront.x--;
        break;
      case "right":
        inFront.x++;
        break;
    }

    if (
      inFront.x < 0 || inFront.x >= map[0].length || inFront.y < 0 ||
      inFront.y >= map.length
    ) {
      isOut = true;
      break;
    } else {
      if (map[inFront.y][inFront.x] === "#") {
        switch (guard.direction) {
          case "up":
            guard.direction = "right";
            break;
          case "right":
            guard.direction = "down";
            break;
          case "down":
            guard.direction = "left";
            break;
          case "left":
            guard.direction = "up";
            break;
        }
      } else {
        guard.x = inFront.x;
        guard.y = inFront.y;
        distinctPositions.add(`${guard.x},${guard.y}`);
      }
    }
  }

  console.log(
    `The guard visit a total of ${bold}${distinctPositions.size}${reset} distinct positions`,
  );
  console.log("----------------------------------------------------");
};

const step2 = () => {
  console.log("----------------------------------------------------");
  console.log(`${bold}Step 2 : Running...${reset}`);

  const map = Deno.readTextFileSync("day-6/input.txt").split("\n").map((line) =>
    line.split("")
  );

  const guard = { x: null, y: null, direction: "up" };

  for (let i = 0; i < map.length; i++) {
    const guardIndex = map[i].findIndex((element) => element === "^");
    if (guardIndex !== -1) {
      guard.x = guardIndex;
      guard.y = i;
      break;
    }
  }

  const distinctPositions = new Set();
  distinctPositions.add(`${guard.x},${guard.y}`);

  const obstructionPositions = new Set();

  console.log(
    `There is ${bold}${obstructionPositions.size}${reset} different positions for this obstruction`,
  );
  console.log("----------------------------------------------------");
};

console.log("----------------------------------------------------");
console.log(`--- ${bold}Day 6: Guard Gallivant${reset} ---`);
console.log("----------------------------------------------------");
step1();
step2();
