"use strict";
let person={
    name:"hasan",
    age:27,
    gender:"male"

};
console.log(person.name);
console.log(person.age);
console.log(person.gender);
/////////////   2   //////////////////////
let person2 = {
    name:"John",
    age:30
};
person2.gender ="male";
console.log(person2);
/////////////   3   ///////////////////////
let person3={
    name:"John",
    age:25
};
person3["gender"]="male";
console.log(person3);
////////////   4   //////////////////////
let name = person["name"];
person3.name = "hasan"
let age = person["age"];
let gender = person["gender"];