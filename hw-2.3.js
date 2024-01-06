let password = '1234567'; // задание 1
let userPassword = prompt ('Введите пароль');
if (userPassword === password) {
    console.log('Пароль введен верно');
} else {
    console.log('пароль введен неправильно');
} 

//задание 2
let c = 5;
if (c>0 && c<10) {
    console.log ('Верно'); //выведет "верно"
} else {
    console.log ('Неверно');
}

c=0;
if (c>0 && c<10) {
    console.log ('Верно'); 
} else {
    console.log ('Неверно');//выведет "неверно"
}

c=10;
if (c>0 && c<10) {
    console.log ('Верно'); 
} else {
    console.log ('Неверно');//выведет "неверно"
}

c =-3;
if (c>0 && c<10) {
    console.log ('Верно'); 
} else {
    console.log ('Неверно');//выведет "неверно"
}

c =2;
if (c>0 && c<10) {
    console.log ('Верно'); //выведет "верно"
} else {
    console.log ('Неверно'
    );
}

//задание 3
let d=12;
let e=150;
if (d>100 || e>100) {
    console.log ('Верно'); //выведет "верно"
} else {
    console.log ('Неверно');
}

//задание 4
let a = '2';
let b = '3';
alert(Number(a)+Number(b))

//задание 5
let monthNumber = 12;
let season;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    season = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'осень';
    break;
  default:
    console.log('Ошибка: неверный номер месяца');
}

