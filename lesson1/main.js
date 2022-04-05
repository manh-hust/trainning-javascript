'user strict'
/*var fullName = 'DO DUC MANH'
var name = new String('Manh Do')
console.log(fullName.slice(3, 5))
console.log(fullName.replace(/D/g,'C'))
console.log(fullName.toLocaleLowerCase())
console.log(fullName.trim())
var languages = 'C Cpp JAVA PHP';
console.log(languages.split(' '))*/

/*
var number;
number = [2,3,5,11,2,43,31];
var number2 = [1000,2102]
var animal = [
    'chicken',
    'dog',
    'cat',
    'pig',
]
*/

/*console.log(animal.join(' ')) -- chhuyển mảng về dạng chuỗi với kí tự ngăn cách tự truyền vào
console.log(animal.pop())
animal.push('birth', 'tiger')
console.log(animal)
animal.unshift('ga')
console.log(animal)*/
/* animal.splice(1,0,'Bear') 3 tham so co the vua xoa vua them */
/*
console.log(number.concat(animal))
console.log(number.slice(1,2))
*/


/*var me = {
    name: 'Manh Do',
    age: 20,
    job: 'HUST'
}
me.address = 'Hai Phong'
console.log(me)*/

// var date = new Date();
// var day = date.getDate();
// var month = date.getMonth() + 1;
// var year = date.getFullYear();
// var hour = date.getHours();
// console.log(day+'/'+month+'/'+year+'/'+hour)

// console.log(date.getTime())

/*var arr = [2,44,2,1,4,56,3]
arr.sort(function(a,b){ return (b-a)});
console.log(arr)
console.log(Math.max.apply(null,arr))*/

// ================= Prototype  Object==========================
/*function Animal(name, age){
    this.name = name;
    this.age = age;

    this.getName = function() {
        return this.name;
    }
}
var animals= [
    dog = new Animal('cho',12),
    cat = new Animal('meo',8),
    pig = new Animal('lon',1),
]
Animal.prototype.mother = 'Fish'
console.log(animals)*/

// animals.sort(function(a,b){return a.name-b.name})
// console.log(animals)

// var animals = [
//      'pig',
//      '12',
//      'Campuchia'
// ]
// for(var value of animals){
//     console.log(value)
//}


/*======================== Thêm kiến thức về mảng  =============================== */

// animals.forEach(function (animal) {
//     console.log(animal)
// })
/* Some chỉ cần 1 cái thỏa mãn, every cần all*/
/*
var checkName = animals.some(function (animal) {
    return animal.name === 'tiger'
})
console.log(checkName)
/* Find tìm thấy cái đầu tiên, Filter tìm tất cả*/
/* 
var checkNameTiger = animals.filter(function (animal) {
    return animal.name ==='tiger'
})
console.log(checkNameTiger)
*/

/* Lặp lại qua tất cả các phần tử, Return ra mảng mới có thể thêm bớt tùy ý*/
/*var newAnimals = animals.map(function (animal, index, originArray) {
    return {
        name: animal.name,
        age: animal.age,
        father: animal.father,
        price: '12$',
        index: index
    }
});
console.log(newAnimals)*/


