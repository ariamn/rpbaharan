const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

document.getElementById("demo").innerHTML = person.lang;

const obj ={
  counter :0
};

Object.defineProperty(obj, "reset",{
  get : function () { this.counter=0;}
});
Object.defineProperty(obj, "increment",{
  get : function () {this.counter++;}
});
Object.defineProperty(obj,"decrement",{
  get: function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract",{
  set : function (value) {this.counter -= value;}
})

obj.reset;
obj.add=5;
obj.subtract =1;
obj.increment;
obj.decrement;
document.getElementById("demo-1").innerHTML = obj.counter;

console.log('Hello World');

let x = 'pouya';
console.log(x);

// let num =.03;
// num=1;
// console.log(num)
//
// let name = 'Mosh';
// let age = 30;
// let isApproved = false;
// let firstName = undefined;
// let selectorColor = null;

let sag ={
  name: 'Mosh',
  age: 30
};

person.name = 'john';
console.log(person);

function enlargeImage(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function move(element) {
  element.style.left = (Math.random() * 100) + "%";
  element.style.top = (Math.random() * 100) + "%";
}
function stop(element , stop){
  if (stop) {
    element.style.position = 'unset';
  }else {
    element.style.position = 'absolute';
  }
}

class Car {
  constructor(name,year) {
    this.name = name;
    this.year = year;
  }
  age(x){
    return x - this.year;
  }
}
let date = new Date();
let year = date.getFullYear();

let myCar =new Car("Ford",2005);
document.getElementById("demo-2").innerHTML=
  "My car is" + myCar.age(year) + "years old";

// $(function() {
//   $("button").on({
//     mouseover: function() {
//       $(this).css({
//         left: (Math.random() * 100) + "%",
//         top: (Math.random() * 100) + "%",
//       });
//     }
//   });
// });


const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo-3").innerHTML = points;

points.sort(function (a, b){return b - a});
document.getElementById("demo-4").innerHTML = points;

function myFunction(){
  points.sort(function (a,b){return 0-5 - Math.random()});
  document.getElementById("demo-5").innerHTML=points;
}
const cars = ["BMW" , "VOLVO" ,"FORD", "FIAT", "AUDI"];

const  numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo-8").innerHTML = txt;

function myFunction(value, index, array){
  txt += value + "<br>";
}
