// ======STRING=======
// var newStr = myStr.slice(-4);
// var boolean = nyStr.includes('...', start);
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

// function User(name, age, avatar) {
//     this.name = name;
//     this.age = age;
//     this.avatar = avatar;
// }

// class Animal{
//     constructor(name, food, like){
//         this.name = name, 
//         this.food = food,
//         this.like = like
//     }
// }
// User.prototype.address = "HP";

// const hito = new User('Hito', 20, 'congaucute');
// const jin = new User('Jin', 10, 'conchocute');
// const dog = new Animal('Dog', 'beef', 'cat');

// jin.address = "HN"

// console.log(User.prototype.constructor === User);



// var myInfo = {
//     name: "Manh",
//     age: 18,
//     address: "HP",
// }

// var arr = [
//     'HN',
//     'HP',
//     'ND',
//     'BG',
// ]

// for (const iterator of myInfo) {
//   console.log(iterator);
// }


// ====================== Array =============================
// forEach()
// every() <==> some()
// find() <==> filter()
// map()
// reduce()


// var courses = [
//     {
//         id: 1,
//         name: 'JavaScrip',
//         coin: 0
//     },
//     {
//         id: 2,
//         name: 'Java',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'Python',
//         coin: 300
//     },
//     {
//         id: 4,
//         name: 'C++',
//         coin: 0
//     },
// ]

// var isFree =  courses.some((item, index) => {
//     console.log(index);
//     return item.coin === 0;
// })

// var newArr = courses.find((item) => {
//     return item.coin === 0;
// })

// var newArr = courses.map((item, index, originArr) => {
//     return{
//         ...item,
//         school: 'BKHN'
//     }
// })

// console.log(newArr);

// const total = courses.reduce((init, item) => {
//     return init + item.coin;
// }, 400)

// console.log("Toal: ", total);

// var depthArr = [1, 2, 3, [4, 5], 6, [7, 8, 9]];

// var a = 1, b= 2;

// var newArr = depthArr.reduce(function(init, item){
//     return init.concat(item)
// }, [])
// console.log(arr);


//=================== DOM =========================

const nodeH1 = document.getElementById('text')
const nodeH2 = document.querySelector('#text')

const listH1 = document.querySelectorAll('.title')
const listH2 = document.getElementsByClassName('title')

const forms = document.forms

nodeH2.setAttribute('data', 123000);
nodeH2.setAttribute('data2', 123111);

// console.log(nodeH2.getAttribute('data'));
// nodeH2.innerHTML = 'New JavaScrip'
// nodeH2.textContent = 'New JavaScrip'
// console.log(nodeH2.textContent);
// console.log(nodeH2.innerText);

const box = document.querySelector('.box');
console.log(box.outerHTML);
// console.log(box.innerHTML);
// box.innerHTML = '<h1>Box</h1>'

