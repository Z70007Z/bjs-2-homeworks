function solveEquation(a, b, c) {
  "use strict";
  let arr;
  let d;
     d = Math.pow(b,2)-4*a*c;
   if (d < 0) {
      arr = [];
   } else if (d = 0) {
  //   let root;
   //   root = -b/(2*a);
      arr.push(d);
      arr.push(-b/(2*a));
   } else if (d > 0) {
      arr.push((-b + Math.sqrt(d))/(2*a));
      arr.push((-b - Math.sqrt(d))/(2*a));   
   }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
