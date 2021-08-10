function wordsToMarks(string){
  const iterator = string[Symbol.iterator]();
  let iteratorChar = iterator.next();
  let letterSum = 0;

  for (;!iteratorChar.done; iteratorChar = iterator.next()){
    letterSum += iteratorChar.value.charCodeAt(0) - '`'.charCodeAt(0);
  }
  
  return letterSum;
}