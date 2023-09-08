'use strict';
{
    const summa = +prompt('Введите сууму дохода');
    if (isNaN(summa)) {
        console.log('Введите число');
        } else if (summa <= 15000) {
        console.log(`С доходом ${summa}р, сумма налога составит: ${(summa * .13).toFixed(2)} рублей`);
        } else if (summa > 50000) {
        console.log(`С доходом ${summa}р, сумма налога составит: ${((summa-50000) * .30).toFixed(2)} рублей`);
    } else {
        console.log(`С доходом ${summa}р, сумма налога составит: ${((summa-15000) * .20).toFixed(2)} рублей`);
    }
}