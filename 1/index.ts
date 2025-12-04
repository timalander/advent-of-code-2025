// Part 1

const inputFile = Bun.file("input.txt");
const input = await inputFile.text();

const instructions = input.split("\n");

const MAX_NUM = 100;
const START_NUM = 50;

let currentNumber = START_NUM;
let timesAtZero = 0;
for (let instruction of instructions) {
  const [direction, ...rest] = instruction;
  const rotations = Number(rest.join(""));

  currentNumber =
    direction === "L"
      ? (((currentNumber - rotations) % MAX_NUM) + MAX_NUM) % MAX_NUM
      : (currentNumber + rotations) % MAX_NUM;

  if (currentNumber === 0) timesAtZero++;
}

console.log(timesAtZero);

// Part 2
// const inputFile = Bun.file("input.txt");
// const input = await inputFile.text();

// const instructions = input.split("\n");

// const MAX_NUM = 100;
// const START_NUM = 50;

// let currentNumber = START_NUM;
// let timesAtZero = 0;
// for (let instruction of instructions) {
//   const [direction, ...rest] = instruction;
//   const rotations = Number(rest.join(""));

//   const nextNumber =
//     direction === "L"
//       ? (((currentNumber - rotations) % MAX_NUM) + MAX_NUM) % MAX_NUM
//       : (currentNumber + rotations) % MAX_NUM;

//   const rotationsToFirstZero =
//     direction === "L"
//       ? currentNumber === 0
//         ? MAX_NUM
//         : currentNumber
//       : currentNumber === 0
//       ? MAX_NUM
//       : MAX_NUM - currentNumber;

//   const rotationsRemaining = rotations - rotationsToFirstZero;

//   if (rotationsRemaining >= 0) {
//     timesAtZero++;

//     const furtherRotations = Math.floor(rotationsRemaining / 100);

//     timesAtZero += furtherRotations;
//   }

//   currentNumber = nextNumber;
// }

// console.log(timesAtZero);
