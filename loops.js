var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
};


var x = 1;

while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else if (x % 5 === 0) {
    console.log("James");
  } 
    else {
      console.log(x)
    }
  
  x = x + 1
}

var num = 99;

while (num > 0) {
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    } else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    } else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}

var time = 60

while (time >= 0) {
  if (time === 50){
    console.log ("Orbiter transfers from ground to internal power")
  } else if (time === 31){
    console.log("Ground launch sequencer is go for auto sequence start")
  } else if (time === 16){
    console.log("Activate launch pad sound suppression system")
  } else if (time === 10){
    console.log("Activate main engine hydrogen burnoff system")
  } else if (time === 6){
    console.log("Main engine start")
  } else if (time === 0){
    console.log("Solid rocket booster ignition and liftoff!")
  } else {
    console.log("T-" + time + " seconds")
  }

  time = time - 1
}

let solution = 1
for (let i = 1; i <= 12; i++ ){
    solution *= i
}
console.log(solution)
//solves 12 factorial aka !12


let row = 0;
let seat = 0;

for (row = 0; row <= 25; row++){
    for (seat = 0; seat <=99; seat++){
console.log(row + "-" + seat);
    }
}
//nested loop example
