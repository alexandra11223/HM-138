// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

let inp1 = document.querySelector('.input1')
let btn = document.querySelector('.btn')
let result = document.querySelector('.result')

btn.onclick = () => {
    let name = inp1.value
    result.innerHTML = 'Привіт, ' + name + ' !'
}


// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. 
// Поточний рік вкажи в коді як константу;
const currentYear = 2025;
let p2 = document.querySelector('.input2')
let btn2 = document.querySelector('.btn2')
let result2 = document.querySelector('.result2')

btn2.onclick = () => {
    let birthYear = parseInt(p2.value)
    let age = currentYear - birthYear
    result2.innerHTML = 'You are ' + age + ' years old!'
}

// 3.Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let p3 = document.querySelector('.input3')
let btn3 = document.querySelector('.btn3')
let result3 = document.querySelector('.result3')

btn3.onclick = () => {
    let perimeter = 4 * parseInt(p3.value)
    result3.innerHTML = "Периметр квадрата: " + perimeter
}

// 4.Запитай у користувача радіус кола і виведи площу такої окружності.
let p4 = document.querySelector('.input4')
let btn4 = document.querySelector('.btn4')
let result4 = document.querySelector('.result4')

btn4.onclick = () => {
    let radius = parseFloat(p4.value);
    let math = Math.PI * Math.pow(radius, 2);
    result4.innerHTML = "Периметр квадрата: " + math;
}

// 5.Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
// Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let distanceInput = document.querySelector('.input-distance')
let timeInput = document.querySelector('.input-time')
let btn5 = document.querySelector('.btn5')
let result5 = document.querySelector('.result5')

btn5.onclick = () => {
    let distance = parseFloat(distanceInput.value);
    let time = parseFloat(timeInput.value);
    let speed = distance / time;
    result5.innerHTML = "Необхідна швидкість:" + speed + " км/год";
}

// 6.Реалізуй конвертор валют. 
// Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const exchangeRate = 0.92;
let p6 = document.querySelector('.input6')
let btn6 = document.querySelector('.btn6')
let result6 = document.querySelector('.result6')

btn6.onclick = () => {
    let dollars = parseFloat(p6.value)
    let euros = dollars * exchangeRate
    result6.innerHTML = "Сума в євро: " + euros
}

