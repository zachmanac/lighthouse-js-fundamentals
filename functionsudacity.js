function add(x, y) {
  var sum = x + y;
  return sum;
}

var sum = add(1, 2);

console.log(sum)


var sound = "";
 
function laugh(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

console.log(laugh(3));

function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  var triangle = "";
  var lineNumber = 1;
  for(lineNumber=1; lineNumber<=length; lineNumber++){
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

console.log(buildTriangle(10));

// anonymous function expression
var doSomething = function(y) {
  return y + 1;
};

// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};

// for either of the definitions above, call the function like this:
doSomething(5);
//returns 6

var sound = ""
//needs undefined variable sound from above
var laugh = function(y) {
    for (var x = 0; x < y; x++) {
        sound = sound + "ha";
    }
    sound = sound + "!"
    return sound;
}

console.log(laugh(3));
//output hahaha!

var cry = function noise() {
  var sound = "boohoo!" //named function is noise, but call variable (cry) name
  return sound;
}

console.log(cry());
//output boohoo!



function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(3));
}

emotions ("happy", function(num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0 ; i < num ; i++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});
//outputs I am happy, haha!