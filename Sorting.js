const letters = ['a','d','z','e','r','b'];
const basket = [2, 65, 34, 2, 1, 7, 8];

// Because sort() converts to unicode 
console.log(basket.sort((a,b) => a - b))