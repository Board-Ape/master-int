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