/*  Hàm reduce để tính toán: 2 tham số, có giá trị thứ 2 là giá trị khởi tạo, total là biến để tích trữ */
/*var total = animals.reduce(function (total, animal) {
  return total+ animal.age
}, 0)// Giá trị khởi tạo không bắt buộc, nếu không có thì lấy obj đầu tiên
console.log(total)

const numbers = [1, 3, 5, 2, 87, 234, 3, 23]
const result = numbers.reduce(function(a, b) { 
    return a + b;
})
console.log(result)
*/
/*
 **** Foreach - Callback
Array.prototype.forEachX = function(callback) {
    for(var index in this){
       if( this.hasOwnProperty(index)){
        callback(this[index], index );
       }
    }
}
var animals = [
    'dog',
    'cat',
    'pig',
    'lion',
    'duck'
]
animals.forEachX(function(animal, index) {
    console.log(index +': ' +animal)
})
**** Filter - Callback
Array.prototype.filter2 = function(callback){
    var out = [];
    for(var index in this){
        if( this.hasOwnProperty(index)){
            var result = callback(this[index], index, this) 
            if(result){
                out.push(this[index])
            }
        }
    }
    return out
}

var animal = animals.filter2(function(animal,index,originArray) {
    return animal.name ==='tiger'
})
console.log(animal)
*/
/*var animals = [
    {
        name: 'dog',
        age: 1.2,
        father: 'Black'
    },
    {
        name: 'cat',
        age: 2,
        father: 'Gray'
    },
    {
        name: 'pig',
        age: 1.5,
        father: 'Violet'
    },
    {
        name: 'tiger',
        age: 3,
        father: 'While'
    },
    {
        name: 'tiger',
        age: 3.6,
        father: 'Yellow'
    }
]
Array.prototype.some2 = function(callback) {
    for(var index in this){
        if( this.hasOwnProperty(index)){
            if(callback(this[index],index,this)==false){
                return false;
            }
        }
    }
    return true
}
var result = animals.some2(function(animal,index, originArray) {
    return animal.age > 2
})
console.log(result)*/





/* ********************************DOM******************************************* */
/* Attribute */

// getAttribute khi thêm thuộc tính đã có thì nó ghi đè lên
// classList sẽ thêm vào mà không ghi đè

// var container = document.querySelector('.container')
//     // container.className = 'close'
// container.setAttribute('class','containerC')
// console.log(container.getAttribute('class'))

// var f8LinkElement = document.querySelectorAll('a')[0]
// var f8ShortLink = f8LinkElement.getAttribute('href')

/* Text */
//  - innerText: chỉ lấy ra giá trị text 
//  - textContent: lấy tất cả khoảng trắng và có thể lấy chữ có thuộc tính bị ẩn

//  -innerHTML: lấy hết bên trong, nếu gán thì ghi đè hết lên con
//  -outerHTML: Lấy chính thẻ đó, nếu gán thì ghi đè chính nó

//  var divText = document.querySelector('.box');
//  console.log(divText.innerHTML)
//divText.innerHTML = '<h1> Heloo </h1>'
//  divText.draggable = true  - Kéo đi được

/* Element */

// querySEelector('input[value="1"][id="2"]:checked:disabled')

//  var cha = document.querySelectorAll('.container-child label')
//  console.log(cha)
//  cha.onclick = function(e) {
//     console.log(e.target);
// }
// for(let i = 0 ; i < cha.length ; i++){
//     console.log(cha[i])
//      cha[i].onclick = function(e) {
//         console.log(e.target)
//      }
//  }


//var animals = document.querySelector('.animals')
//console.log([animals])
// console.log(animals.attributes) - đếm số atttribute
// animals.autofocus = false - con trỏ focus
// console.log(animals.childElementCount) - đếm số element con
// console.log(animals.children) - mảng các element con
// console.log(animals.childNodes) - trả về mảng các text node, tính cả khoảng trắng
// console.log(animals.firstChild) - lấy node đầu tiên ( text node)
// console.log(animals.firstElementChild) - lấy element đầu tiên
// console.log(animals.nextElementSibling) - trả về element tiếp theo
// console.log(animals.nodeType) - trả về 1 là element, 2 là attribue, 3 là textnode
// console.log(animals.offsetLeft) - cách lề bên trái, offsetHeight chiều cao, offsetTop - chiều cao, offsetWidth - độ dài
// console.log(animals.parentElement) - lấy element cha

/* DOM CSS */
// var divText = document.querySelector('.box');

// Object.assign(divText.style, {
//     width: '200px',
//     height: '200px',
//     backgroundColor: 'orange'
// })
// divText.style.width = '500px'

// ClassList property =====================================

