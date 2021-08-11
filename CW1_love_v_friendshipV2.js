function wordsToMarks(string){
  const iterator = string[Symbol.iterator]();
  let letterSum = 0;

  for (let iteratorChar = iterator.next(); !iteratorChar.done; iteratorChar = iterator.next()){
    letterSum += iteratorChar.value.charCodeAt(0) - '`'.charCodeAt(0);
  }
  
  return letterSum;
}