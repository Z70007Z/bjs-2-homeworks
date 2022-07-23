// Задание 1
'use strict';

function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

    for (let i = 0; i < arr.length; i++) {

      if (arr[i] > max) {
        max = arr[i];
      } 
      if (arr[i] < min) {
        min = arr[i];
      } 
      sum = sum + arr[i];
    }

  avg = parseFloat((sum / arr.length).toFixed(2));
  // Ваш код

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
  }
  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = - Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const sumArr = func(arrOfArr[i]);
    if (sumArr > max) {
       max = sumArr;   
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let max = - Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } 
      if (arr[i] < min) {
        min = arr[i];
      } 
  }

  // Ваш код
  // getArrayParams(arr).max - getArrayParams(arr).min;
  return  max - min;
}
