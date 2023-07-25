// /*Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль 
// результат 2^3 степени + 3 ^ 3 степени*/

let exponentiation = number => Math.pow(number, 3);
console.log(exponentiation(2) + exponentiation(3));

// /*Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести,что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/


function salaryAfterTaxes() {
    const userSalaryAmount = prompt('Введите размер Вашей зароботной платы: ');
    if (isNaN(userSalaryAmount)) {
        alert(`Вы ввели не число! Попробуйте еще раз!`);
        salaryAfterTaxes();
    } else {
        const resultOfMathOperation = userSalaryAmount - (userSalaryAmount * 0.13);
        console.log(`Размер заработной платы за вычетом налогов равен: ${resultOfMathOperation}.`);
    }
}
salaryAfterTaxes();

//__________________________________________________________________________________

// function salaryAfterTaxes() {
//     const userSalaryAmount = prompt('Введите размер Вашей зароботной платы: ');
//     if (isNaN(userSalaryAmount)) {
//         alert(`Вы ввели не число! Попробуйте еще раз!`);
//         return 0;
//     } else {
//         const resultOfMathOperation = userSalaryAmount - (userSalaryAmount * 0.13);
//         return resultOfMathOperation;
//     }
// }
// let result = salaryAfterTaxes();
// console.log(`Размер заработной платы за вычетом налогов равен: ${result}.`);

// /*Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/

// //Первый вариант

// function maxNumber() {
//     const num1 = Number(prompt(`Введите первое число: `));
//     const num2 = Number(prompt(`Введите второе число: `));
//     const num3 = Number(prompt(`Введите третье число: `));

//     if(num1 >= num2 && num1 >= num3){
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3){
//         return num2;
//     } else{
//         return num3;
//     }
// }
// const result =  maxNumber();
// console.log(`Максимальное значение среди введенных чисел ${result}.`);

// //Второй вариант

function maxNumber() {
    const num1 = Number(prompt(`Введите первое число: `));
    const num2 = Number(prompt(`Введите второе число: `));
    const num3 = Number(prompt(`Введите третье число: `));

    const largestNumber = Math.max(num1, num2, num3);
    return largestNumber;
}
const result =  maxNumber();
console.log(`Максимальное значение среди введенных чисел ${result}.`);


// /*Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.*/


let Addition = (num1, num2) => num1 + num2;
console.log(Addition(2, 6));

let Multiplication = (num1, num2) => num1 * num2;
console.log(Multiplication(2, 6));

let Division = (num1, num2) => num1 / num2;
console.log(Division(2, 6));

let Difference = (num1, num2) => num1 - num2;
console.log(Difference(2, 6));

function Difference(num1, num2) {
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}
console.log(Difference(6, 6));
console.log(Difference(3, 6));
console.log(Difference(15, 6));