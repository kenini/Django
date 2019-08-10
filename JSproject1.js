// For this project you will be building a generic website that will seem to ask mundane questions to normal users, but you secretly are looking for a spy! Anyone visiting your website will be asked a series of questions, only the Spy will be able to give specific answers you expect. If all questions are answered correctly, you will post a secret message in console for the Spy to read!
// 
// Here are the four conditions you will check for the spy:
// 
// The Spy has the same first letter of her First Name and Last Name
// The Spy is between the Age of 20 and 30 (exclusive of 20 and 30)
// The Spy is at least 170 centimeters tall.
// The Spy has a pet name that ends with the letter "y".

var name = prompt("What is your first name?");
var surname = prompt("what is your last name?");
var age = prompt("what is your age?");
var height = prompt("What is your height in centimeters?");
var petName = prompt("What is your pet's name?");
var petNameLast = petName.length - 1;
y=0;
if (name[0] === surname[0]){
  y=y+1
}
if (age > 20 && age < 30){
  y=y+1
}
if (height >= 170){
  y=y+1
}
if (petName[petNameLast] === 'y'){
  y=y+1
}
if (y === 4){
  console.log("You did it!")
}else {
  console.log("You didn't do it.")
}
