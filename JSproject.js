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
