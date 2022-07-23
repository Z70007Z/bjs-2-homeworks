function solveEquation(a, b, c) {
  'use strict';
  let arr = [];
  let d;
     d = (b**2)-(4*a*c);
   if (d < 0) {
         arr = [];
   } else if (d === 0) {
         arr.push(-b / (2 * a));
   } else if (d > 0) {
         arr.push((-b + Math.sqrt(d))/(2*a));
         arr.push((-b - Math.sqrt(d))/(2*a));   
   }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  'use strict';
  let totalAmount;
  let paymentMonth;  // Ежемесячная оплата
  let S = amount - contribution; // Тело кредита
  let dataNow = new Date(); // Дата текущая
  let n = parseInt((date.getMonth() - dataNow.getMonth()) + ((date.getFullYear() - dataNow.getFullYear()) * 12));   // На какой срок был выдан кредит
  let P = +(percent/12)/100;  // Процентная ставка
 
      // Расчет ежемесячной оплаты
      paymentMonth = S * (P + (P / (((1 + P)**n) - 1)));
      // Общая сумма выплат
      totalAmount = ((paymentMonth * n)).toFixed(2);

      console.log (`Вывод: ${+totalAmount}`);

 // код для задачи №2 писать здесь
   
  return +totalAmount;
}