// add: thêm class
// contains: kiểm tra sự tồn tại
// remove: xóa bỏ class
// toggle: tìm thấy thì xóa, không thấy thì thêm vào
// replace('classA', 'classB'): thay thế classA bằng classB
// item(index): trả về tên className trong mảng classList
// value(): trả về chuỗi trong class (bao gồm cả dấu cách) === toString
//var divText = document.querySelector('.box');
//  divText.classList.add('open')
//  divText.classList.replace('open','close')
//  console.log(divText.classList.contains('div-box'))
// console.log(divText.classList.toString())
// console.log(divText.classList)
//  setInterval(function() {
//      divText.classList.toggle('close')
//  }, 1000)
//  divText.classList.remove('close')


// ================ DOM Event ==============================================
/*  - onclick
    - ondbclick
    - onchange: mọi thay đổi trên element(vd như khi nhập ô input)
    - onresize: khi co kéo màn hình, thay đổi size
    - onmousewheel: sử dụng con lăn chuột
    - onscroll: sử dụng scroll
    - onmouseup: khi nhả chuột ra
    - onmousedown: khi 1 nút chuột được nhấn
    - onmouseover: như hover CSS
    - oninput: thay đổi trong input
    - onchange: khi thay đổi bất cứ thứ gì

    - onkeydown: khi nhấn phím xuống
    - onkeyup: khi nhả phím ra
    - onkeypress: khi nhấn giữ phím

    - e.which: trả số thứ tự của phím
 */
// document.querySelector('body').onclick= function(e){
//     console.log(e.target)
// console.log(e.toElement)
// console.log(e.target.value) - Lấy giá trị
//}
// 1. Attribute events
// inputElement.onkeyup = function(e) {
//     console.log(e.which)
// }

// 2. preventDefault: ngăn chặn hành vi mặc định(ví dụ như lúc chuyển trang)

// var aElemant = document.links;

// for(var i = 0; i< aElemant.length; i++){
//     aElemant[i].onclick = function(e) {
//         if(!e.target.href.startsWith('https://f8.edu.vn/')){
//             e.preventDefault();
//         }
//      }
// }

// 3. stopPropagation(): Loại bỏ sự nổi bọt
// var divText = document.querySelector('.box');
// var divTextCon = document.querySelector('.box-h1') 
// var divTextCon2 = document.querySelector('.box-h2') 

//      divText.onclick = function(e) {
//          console.log('DIV')
//      }
//      divTextCon.onclick = function(e) {
//          e.stopPropagation()
//         console.log('Con DIV')
//     }
//     divTextCon2.onclick = function(e) {
//         e.stopPropagation()
//         console.log('Con DIV2')
//     }


// ============ Event listener: tách nhỏ ra chứ không viết chung nhiều công việc cùng lúc được ======================================
// addEventListener(eventName, funtion())
// removeEventListener(eventName, funtion())
/*var btn = document.querySelector('.btn');
btn.addEventListener('click', function(e) {
    console.log('Helloo nha')
})
function viec2() {
    console.log('Helloo nha 2')
}
btn.addEventListener('click', viec2)
setTimeout(function() {
    btn.removeEventListener('click',viec2)
}, 2000)*/

// ============ JSON: Là định dạng dữ liệu
// JavaScrip Object Notation
// Thể hiện dạng Numer, Boolean, Null, Array, Object

// Mã hóa/ giải mã (encode/decode)
// parse/stringify ==> Chuyển đổi sang dạng mã mới và giải mã ngược lại

/*var json = '["PHP", "Python", "NodeJS"]';
var jsonO = '{"name": "Chicken","age": 18}';
var jsonN = '1';
var jsonStr = '"Hello Manh"'
console.log(JSON.parse(jsonN));
console.log(JSON.parse(json));
console.log(JSON.parse(jsonO));
console.log(JSON.parse(jsonStr));

console.log(JSON.stringify('Con duy ngu ngoc'))*/

// ============= Promise: ======================================

