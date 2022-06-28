
let password = (`Bull19641997`)

if(password.length>=10){
  console.log(`Password is a success`)
 } else{
   console.log(`Password is a failure`)
 }

 if(/[A-Z]/.test(password)= true){
  console.log(`Password is a success`)
 }else{
 //(/[A-Z]/.test(password)= false){
  console.log(`Password is a failure`)
 }

 if(/[0-9]/.test(password)= true){
  console.log(`Password is a success`)
 }else{
 
 // console.log(`Password is a failure`)
 }

 if(/[^A-Za-z0-9]/.test(password)= true){
  console.log(`Password is a success`)
 }else{
 //(/[^A-Za-z0-9]/.test(password)= false){
  console.log(`Password is a failure`)
 }
 
 //I've tried everything and the only thing i could get to work was the password length lol. Hopefully I can get some extra credit for heading in  the right direction lol  =)









 //this is the longer way to do and solve the problem

// let password = 'sdkdjd'

// //split string to array so we can loop over it
// let passwordSplit = password.split('')

// // console.log(passwordSplit)

// let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']

// let nums = [0,1,2,3,4,5,6,7,8,9]

// if(password.length >= 10){
//     for(let i = 0;i < passwordSplit.length;i++){
//         if(alphabet.includes(passwordSplit[i])){
//             for(let j= i+1;j < passwordSplit.length;j++){
//                 if(nums.includes(+passwordSplit[j])){
//                     return console.log(`password meets requirements`)
//                 }
//             }
//         } return console.log(`password doesnt meet requiremenets`)
//     }
// } else {
//     console.log(`did not meet length requirements,try again with 10 digits`)
// }


// this is the easy short way to do this 


// if (password.length >= 10) {
//   if (/\d/.test(password) && /\D/.test(password)) {
//     console.log(`success`);
//   } else {
//     console.log(`try again`);
//   }
// } else {
//     console.log(`password does not meet length requirements`)
// }