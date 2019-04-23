//Implement a function that reverses a string using iteration...and then recursion!

// No exclusions
// function reverseString(str) {
//   let result = []

//   for (let char of str) {
//     result.unshift(char)
//   }

//   return result.join('')
// }

// Without extra space
// function reverseString(str) {
//   let temp = ''
//   str = str.split('')
//   const half = Math.floor(str.length/2)
//   for (let i = 0; i < half; i++) {
//     temp = str[i]
//     str[i] = str[str.length - 1 - i]
//     str[str.length - 1 - i] = temp
//   }

//   return str.join('')
// }

// Recursive
function reverseString(str, result, idx) {
  if (idx === str.length) {
    return result;
  }

  result = str[idx] + result;
  idx = idx + 1;

  return reverseString(str, result, idx);
}

console.log(reverseString("yretsam oyoy", "", 0));
//should return: 'yoyo mastery'
