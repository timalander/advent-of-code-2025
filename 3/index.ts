const file = Bun.file("input.txt");
const content = await file.text();
const lines = content.split("\n");

function findLargestInSlice(
  input: string,
  startIndex: number,
  endIndex?: number
): [number, number] {
  let largestDigitIndex = 0;
  const largestDigit = input
    .split("")
    .slice(startIndex, endIndex)
    .reduce((largest, curr, index) => {
      if (Number(curr) > Number(largest)) {
        largestDigitIndex = index;
        return curr;
      } else {
        return largest;
      }
    });

  return [Number(largestDigit), largestDigitIndex];
}

const TOTAL_DIGITS = 12;
let sum = 0;
for (const line of lines) {
  if (!line) continue;

  let result = "";
  let startIndex = 0;

  for (let i = 0; i < TOTAL_DIGITS; i++) {
    const remaining = TOTAL_DIGITS - i;
    const endIndex = line.length - remaining + 1;

    const [largestDigit, relativeIndex] = findLargestInSlice(
      line,
      startIndex,
      endIndex
    );
    result += largestDigit;
    startIndex = startIndex + relativeIndex + 1;
  }

  sum += Number(result);
}

console.log(sum);
