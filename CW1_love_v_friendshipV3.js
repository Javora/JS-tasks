function wordsToMarks(string){
  let letterSum = 0;

  for (let i = 0; i < string.length; i++){
    letterSum += string.codePointAt(i) - '`'.codePointAt(0);
  }
  
  return letterSum
}