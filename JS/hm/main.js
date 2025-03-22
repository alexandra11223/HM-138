// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let p = prompt('Name');

let res = "Hello, " +p + "!";

let test = document.querySelector('.result').innerHTML = res;

// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. 
// Поточний рік вкажи в коді як константу;

const currentYear = 2025;
let p2 = prompt ('What is your year of birth?');

let age = currentYear - parseInt(p2);
    let res1 = "You are " + age + " years old!";

let test1 = document.querySelector('.result1').innerHTML = res1;

// 3.Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

let side = parseFloat(prompt("Введіть довжину сторони квадрата:"));
let perimeter = 4 * side;
let message1 = "Периметр квадрата: " + perimeter;
alert(message1);

// 4.Запитай у користувача радіус кола і виведи площу такої окружності.
let radius = parseFloat(prompt("Введіть радіус кола:"));
let math = Math.PI * Math.pow(radius, 2);
let message2 = "Периметр квадрата: " + math;
alert(message2);

// 5.Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let distance = parseFloat(prompt("Введіть відстань в кілометрах між двома містами:"));
let time = parseFloat(prompt("За скільки годин ти хочеш дістатися до місця призначення?"));

let speed = distance / time;
let message3 = "Необхідна швидкість:" + speed + " км/год";
alert(message3);

// 6.Реалізуй конвертор валют. 
// Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const exchangeRate = 0.92;
let p6 = prompt("Введи суму в доларах:");
let euros = p6 * exchangeRate;
let message4 = "Сума в євро: " + euros;
alert(message4);





