const letters = ['a','d','z','e','r','b'];
const basket = [2, 65, 34, 2, 1, 7, 8];

// Because sort() converts to unicode 
console.log(basket.sort((a,b) => a - b))

// Elementary sorts
    // Bubble
    // Insertion
    // Selection
// More advanced sorts
    // Merge 
    // Quick


// BUBBLE SORT
const numbers = [2, 65, 34, 2, 1, 7, 8];

function bubbleSort(array) {
    let temp = ''
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j+1]) {
                temp = array[j]
                array[j] = array[j+1]
                array[j + 1] = temp
            }
        }
    }
    return array 
}

console.log(bubbleSort(numbers))


// SELECTION SORT
const numbs = [2, 65, 34, 2, 1, 7, 8];

function selectionSort(array) {


    for (let i = 0; i < array.length; i++) {
        let lowestIdx = i;

        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[lowestIdx]) {
                lowestIdx = j
            }   
        }

        let temp = array[i];
        array[i] = array[lowestIdx]
        array[lowestIdx] = temp
    }
    return array
}

console.log(selectionSort(numbs));


// INSERTION SORT

const array = [2, 65, 34, 2, 1, 7, 8];

function insertionSort(arr) {

    let j;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]

        for (j = i - 1; j > -1 && arr[j] > item; j--) {
            arr[j+1] = arr[j]
        }

        arr[j+1] = item
    }

    return arr
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < arr[0]) {
    //         arr.unshift(arr.splice(i,1)[0])
    //     } else {
    //         for (let j = 1; j < i; j++) {
    //             if (arr[i] >= arr[j-1] && arr[i] < arr[j]) {
    //                 arr.splice(j, 0, arr.splice(i,1)[0])
    //             }
    //         }
    //     }
    // }
    // return array

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i,1)[0])
        } else {
            for (let j = 1; j < i; j++) {
                if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
                    arr.splice(j, 0, arr.splice(i,1)[0])
                }
            }
        }
    }
    return array

}

console.log(insertionSort(array))


// MERGE SORT

// const ar = [2, 65, 34, 2, 1, 7, 8];

// function mergeSort(arr) {
//     if (arr.length === 1) {
//         return arr
//     }
//     // Split array into right and left
//     let midpoint = Math.floor(arr.legnth/2)
//     let left = arr.slice(0,midpoint)
//     let right = arr.slice(midpoint)

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right) {
//     const result = []
//     let leftIdx = 0
//     let rightIdx = 0
//     while (leftIdx < left.length && rightIdx < right.length) {
//         if (left[leftIdx] < right[rightIdx]) {
//             result.push(left[leftIdx])
//             leftIdx++
//         } else {
//             result.push(right[rightIdx])
//             rightIdx++
//         }
//     }
//     return result
// }

// console.log(mergeSort(ar))

//#1 - Sort 10 schools around your house by distance:

//#2 - eBay sorts listings by the current Bid amount:

//#3 - Sport scores on ESPN

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews

//#6 - Temperature Records for the past 50 years in Canada

//#7 - Large user name database needs to be sorted. Data is very random.

//#8 - You want to teach sorting for the first time