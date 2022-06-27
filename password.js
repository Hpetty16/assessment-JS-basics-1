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
 



// let password = (`Bull19971964`)
// function validate(password) {
//   var minMaxLength = /^[\s\S]{8,32}$/,
//       upper = /[A-Z]/,
//       lower = /[a-z]/,
//       number = /[0-9]/,
//       special = /[^A-Za-z0-9]/,
//       count = 0;

//   if (minMaxLength.test(password)) {
//       // Only need 3 out of 4 of these to match
//       if (upper.test(password)) count++;
//       if (lower.test(password)) count++;
//       if (number.test(password)) count++;
//       if (special.test(password)) count++;
//   }
//   if(password=== count){
//     console.log(`Password is all set`)
//   }else{
//     console.log(`You need to fix ya password ASAP`)
//   }
//   return count >= 3;
// }
  
// let password = (`Bull196411`)

// if(password.length>=10){
//   console.log(`Password is a success`)
// } else{
//   console.log(`Password is a failure`)
// }

// function checkPasswordValidation(value) {
//   const isWhitespace = /^(?=.*\s)/;
//   if (isWhitespace.test(value)) {
//     return "Password must not contain Whitespaces.";
//   }


//   const isContainsUppercase = /^(?=.*[A-Z])/;
//   if (!isContainsUppercase.test(value)) {
//     return "Password must have at least one Uppercase Character.";
//   }


//   const isContainsLowercase = /^(?=.*[a-z])/;
//   if (!isContainsLowercase.test(value)) {
//     return "Password must have at least one Lowercase Character.";
//   }


//   const isContainsNumber = /^(?=.*[0-9])/;
//   if (!isContainsNumber.test(value)) {
//     return "Password must contain at least one Digit.";
//   }


//   const isContainsSymbol =
//     /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
//   if (!isContainsSymbol.test(value)) {
//     return "Password must contain at least one Special Symbol.";
//   }


//   const isValidLength = /^.{10,16}$/;
//   if (!isValidLength.test(value)) {
//     return "Password must be 10-16 Characters Long.";
//   }
// }
// console.log(password)


// this the regex func. 
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?]) A-Za-z\d#$@!%&*?]{8,30}$/