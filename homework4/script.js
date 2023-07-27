/*Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число*/

for (let i = 0; i <= 11; i++) {
    const element = i;
    if (element === 0){
        console.log(`${element} – это ноль`);
    } else if(element % 2 === 1){
        console.log(`${element} – нечетное число`);
    } else{
        console.log(`${element} – четное число`);
    }   
}

/*Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);


/*Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/


// function createArray() {
//     let array = [];
//     let arrayLength = 5;
//     for (let i = 0; i < arrayLength; i++) {
//         array[i] = Math.ceil(Math.random() * 10);
//         array.push(array[i]);        
//     }
//     return array;
// }
// console.log(createArray());

//или

function createArray() {
    let array = [];
    let arrayLength = 5;
    for (let i = 0; i < arrayLength; i++) {
        array.push(Math.ceil(Math.random() * 10));
    }
    return array;
}
const result = createArray();
console.log(`Созданный массив: ${result}.`);


//1. Рассчитать сумму элементов этого массива

function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(`Сумма элементов массива ${result} равна: ${getSum(result)}.`);

//2. Найти минимальное число

function findMinNumber(array) {
    const minNumber = Math.min(...array);
    return minNumber;
}
console.log(`Минимальное число в массиве ${result}: ${findMinNumber(result)}.`);

//3. Найти есть ли в этом массиве число 3

function hasNumber(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            count++;
        }
    }
    return count;
}
console.log(`Количество чисел "3" в массиве ${result} равно: ${hasNumber(result)}.`);


/*Задание 4
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = 0; i < 20; i++) {
    let string = '';
    for (let j = 0; j <= i; j++) {
        string += 'х';
    }
    console.log(string);
}