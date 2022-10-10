let multiply=function (x){
     return function (y){
          console.log(x*y)
     }
}
let multBy2=multiply(2);
multBy2(3)
let mulBy3=multiply(3)
mulBy3(4)