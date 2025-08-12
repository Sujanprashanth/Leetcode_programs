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
 
Constraints:-
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
26. Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
    
Custom Judge:
The judge will test your solution with the following code:
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length
int k = removeDuplicates(nums); // Calls your implementation
assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.
    
Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
Constraints:-
1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.

PROGRAM IN JS
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let k = 1; 
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
OUTPUT:
Input nums = [1,1,2]
Output nums = [1,2]
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
344. REVERSE STRING:
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
    
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 
Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.

PROGRAM IN JS:
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};
OUTPUT:
Input : s = ["H","a","n","n","a","h"]
Output : ["h","a","n","n","a","H"]
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
27.Remove Elements
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:
The judge will test your solution with the following code:
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.
int k = removeElement(nums, val); // Calls your implementation
assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
    
Example 2:
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
Constraints:
0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

PROGRAM IN JS:
var removeElement = function(nums, val) {
    let k = 0; // count of elements not equal to val
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // move valid element to the front
            k++;
        }
    }
OUTPUT:
Input nums = [0,1,2,2,3,0,4,2]
val = 2
Output [0,1,3,0,4]
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
