var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
   close: function() {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
   }
};

// or alternate for above close function
/*close: function() {
  if (umbrella.isOpen === true) {
    umbrella.isOpen = false;
    return "Julia closes the umbrella!";
} else {
    return "The umbrella is already closed!";
}
} */

var sister = {
  //name through pets are called properties
  name: "Sarah",
  age: 23,
  parents: ["alice", "andy"],
  pets: true,
  //method for the object sister
  paintPicture: function() { return "Sarah paints!"; }
}

sister.paintPicture();
//returns "Sarah paints!"

sister.parents //returns ["alice", "andy"] aka dot notation
sister["parents"] //also returns ["alice", "andy"] aka bracket notation


var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  printAccountSummary: function() {return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."}
};

console.log(savingsAccount.printAccountSummary());

let facebookProfile = {
  name: "Jon",
  friends: 25,
  messages: ["Hello", "I want candy", "Why are you like this"],
  postMessage: function () {facebookProfile.messages.push()},
  deleteMessage: function () {facebookProfile.messages.splice(index, 1)},
  addFriend: function () {facebookProfile.friends = facebookProfile.friends + 1},
  removeFriend: function () {facebookProfile.friends = facebookProfile.friends - 1}
};

console.log(facebookProfile.messages)

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
  console.log(donut.type + " donuts cost $" + donut.cost + " each"); 
});
