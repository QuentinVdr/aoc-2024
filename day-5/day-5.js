const step1 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 1 : Running...");

  const textLines = Deno.readTextFileSync("day-5/input.txt").split("\n");

  const orders = {};
  const queues = [];

  for (let i = 0; i < textLines.length; i++) {
    const line = textLines[i];
    if (line.includes("|")) {
      const [page, nextPage] = line.split("|");
      orders[page] = orders[page] ? [...orders[page], nextPage] : [nextPage];
    } else if (line) {
      queues.push(line.split(","));
    }
  }

  let result = 0;

  const isQueueValid = (queue) => {
    for (let i = 1; i < queue.length; i++) {
      const prevPages = queue.slice(0, i);
      if (!orders[queue[i]]) {
        continue;
      }
      if (orders[queue[i]].some((order) => prevPages.includes(order))) {
        return false;
      }
    }
    return true;
  };

  const findMiddlePage = (queue) => {
    return Number(queue[Math.floor(queue.length / 2)]);
  };

  for (const queue of queues) {
    if (isQueueValid(queue)) {
      result += findMiddlePage(queue);
    }
  }

  console.log(
    `The sum of the middle page number of each correctly-ordered updates is : ${result}`,
  );
  console.log("----------------------------------------------------");
};

const step2 = () => {
  console.log("----------------------------------------------------");
  console.log("Step 2 : Running...");

  const textLines = Deno.readTextFileSync("day-5/input.txt").split("\n");

  const orders = {};
  const queues = [];

  for (let i = 0; i < textLines.length; i++) {
    const line = textLines[i];
    if (line.includes("|")) {
      const [page, nextPage] = line.split("|");
      orders[page] = orders[page] ? [...orders[page], nextPage] : [nextPage];
    } else if (line) {
      queues.push(line.split(","));
    }
  }

  let result = 0;

  const isQueueValid = (queue) => {
    for (let i = 1; i < queue.length; i++) {
      const prevPages = queue.slice(0, i);
      if (!orders[queue[i]]) {
        continue;
      }
      if (orders[queue[i]].some((order) => prevPages.includes(order))) {
        return false;
      }
    }
    return true;
  };

  const correctQueue = (queue) => {
    while (!isQueueValid(queue)) {
      for (let i = 1; i < queue.length; i++) {
        const page = queue[i];
        if (!orders[page]) {
          queue.splice(i, 1);
          queue.add(page);
          continue;
        }
        const prevPages = queue.slice(0, i);
        if (orders[page].some((order) => prevPages.includes(order))) {
          queue.splice(i, 1);
          queue.splice(i - 1, 0, page);
        }
      }
    }
    return queue;
  };

  const findMiddlePage = (queue) => {
    return Number(queue[Math.floor(queue.length / 2)]);
  };

  for (const queue of queues) {
    if (!isQueueValid(queue)) {
      const correctedQueue = correctQueue(queue);
      result += findMiddlePage(correctedQueue);
    }
  }

  console.log(
    `The sum of the middle page number of each corrected updates is : ${result}`,
  );
  console.log("----------------------------------------------------");
};

console.log("----------------------------------------------------");
console.log("--- Day 5: Print Queue ---");
step1();
step2();
