function array( arrayNumbers ) {
  var postiveArray = [];
  var sumForNegative = 0;

  for(var i = 0; i < arrayNumbers.length; i++) {
    if(arrayNumbers[i] > 0) {
      postiveArray.push(arrayNumbers[i]);

    }else{
      sumForNegative += arrayNumbers[i];
    }
  }

  console.log(postiveArray.length);

  return sumForNegative;
}

let result = array( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

console.log(result);



//// another solution
const sumNegatives = function (negatives) {
  let sum = 0;
  let count = 0;
  if (negatives.length != 0) {
    for (let i = 0; i <= negatives.length; i++) {
      if (negatives[i] < 0) {
        sum += negatives[i];
      } else if (negatives[i] > 0) {
        count ++;
      }
    }
    let positivesNegatives = [count, sum];
    console.log(positivesNegatives);
    return positivesNegatives;
  } else {
    console.log('the input array is empty ');
  }

}

sumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
sumNegatives([]);