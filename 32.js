function license_checker(speed){
  if(speed < 70){
      console.log("ok");
  }
  if(speed > 70){
      points=0
      for(var i=70;i<=speed;i++)  {    
       points+=1
      }
      if(points>12){
          console.log("License suspended");
      }
      else{
          console.log(points);
      }
  }
}
var readlineSync = require("readline-sync")
speed=readlineSync.question("enter the speed")
license_checker(speed)