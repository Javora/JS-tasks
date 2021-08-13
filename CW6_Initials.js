function abbrevName(name) {
  const array = [...name.matchAll(/(?<=\b)[A-Z]/gi)];

  return `${array[0].toString().toUpperCase()}.${array[1]
    .toString()
    .toUpperCase()}`;
}

const firstLetterUpperCase = (string) => string[0].toUpperCase();

function abbrevName2(name) {
  const splitName = name.split(" ");

  return (
    firstLetterUpperCase(splitName[0]) +
    "." +
    firstLetterUpperCase(splitName[1])
  );
}
