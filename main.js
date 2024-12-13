// const userName = ("Raqam kiriting")




// const randomRaqam = Math.round(Math.random () * 100)

// console.log(`Juft son${userName}`);
// console.log(`toq son${randomRaqam}`);

// if(userName % 2 == 0){
//     alert(`${userName} raqam  `)
// }
// else{
//     alert(`${randomRaqam} raqam toq so `)
// }

// let num1 = +prompt("1 son kiriting")
 
// let num2 = +prompt("2 son kiriting")

// if(num1 >= num2){
//     alert(`bu son kotta${num1}`)
// }
// else{
//     alert(`bu son ${num2}dan kichkina ${num1}`)


// const oquvchilar = {
//     ismi:"ismi",
//     age:"age",
//     uylanganmi:"uylanganmi",
// }
// // console.log(`${oquvchilar.ismi}:Ibrohim`);
// // console.log(`${oquvchilar.age}:14`);
// // console.log(`${oquvchilar.uylanganmi}:false`);

// const userName = prompt("Ismingizni kiriting");
// const surname = prompt("Familiyangizni kiriting");
// const age = +prompt("Yoshingizni  kiriting");

// if(age >= 18){
//     alert("marhamat")
// }
// else{
//     alert("Afsus")
// }

// const oquvchilar = {
//     name:userName,
//     surname:surname,
//     age:age,
// }

// if(oquvchilar.age >= 18){
//     console.log(`Siz ro'yhatga olindingiz`,oquvchilar);
// }else if(userName == "" && age == 0){
//     alert("Iltimos ismingizni va yoshingizni kiriting")
// }
// else{
//     alert("Siz ro'yhatga olinmadingiz")
// }

// const num1 = +prompt("Birinchi raqamni kiriting");
// const num2 = +prompt("Ikkinchi  raqamni kiriting");
// const answer = +prompt("Iltimos tanlang:\n 1) + \n 2) - \n 3) * \n 4) /");

// if(answer == 1){
//     alert(`Javob:${num1 + num2}`)
// }else if(answer == 2){
//     alert(`Javob:${num1 - num2}`)
// }else if(answer == 3){
//     alert(`Javob:${num1 * num2}`)
// }else if(answer == 4){
//     alert(`Javob:${num1 / num2}`)
// }else if(num1 == 0 && num2 == 0){
//     alert("Iltimos qiymat kiriting")
// }else{
//     alert("Qiymat kiriting")
// }.... ;og


const userName = prompt("Ismingizni kiriting");
const surname = +prompt("Space login kiriting");
const age = +prompt("Space passworg kiriting");

const oquvchilar = {
    name:userName,
    id:surname,
    password:age,
}

console.log(oquvchilar);