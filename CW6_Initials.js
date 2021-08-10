function abbrevName(name){
    const array = [...name.matchAll(/(?<=\b)[A-Z]/gi)];
    
    return `${array[0].toString().toUpperCase()}.${array[1].toString().toUpperCase()}`;
  }