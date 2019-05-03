/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/

// Key points:
    // Non-adjacent houses
    // Max amount of money collected
// Inputs:
    // Non-negative integers
    // Array length and format
// Output:
    // Integer output
// Time & Space complexity constraints currently

// Brute Force

function maxStolen(arr) {
    if (arr.length < 2) {
        return arr
    }
    
    let totalEven = 0;
    let totalOdd = 0;
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 === 0) {
            totalEven += arr[i]
        } else {
            totalOdd += arr[i]
        }

    }

    let result = Math.max(totalEven, totalOdd)
    
    return result
}

console.log(maxStolen([2, 7, 9, 2, 1, 2]));
                           // Should Equal = 13

function rob(nums) {
    let prevMax = 0;
    let currMax = 0;

    for (let num of nums) {
        let temp = currMax;
        currMax = Math.max(prevMax + num, currMax);
        prevMax = temp;
    }

    return currMax;
};

console.log(rob([2, 7, 9, 2, 1, 2]));

/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// Key Points: 
    // ith element is the price of a given stock
    // buy and sell only once
    // you canot sell a stock before you buy
// Inputs
    // Array of integers 
    // Ask test cases
// Output 
    // Integer or 0
// Space and time complexity a cosideration

// Naive Brute Force

function buySellStock(arr) {
    let maxResult = 0;
    let currMax = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                currMax = arr[j] - arr[i]; 
            }
            if (currMax > maxResult) {
                maxResult = currMax
            }
        }        
    }
    return maxResult
}

console.log(buySellStock([7, 1, 5, 3, 6, 4]));


var missingNumber = function(nums) {
    let mySet = new Set()

    for (let i = 0; i <= nums.length; i++) {
        mySet.add(i)
    }

    for (let num of nums) {
        if (mySet.has(num)) {
            mySet.delete(num)
        }
    }

    let result = Array.from(mySet)[0];
    return result
};

console.log(missingNumber([3,0,1]))