// ======STRING=======
// var newStr = myStr.slice(-4);
// var newStr = myStr.replace("tam giac", "thanks");
// var newStr = myStr.trim();
// var newStr = myStr.split(' '); ==> Chuyen chuoi thanh mang

// console.log(PI.toFixed(2));
// console.log(myStr);

// =======Array=========

// var arr = [
//     'JS',
//     'C++',
//     'Java',
//     'Python'
// ]
// toString();
// join(',');
// push <=> pop
// shift <=> unShift
// splice() them phan tu: splice(start, countDelete, '...')


// Kĩ thuật Debounce =======

// const input = document.querySelector("#search");
// const sendInput = () => {
//     console.log("Send...", input.value);
// }
// const debounce = (fn, delay) => {
//     let timerID;

//     return() => {
//         if(timerID){
//             clearTimeout(timerID);
//         }
//         timerID = setTimeout(() => {
//             fn();
//         }, delay)
//     }
// }
// input.addEventListener('input', debounce(sendInput, 1000))


// 3 loại function 
// - Declaration function function fuc(){}
// - Expression function var fuc = function(){}
// - Arrow function


// =============== Object ===================

// var myInfo = {
//     name: "Manh",
//     age: 18,
//     address: "HP",
//     getName: function(){
//         console.log(this.name);
//     }
// }
// myInfo.email = 'ddm@gmail.com';
// myInfo['phoneNumber'] = '018744566';

// delete myInfo.age

// console.log(myInfo);
// myInfo.getName();

// Constructor

function User(name, age, avatar) {
    this.name = name;
    this.age = age;
    this.avatar = avatar;
}

class Animal{
    constructor(name, food, like){
        this.name = name, 
        this.food = food,
        this.like = like
    }
}
User.prototype.address = "HP";

const hito = new User('Hito', 20, 'congaucute');
const jin = new User('Jin', 10, 'conchocute');
const dog = new Animal('Dog', 'beef', 'cat');

jin.address = "HN"

console.log(User.prototype.constructor === User);

