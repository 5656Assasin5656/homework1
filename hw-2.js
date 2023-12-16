let a = 20;
alert(a);
console.log(a)

// задание 1

const ageProduct = 2007;
alert('ageProduct');
console.log('ageProduct')

// задание 2

const creator = 'Брендан Эйх';
alert(creator);
console.log(creator)

// задание 3

let x = 10;
let y = 2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);

// задание 4

let result = 5 ** 2;
alert(result);
console.log(result)

// задание 5

let с = 9;
let b = 2;
alert(с%b);
console.log(с%b)

// задание 6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// задание 7

let age = prompt ('Сколько вам лет?');
alert(age);
console.log(age)

// задание 8

const user = {
    name: 'Борис',
    age: 33,
    isAdmin: true
}
alert(user);
console.log(user)

// задание 9.1

user['city of residence'] = 'Orenburg';
alert(user['city of residence']);
console.log(user['city of residence'])

// задание 9.2

user.age = 27;
console.log(user)

// задание 9.3

delete user['city of residence'];
console.log(user)

// задание 9.4

let info = prompt ('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
console.log(user[info])

// задание 10

let userName = prompt('Введите ваше имя:');
alert('Привет, ${userName}!');
console.log('userName')