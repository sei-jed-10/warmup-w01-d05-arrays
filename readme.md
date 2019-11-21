# Count of positives / sum of negatives

## Problem 

Create a function that takes an array of integers as an argument and returns an array, where the first element is the count of positive numbers and the second element is sum of negative numbers.

---
## Example

function countPSumN(arr){

if(arr.length==0){
    return arr;
}
var sum=0;
var count=0;
    for(var i=0;i<arr.length;i++){
    if(arr[i]<0){
    sum +=arr[i];
    }
    else if(arr[i]>=1){
    count++;
    }
}
var arr2=[count,sum];
return arr2;
}

countPSumN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].

Output: [10, -65].

---
## Bonus
If the input array is empty or null, return an empty array.