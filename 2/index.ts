const file = Bun.file("input.txt");
const text = await file.text();

const idRanges = text.split(",");

const invalidIds: Array<number> = [];

for (const range of idRanges) {
  const [start, end] = range.split("-").map(Number);

  if (!start || !end) throw new Error("Typeguard");

  for (let id = start; id <= end; id++) {
    const stringId = String(id);
    const idLength = stringId.length;

    let isInvalid = false;
    for (let len = 1; len <= idLength / 2; len++) {
      if (idLength % len === 0) {
        const pattern = stringId.slice(0, len);
        if (pattern.repeat(idLength / len) === stringId) {
          isInvalid = true;
          break;
        }
      }
    }

    if (isInvalid) invalidIds.push(id);
  }
}

const total = invalidIds.reduce((accum, curr) => accum + curr, 0);

console.log(total);