// Khai báo promise luôn thành công
// var pro  = Promise.resolve('THanh cong')
/*
    - Sync/Async: đồng bộ và bất đồng bộ
    - 
*/
// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//         setTimeout(function () {
//             console.log(3);
//             setTimeout(function () {
//                 console.log(4);
//                 setTimeout(function () {
//                     console.log(5);
//                     setTimeout(function () {
//                         console.log(6);         
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

/* Có 3 trạng thái */
//1. Pendding
//2. Fulfilled
//3. Rejected


// => Chain
// var promise = new Promise(
//     function(resolve, reject) {
//         resolve();
//     }
// );
// ======== Nếu then return 1 Promise thì then sau nó coi nó như promise gốc và đợi nó thực hiện trước ====
// promise
//     .then(function() {
//         return 1;
//     })
//     .then(function(char) {
//         console.log(char)
//         return 2;
//     })
//     .then(function(char) {
//         console.log(char)
//     })
//     .catch(function() {
//         console.log('Fail!')
//     })
//     .finally(function() {
//         console.log('Done!')
//     })

//     function  sleep(ms) {
//         return new Promise(function)
//     }

// 1. promise.resolve
// 2. promise.reject
// 3. promise.all: chạy song song nhau không cần đợi **********************

// 
/*var users = [
    {
        id: 23,
        name: "Đức Mạnh"
    },
    {
        id: 10,
        name: "Đức Minh"
    },
    {
        id: 1,
        name: "Sơn Đặng"
    },
];

var comments = [
    {
        id: 1,
        user_id: 23,
        content: 'Sao chua ra video'
    },
    {
        id: 2,
        user_id: 1,
        content: 'Vua ra xong roi do'
    },
    {
        id: 3,
        user_id: 23,
        content: 'A! thay roi nha'
    }
]*/

// 1. Lấy comment
// 2. Từ comment lấy ra user_id
// 3. Lấy user tương ứng từ user_id

/*function getComments() {
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
}
function getUserByIds(userIds){
    return new Promise(function(resolve){
           var result = users.filter(function(user) {
               return userIds.includes(user.id)
           })
           setTimeout(function() {
               resolve(result);
           }, 1000)
    })
}
 getComments()
    .then(function(conments) {
         var userIds = conments.map(function(comment) {
             return comment.user_id;
         })
         return getUserByIds(userIds)
             .then(function(users){
                 return {
                     users: users,
                     comments: comments
                 }
             })
    })
    .then(function(data){
        var commentBlock = document.getElementById('comment-block');

        var html = ''
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlock.innerHTML = html;
    })*/


// =============Fetch: Lấy dữ liệu kiểu JSON từ Backend qua API để trả về frontend ===========================================
// **** response.json() trả về kiểu JSON đã được parser
// var postAPI = 
//     'http://localhost:3000/animal'

// fetch(postAPI)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(animals) {
//         var htmls = animals.map(function(animal) {
//             return `<li>
//             <h2>${animal.name}</h2>
//             <p>${animal.food}</p>
//             <img src="${animal.img}" >
//             </li>`;
//         })
//         var html = htmls.join('')
//         document.getElementById('post-block').innerHTML = html
//     })
//     .catch(function(err) {
//     })


/*
var animalsAPI = 
    'http://localhost:3000/courses'
    
function start(){
    getAnimals(renderAnimals);

    createForm();
}

start();


function getAnimals(callback){
    fetch(animalsAPI)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}


function createAnimals(data,callback){
    var option = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    };
    fetch(animalsAPI, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

function handleDeleteAnimal(id){
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    };
    fetch(animalsAPI + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var animalItem = document.querySelector('.animal-item-'+id)
            if(animalItem){
                animalItem.remove();
            }
        })
}

function renderAnimals(animals){
    var listAnimal = document.querySelector('#list-animals')

    var htmls = animals.map(function(animal) {
        return `
        <li class="animal-item-${animal.id}">
            <h4>${animal.name}</h4>
            <p>${animal.food}</p>
            <button  onclick="handleDeleteAnimal(${animal.id})">Delete</button>
        </li>
        `;
    })  
    listAnimal.innerHTML = htmls.join('')
}

function createForm(){
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var food = document.querySelector('input[name="food"]').value
        
        var formAnimal = {
            name: name,
            food: food
        };
        createAnimals(formAnimal, function(){
            getAnimals(renderAnimals);
        });
    }
}
*/


