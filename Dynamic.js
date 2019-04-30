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