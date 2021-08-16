const arr = [1, 4, 2, 3.5];

function reducerFn(sum, item) {
  return sum + item * 3;
}

function myReduce(arr, reduceFunction, initialVal = 0) {
  let reduceOut = initialVal;
  for (let i = 0; i < arr.length; i++) {
    reduceOut = reduceFunction(reduceOut, arr[i]);
  }
  return reduceOut;
}

console.log(myReduce(arr, reducerFn, 0));
console.log(arr.reduce(reducerFn, 0));
