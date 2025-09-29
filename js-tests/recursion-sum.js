function recursiveArrSum(arr){
  if (arr.length === 0) {
    return 0
  }
  else {
    return arr[0] + recursiveArrSum(arr.slice(1))
  };
};

function loopArrSum(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  };
  return sum;
};

let numArr = [2, 4, 6, 8, 10];

console.log(recursiveArrSum(numArr));
console.log(loopArrSum(numArr));