function wordsToMarks(string){
  const iterator = string[Symbol.iterator]();
  let letterSum = 0;

  for (const char of iterator){
    letterSum += char.codePointAt(0) - 96;
  }
  
  return letterSum;
}