const file = Bun.file("input.txt");
const content = await file.text();

const grid = content.split("\n").map((line) => line.split(""));
const WIDTH = grid[0]!.length;
const HEIGHT = grid.length;

let total = 0;
let everythingHasBeenRemoved = false;
function traverseAndRemove() {
  let somethingHasBeenRemoved = false;
  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      if (grid[j]![i] !== "@") continue;

      const surroundingSquares: Array<string | undefined> = [];

      for (let x = j - 1; x <= j + 1; x++) {
        for (let y = i - 1; y <= i + 1; y++) {
          if (x >= 0 && x < HEIGHT && y >= 0 && y < WIDTH) {
            if (x === j && y === i) continue;
            surroundingSquares.push(grid[x]![y]);
          }
        }
      }

      const canBeRemoved =
        surroundingSquares.filter((s) => s === "@").length < 4;

      if (canBeRemoved) {
        grid[j]![i] = "x";
        somethingHasBeenRemoved = true;
        total++;
      }
    }
  }

  if (!somethingHasBeenRemoved) everythingHasBeenRemoved = true;
}

while (!everythingHasBeenRemoved) {
  traverseAndRemove();
}

console.log(total);