//===========================================  ECMAScrip ===============================================================================
//1. Let, const: không hỗ trợ hoting - không được gán trước khi khai báo
//- const có thể thay đổi thuộc tính nhưng không gán lại được bằng đối tượng mới
/*var x = 12;
let y = 13;
const z = 20;
console.log(x);
console.log(y);
console.log(z);*/

// 2. Template Literals
// 3. Multi-line - String
/*const name1 = 'dog'
const animal = `Name: ${name1}`
console.log(animal)*/

// 4. Arrow function chuyển hàm về =>
/*const logger= (a, b) => ({age: a, old: b}); 
console.log(logger(3, 5))*/

// 5. Classes 
/*class Animal{
    constructor(name, price){
        this.name = name,
        this.price = price
    }
    getName(){
        return this.name
    }
    getPrice(){
        return this.price
    }

}
const lon = new Animal('pig', 120);
const meo = new Animal('cat', 200);
console.log(lon)
console.log(meo)*/

// 6.Default parameter values
// function print(log = 'Gia tri mac dinh'){
//     console.log(log)
// }
// print();

// 7. Enhanced object literals
// var name = 'chicken';
// var price = 1000;
// var animal = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }
// console.log(animal.getName())

// 8. Destructuring: Phân rã
// var arr = ['dog ', 'cat ', 'pig ']
// var [a, b, c] = arr
// var [d, ...rest] = arr
// console.log(a + b + c)
// console.log(rest)
// var animal = {
//     name: 'Manh',
//     age: 20
// }

// // tương tự với object nhưng phải truyền vào biến là tên thuộc tính
// var animal = {
//         name: 'bim',
//         price: 'no'
//  }
//  var {name, age = 12, price} = animal
//  console.log(age)

// 9. Rest parameters (...): Dùng trong 2 trường hợp
// +) Có thể truyền không giới hạn tham số
// +) Kết hợp với Destructuring 
/*function log(...param) {
    console.log(param)
}
log(1,2,3,4,5,6,7,8,9)*/

// 10. Spread (...): Nối chuỗi hoặc nối các Obj
/*var arr = ['pig', 'dog', 'cat']
var arr1 = ['cho', 'meo', 'lon']
var arr2 = [];
arr2 = [...arr, ...arr1]
console.log(arr)
var obj = {
    name: 'bim',
    price: 'no'
}
var obj1 = {
    address: 'HP'
}
var obj3 = {
    ...obj1,
    ...obj
}
console.log(obj3)*/

// 11. Tagged template literals
/*function highlight([first, ...string], ...value) {
    return value.reduce(
    (acc, curr) => [...acc, `<span>${curr}</span>`, string.shift()],[first]
    )
}
var brand = 'F8'
var course = 'HTML'
const html = highlight`Hoc lap trinh ${course} tai ${brand}`
console.log(html)
document.querySelector('#list-animals').innerHTML = html.join('');*/

// 12. Modules: Import/ Export
// import trực tiếp hàm defalut chỉ đc 1 cái
// import kiểu {} được nhiều cái không phải default
// thay thế = * as logger from '...'
// 

// 13. Optional chaining (?.): kiểm tra sự tồn tại của thuộc tính có hay chưa ==> tránh xảy ra lỗi


//=========================== Đệ quy ========================================================

// var arr = ['a', 'b', 'd', 'c', 'd', 'c', 'd', 'c', 'e']

// console.log([...(new Set(arr))])

// function loop(s, end, callback) {
//     if(s <= end){
//         callback(s)
//         return loop(s+1, end, callback);
//     }
// }
// loop(0, arr.length - 1, function(index) {
//     console.log(arr[index]);
// })
// function giaiThua(a) {
//     if(a > 0){
//         return a*giaiThua(a - 1);
//     }
//     return 1;
// }
// console.log(giaiThua(6));
// 


