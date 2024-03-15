"use strict";
alert("Привет, мир!");
alert("Я JavaScript!");
/*alert(3 +
    1
    + 2);*/
//Объявляем переменную и пределяем переменную
let message;
message = "Hello!"; //Сохранить строку "Hello!" в переменной с именем message
alert(message); //Показывает содержимое переменной

message = "Hello!";
alert(message);

message = "Hello!";
message = "World"; //значение переменной изменено
alert(message);

const myBirthday = "18.02.2000"; //константная переменная. Неизменяемая переменная

let admin, name;
name = "Джон";
admin = name;
alert(admin);

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

name = "Лена";
alert(`Привет, ${name}!`);

