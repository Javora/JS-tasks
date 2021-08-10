function wordsToMarks(string){
  const letterSum = Array.from(string).reduce((sum, element) => {
    return sum + element.codePointAt(0) - 96;
  },0);
  console.log(letterSum)
}