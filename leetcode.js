1.TWO SUMS
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:-
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

PROGRAM
function twoSums(arr,target){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1 ; j < arr.length ; j++){
            if(arr[i]+arr[j]===target){
                return[i,j];
            }
        }
    }
    return[];
}
const ret = twoSums([2,7,11,15],9);
console.log(ret)

OUTPUT
[ 0, 1 ]
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
9.PALINDROME IN JAVA
Given an integer x, return true if x is a palindrome, and false otherwise.
  
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:
-231 <= x <= 231 - 1

PROGRAM in java
class Solution {
    public boolean isPalindrome(int x) {
        if(x<0){
            return false;
        }
        int original = x;
        int reversed = 0;
        while(x!=0){
            int digit = x % 10;
            reversed = reversed * 10 + digit;
            x =  x / 10;
        }
        if(original==reversed){
            return true;
        }
        else{
            return false;
        }   
    }
}
OUTPUT:
FOR 121 TRUE

PROGRAM IN JavaScript 
function isPalindrome(a){
    if(a<0){
        return false;
    }
    let original = a;
    let reversed = 0;
    while(a!==0){
        let digit = a % 10;
        reversed = reversed * 10 + digit;
        a = Math.floor(a /10);
    }
    if(original === reversed){
        return true;
    }
    else{
        return false;
    }
}
var ret = isPalindrome(121)
console.log(ret)
OUTPUT:
FOR 121 TRUE
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
PROGRAM: To find the common numbers in an array in js
let a = [2,4,1,3,5,7,6,6,2,1];
let b = [];
for(let i = 0 ; i < a.length ; i++){
    for(let j = i+1 ; j < a.length ; j++){
        if(a[i]===a[j]){
            b.push(a[i]);
        }
    }
}
let sorted = b.slice().sort((a, b) => a - b);
console.log(sorted)
OUTPUT:
[ 1, 2, 6 ]
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
35.SEARCH THE INSERTION POSITION
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 
Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

PROGRAM IN JS
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length; 
};
let result = searchInsert([1, 3, 5, 6], 2);
console.log(result); 

OUTPUT:
1
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
326. POWER OF THREE
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:
Input: n = 27
Output: true
Explanation: 27 = 33

Example 2:
Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.

Example 3:
Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).

PROGRAM IN JS
var isPowerOfThree = function(n) {
    if(n<=0){
        return false;
    }
    while(n%3===0){
        n=n/3;
    }
    if(n===1){
        return true;
    }
    else{
        return false;
    }
};
const a = isPowerOfThree(81);
console.log(a);

OUTPUT
True

PROGRAM IN JAVA:
class Solution {
    public boolean isPowerOfThree(int n) {
        if(n<=0){
            return false;
        }
        while(n%3==0){
            n=n/3;
        }
        if(n==1){
            return true;
        }
        else{
            return false;
        }
        
    }
}
OUTPUT:
True
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
342. POWER OF FOUR
Given an integer n, return true if it is a power of four. Otherwise, return false.
An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:
Input: n = 16
Output: true

Example 2:
Input: n = 5
Output: false

Example 3:
Input: n = 1
Output: true
 
Constraints:
-231 <= n <= 231 - 1

PROGRAM IN JS
var isPowerOfFour = function(n) {
    if(n<=0){
        return false;
    }
    while(n%4===0){
        n=n/4;
    }
    if(n===1){
        return true;
    }
    else{
        return false;
    }
};
const a = isPowerOfFour(81);
console.log(a);

OUTPUT
True

PROGRAM IN JAVA:
class Solution {
    public boolean isPowerOfFour(int n) {
        if(n<=0){
            return false;
        }
        while(n%4==0){
            n=n/4;
        }
        if(n==1){
            return true;
        }
        else{
            return false;
        }
        
    }
}
OUTPUT:
True
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------


