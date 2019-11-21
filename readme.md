# Count of positives / sum of negatives

## Problem 

Create a function that takes an array of integers as an argument and returns an array, where the first element is the count of positive numbers and the second element is sum of negative numbers.

---
## Example

Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].

var result = [];
var posnum = []
var sum = 0;
function arryFun(arry){
    if (arry.length === 0){
        console.log("Arry empty");
    }else {
        for (var i = 0; i < arry.length; i++){
        if (arry[i] < 0){
            sum += arry[i];   
        }else if (arry[i] > 0){
          posnum.push(arry[i]);
        }

    }
    
    result.push(posnum.length,sum);
    return result;

    }

}

arryFun([1,-8,-1])

arryFun([1,2,-1,-5,-10,5])
Output: [10, -65].

---
## Bonus
If the input array is empty or null, return an empty array.