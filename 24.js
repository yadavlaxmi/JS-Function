function vote(age){
  if (age>18){
    console.log("elgible for vote")
  }
  else{
    console.log("not eligible for vote")
  }
}
var readlineSync= require("readline-sync")
age=readlineSync.question("enter the age")
vote(age)