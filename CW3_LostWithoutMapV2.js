//basically the same thing can be done with a for loop, but since I've already written one it seems pointless

function maps(x){
    const doubledArray = [];
    x.forEach(element => {
      doubledArray.push(element * 2);
    });

    return doubledArray;
  }