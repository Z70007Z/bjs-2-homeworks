function compareArrays(arr1, arr2) {
  let result;

  result = (arr1.length === arr2.length) && (arr1.every((item, i) => item === arr2[i]));
  // Ваш код

  return result ; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(item1 => item1 >= 0).filter(item2 => item2 % 3 === 0).map(item3 => item3 * 10)
  // Ваш код

  return resultArr; // array
}
