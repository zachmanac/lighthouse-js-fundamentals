const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
//for...of loop. Useful if going in order of whole array, not useful if wanting different order ex: 52.25, 61, 112.99, 5, will have to use regular for loop.
