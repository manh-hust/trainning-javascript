var myStr = "Hello tam giac !";
const PI = 3.141524;
// ======STRING=======
// var newStr = myStr.slice(-4);
// var newStr = myStr.replace("tam giac", "thanks");
// var newStr = myStr.trim();
// var newStr = myStr.split(' '); ==> Chuyen chuoi thanh mang

// console.log(PI.toFixed(2));
// console.log(myStr);

// =======Array=========

var arr = [
    'JS',
    'C++',
    'Java',
    'Python'
]
// toString();
// join(',');
// push <=> pop
// shift <=> unShift
// splice() them phan tu: splice(start, countDelete, '...')


// Kĩ thuật Debounce

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
