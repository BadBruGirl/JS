// Задание 1
// Дан объект numbers.Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (const key in numbers) {
    if (numbers[key] > 3 || numbers[key] === 3) {
        console.log(numbers[key]);   
    }
}


// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

//1. author: "John", // вывести этот текст

console.log(post.author); 
//_______________________________________________

//2. dislikes: 2, // вывести это число 

let result = Object.entries(post.comments[0]);
let newObj = result[3][1];
console.log(newObj.dislikes);

//_______________________________________________

// 3.  userId: 5, // вывести это число

let thirdResult = Object.entries(post.comments[1]);
console.log(thirdResult[0][1]);

//_______________________________________________

// 4. text: "lorem ipsum 2", // вывести этот текст

let fourthResult = Object.entries(post.comments[1]);
console.log(fourthResult[2][1]);



// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.price -= 0.15;
    console.log(`Цена продукта ${product.id} с учетом вычета 15% равна ${product.price}.`);
});



// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.Исходные данные - массив products.

const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg",],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg",],
    },
    {
        id: 8,
        price: 78,
    },
];

const hasPhoto = products.filter(function (product) {
    if (product.photos && product.photos.length > 0 ) {
        return product.photos;
    } 
});
console.log(hasPhoto);


// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.


const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const result = products.sort(( a, b ) =>  a.price - b.price);
console.log(result);


//     ** Задание 5 **
// Дано 2 массива
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const obj = {};

if(en.length === ru.length){
    for(let i = 0; i < en.length; i++) {
        obj[en[i]] = ru[i];
    }
    console.log(obj);
} else {
    console.log(`Создать объект невозможно, так как длина объектов не одинаковая!`);
}