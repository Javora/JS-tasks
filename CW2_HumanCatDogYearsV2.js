var humanYearsCatYearsDogYears = function(humanYears) {
  const animalYears = (animalType) => 15 + (humanYears > 1 ? (humanYears * (animalType === 'cat' ? 4 : 5)) + (animalType === 'cat' ? 1 : -1) : 0 ); 
  
  return [humanYears, animalYears('cat'), animalYears('dog')];
}
