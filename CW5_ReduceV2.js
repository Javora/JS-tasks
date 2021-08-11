function grow(x){ //using forEach and multiplying and returning a separate variable is also possible
    const arrayIterator = x[Symbol.iterator]();
    let grownArray = 1;
    for (const element of arrayIterator) {
      grownArray *= element;
    }
    return grownArray;
  }