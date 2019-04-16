// Google Question
// Given an array = [2,5,1,2,3,4,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined


// Naive 0(n2) approach
// function hasDuplicateValue(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 return array[i]
//             }
//         }
//     }
//     return undefined
// }

// 0(n)  with set()
// This is more accurate to what the question requires.
function hasDuplicateValue(array) {
    if (typeof array !== 'object' || array.length < 1) {
        return "Invalid array"
    }

    let mapSet = new Set()
    let result = 'No Duplicates'

    for (let number of array1) {
        if (!mapSet.has(number)) {
            mapSet.add(number)
        } else {
            result = number
            break;
        }
    }

    return result
}



const array1 = [2, 5, 1, 2, 3, 4, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];

console.log(hasDuplicateValue(array2));