//============================= Polyfill =====================================


// ***** matches( tên class hoặc id của Element): kiểm tra 2 element có khớp nhau không;

// includes method: kiểm tra phần tử tồn tại trong chuỗi và mảng

// var title = 'Async and sync'
// console.log(title.includes(' and ',5))



var animalAPI = 'http://localhost:3000/animal'
window.handleDeleteAnimal = handleDeleteAnimal;
window.handleSelectorAnimal = handleSelectorAnimal;
window.handleUpdateAnimal = handleUpdateAnimal;

function start() {
    var newAnimals;
    getAnimal(function (animals) {
        var i = 0;
        newAnimals = animals.map(function (animal) {
            return {
                id: animal.id,
                name: animal.name,
                food: animal.food,
                img: animal.img,
                idNew: ++i
            }
        })
        renderAnimal(newAnimals);
        renderAnimalTable(newAnimals);
        seachById(newAnimals);
        roomImg();
        hienthi();
    });
    updateAnimal();
    createForm();
    // Làm sạch các input
    refreshInput();
}
start();

function getAnimal(callback) {
    fetch(animalAPI)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function createAnimal(data, callback) {
    var option = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    };
    fetch(animalAPI, option)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function handleDeleteAnimal(id) {
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    };
    fetch(animalAPI + '/' + id, option)
        .then(function (response) {
            return response.json();
        })
        .then(function () {
            var animalItem = document.querySelector('.animal-item-' + id);
            if (animalItem) {
                animalItem.remove();
            }
        })
};

function handleUpdateAnimal(data, id, callback) {
    var option = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    };
    fetch(animalAPI + "/" + id, option)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderAnimal(animals) {
    var listAnimalMain = document.querySelector('#list-animal')
    var i = 0;
    var html = animals.map(function (animal) {
        ++i;
        return `
            <li class="animal-item animal-item-${animal.idNew}" onclick="handleSelectorAnimal(${animal.idNew},${animal.id},'${animal.name}', '${animal.food}', '${animal.img}')">
               <h4>${animal.idNew}: ${animal.name}</h4>
               <button class="btn-delete" onclick="handleDeleteAnimal(${animal.id})" >X</button>      
               <p>Thức ăn: ${animal.food}</p>
               <img src="${animal.img}" class="animal-img" >
             </li>
        `
    })
    listAnimalMain.innerHTML = html.join('');
    var countNumber = document.querySelector('.count-numer');
    countNumber.innerHTML = i;
}

function renderAnimalTable(animals) {
    var listAnimalMain = document.querySelector('#table')
    var html = `<tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Food</th>
                    <th>ID</th>
                </tr>`
    var html1 = animals.map(function (animal) {
        return `
        <tr>
            <td>${animal.idNew}</td>
            <td>${animal.name}</td>
            <td class="td-food">${animal.food}</td>
            <td>${animal.id}</td>
         </tr>
        `
    })
    var html2 = html + html1.join('')
    listAnimalMain.innerHTML = html2
}

function createForm() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value
        var food = document.querySelector('input[name="food"]').value
        var avatar = document.querySelector('input[name="avatar"]').value
        if (name && food && avatar) {
            var formAnimal = {
                name: name,
                food: food,
                img: avatar
            };
            getAnimal(function (animals) {
                var animalLap = animals.filter(function (animal) {
                    return animal.name == formAnimal.name && animal.food == formAnimal.food && animal.img == formAnimal.img
                })
                if (animalLap.length == 0)
                createAnimal(formAnimal, function () {
                    getAnimal(renderAnimal)
                })
            else {
                alert('Con này đã có . Không thể tạo mới !')
            }
            })
           
        } else {
            alert('Vui lòng nhập đủ thông tin !')
        }
    }
}

