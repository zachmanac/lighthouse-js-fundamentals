udaciFamily = ["Julia", "James", "Jack"]
console.log(udaciFamily);
//output ["Julia", "James", "Jack"]

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
crew.push(doctor, sister, shepherd)

console.log(crew);
//outputs names of the crew

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0]= 1
prices[2]= 3
prices[6]= 7
//changes values of 1st, 3rd, and 7th elements in array
console.log(prices)

//push command returns new length of array ex. array of 6 elements, pushed 1 new element, returns 7 as output

//pop command deletes last element of an array

//example.splice (1, 1, "chocolate", "strawberry");
//splice can remove and add items to array
//1st number is where in array new item is positioned
//2nd # is how many items deleted or replaced from array at position of 1st #

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
  if (team.length >= 7)
    return true;
  else
    return false;
}

console.log(hasEnoughPlayers(team))

//forEach array loop
//example.forEach(function(element, index, array))
//forEach will return undefined if attempting permanent modification

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function (item, index) {
  if(item % 3 === 0){
      test[index] = item + 100;
  }
});

console.log(test);

//.map function takes an array, modifies it, outputs new array

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
//outputs ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function (num) {
  num *= 1.15;
  return Number(num.toFixed(2));
});

console.log(totals);
//outputs bills array with tip added to equal total bill

//nested arrays
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row++) {
  console.log(donutBox[row]);
}
//array on top, the nested array below starting on line 102
for (var row = 0; row < donutBox.length; row++) {
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var i = 0; i < numbers.length; i++){
  for(var j = 0; j < numbers[i].length; j++){
    if(numbers[i][j] % 2 === 0)
        numbers[i][j] = "even";
    else
        numbers[i][j]= "odd";
}
}
console.log(numbers);
//nested number 6-10 prints even #s with string 'even' and odd #s with string 'odd'
