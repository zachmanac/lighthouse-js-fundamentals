let diceRollQuantity = process.argv.slice(2);

let diceRoll = function(numRoll) {

  let concatDiceRolls = [];

  for (let i = 0; i < numRoll; i++) {
    let rolledDice = 0;
    rolledDice += Math.floor(Math.random() * 6) + 1;
    concatDiceRolls.push(rolledDice);
  } return concatDiceRolls.join(", ");
};

console.log(`Rolled ${diceRollQuantity} dice: ${diceRoll(diceRollQuantity)}`);