function updateAnimal() {
    var updateBtn = document.querySelector('#save');
    updateBtn.onclick = function () {
        var id = document.querySelector('input[name="id-goc"]').value
        var name = document.querySelector('input[name="name"]').value
        var food = document.querySelector('input[name="food"]').value
        var img = document.querySelector('input[name="avatar"]').value
        if (name && food && img) {
            var formAnimal = {
                name: name,
                food: food,
                img: img
            };
            handleUpdateAnimal(formAnimal, id, function () {
                getAnimal(renderAnimal);
            });
        }

    }
}

function refreshInput() {
    var btnRefresh = document.querySelector('#refresh')
    btnRefresh.addEventListener('click', function () {
        document.querySelector('input[name="id"]').value = ''
        document.querySelector('input[name="id-goc"]').value = ''
        document.querySelector('input[name="name"]').value = ''
        document.querySelector('input[name="food"]').value = ''
        document.querySelector('input[name="avatar"]').value = ''
    })
}

function handleSelectorAnimal(stt, id, name, food, img) {
    document.querySelector('input[name="id"]').value = stt
    document.querySelector('input[name="id-goc"]').value = id
    document.querySelector('input[name="name"]').value = name
    document.querySelector('input[name="food"]').value = food
    document.querySelector('input[name="avatar"]').value = img
}

function roomImg() {
    var listAnimals = document.querySelectorAll('.animal-item')
    for (let i = 0; i < listAnimals.length; i++) {
        listAnimals[i].querySelector('img').addEventListener('dblclick', function (e) {
            modalImg(listAnimals[i]);
        })
    }
}

function modalImg(animal) {
    var modalContainer = document.querySelector('.modal-container')
    var modal = document.querySelector('.modal');
    var modalMain = document.querySelector('.modal-main');
    var html = animal.innerHTML;
    var stringBtn = html.slice(50, 135)
    var newItemHtml = html.replace(stringBtn, '')
    modalContainer.innerHTML = newItemHtml;
    modal.classList.add('open');
    var modalClose = document.querySelector('.modal-close');
    modalClose.onclick = function () {
        modal.classList.remove('open')
    }
    modalMain.onclick = function (e) {
        e.stopImmediatePropagation();
    }
    modal.onclick = function () {
        modal.classList.remove('open')
    }
}

function seachById(animals) {
    var btnSeach = document.querySelector('#seach')
    btnSeach.onclick = function () {
        var stt = document.querySelector('input[name="id"]').value;
        var id = document.querySelector('input[name="id-goc"]').value;
        var name = document.querySelector('input[name="name"]').value;
        var i = 0;
        var animalsNew = animals.map(function (animal) {
            return {
                id: animal.id,
                name: animal.name,
                food: animal.food,
                img: animal.img,
                idNew: animal.idNew
            }
        })
        var animalNeed = animalsNew.find(function (animal) {
            return animal.idNew == stt || animal.name == name || animal.id == id;
        })
        if (animalNeed) {
            handleSelectorAnimal(animalNeed.idNew, animalNeed.id, animalNeed.name, animalNeed.food, animalNeed.img, )
            var listAnimals = document.querySelectorAll('.animal-item')
            modalImg(listAnimals[animalNeed.idNew - 1]);
        } else {
            alert('Not find!')
        }
    }
}

function hienthi() {
    var list = document.querySelector('.app-body')
    var table = document.querySelector('.app-table')
    var btnTable = document.querySelector('.btn-table')
    var btnGrid = document.querySelector('.btn-grid')
    
    table.classList.add('close')
    btnGrid.classList.add('clicked')

    btnTable.onclick = function () {
        list.classList.add('close')
        table.classList.remove('close')
        btnTable.classList.add('clicked')
        btnGrid.classList.remove('clicked')
    }
    btnGrid.onclick = function () {
        list.classList.remove('close')
        table.classList.add('close')
        btnGrid.classList.add('clicked')
        btnTable.classList.remove('clicked')
    }
}
// Bug

// Create trùng tên vẫn chấp nhận ==> OK
// Tạo hiệu ứng cho 2 nút dạng bảng và dạng danh sách ==> OK
// Khi thêm và luôn render lại mặc định là trang danh sách