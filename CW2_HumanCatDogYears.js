var humanYearsCatYearsDogYears = function(humanYears) {
    const catYears = 15+(humanYears > 1 ? (humanYears * 4) + 1 : 0 ); 
    const dogYears = 15+(humanYears > 1 ? (humanYears * 5) - 1 : 0 );
    
    return [humanYears, catYears, dogYears];
  }
  