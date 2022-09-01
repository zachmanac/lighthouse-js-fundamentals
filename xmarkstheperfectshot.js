const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(move) {
  
  let xPlace = 0
  let yPlace = 0

  for (let i = 0; i < move.length; i++)
  
  if (move[i] === "north"){
    yPlace = yPlace + 1
  } else if (move[i] === "south"){
    yPlace = yPlace - 1
  } else if (move[i] === "west"){
    xPlace = xPlace - 1
  } else if (move[i] === "east"){
    xPlace = xPlace + 1
  }
  
  return [xPlace, yPlace]
}

console.log(finalPosition(moves));

