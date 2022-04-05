// ==================== Strick mode===================

// ==> De bat loi khai bao bien khong su dung tu khoa
// ==> Tranh trung ten bien, co the trong tuong lai
// ==> 
// Khai bao  o dau file: "user strict"
// 'use strict'
//  var student = 'Do Duc Manh'
//  console.log(student)
 

// ======================== THis =========================
// console.log(this)

// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const app = (() => {
//     const cars = ['Mescerdes']

//     const root = $('#root')
//     const input = $('#input')
//     const submit = $('#submit')

//     return{
//         add(car){
//             cars.push(car);
//         },
//         delete(index){
//             cars.splice(index,1);
//         },
//         render(){
//             const html = cars.map((car,index) => 
//                 `<li>
//                     ${car}
//                     <span class="delete" data-index="${index}">X</span>
//                 </li>`
//             )
//             .join('')

//             root.innerHTML = html;
//         },
//         handleDelete(event){
//             const deleteBtn = event.target.closest('.delete');
//             if(deleteBtn){
//                 const index  = deleteBtn.dataset.index
//                 this.delete(index)
//                 this.render();
//             }
//         },
//         init(){
//             submit.onclick = () => {
//                 const car = input.value;
//                 this.add(car);
//                 this.render();

//                 input.value = null;
//                 input.focus();
//             }
//             root.onclick = this.handleDelete.bind(this)

//             this.render();
//         }
//     }
// })();
// app.init();
