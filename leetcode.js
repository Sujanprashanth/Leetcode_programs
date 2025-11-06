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

Example 1:-
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
    
Example 2:-
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
Task in java
Program:
import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String repeat = "";
        int studentcount = 0;
        String[][] students = new String[5][5];
        do{
            System.out.print("Enter your name: ");
            String name = sc.nextLine(); 
            System.out.print("Enter your age: ");
            int age = sc.nextInt();
            sc.nextLine();
            int[] marks = new int[3];
            System.out.println("Enter marks for 3 subjects: ");
            int sum = 0;
            for(int i=0;i<3;i++){
                System.out.print("Subject "+(i+1)+":");
                marks[i]=sc.nextInt();
                sum+=marks[i];
            }
            sc.nextLine();
            int avg = sum/3;
            System.out.println("Total Marks: "+sum);
            System.out.println("Average Marks: "+avg);
            if(avg>=90){
                System.out.println("Grade: A");
            }
            else if(avg>=75){
                System.out.println("Grade: B");
            }
            else if(avg>=50){
                System.out.println("Grade: C");
            }
            else{
                System.out.println("Grade: F");
            }
            int j=0;
            System.out.println("Countdown from average:");
            int tempavg=avg;
            while(j<9){
                tempavg-= 10;
                if(tempavg<0){
                    break;
                }
                else{
                    System.out.println(tempavg);
                }
                j++;
            }
            students[studentcount][0]=name;
            students[studentcount][1]=String.valueOf(age);
            students[studentcount][2]=String.valueOf(marks[0]);
            students[studentcount][3]=String.valueOf(marks[1]);
            students[studentcount][4]=String.valueOf(marks[2]);
            studentcount++;
            System.out.println("\nDo you want to enter marks again? (yes/no): ");
            repeat = sc.nextLine();
            System.out.println("------------------------------------");
        }while(repeat.equalsIgnoreCase("yes"));
        System.out.println("\nAll Students Entered:");
        for(int k=0;k<studentcount;k++){
            System.out.println("Name: "+students[k][0]+","+"Age: "+students[k][1]+","+"Marks: "+students[k][2]+","+students[k][3]+","+students[k][4]);
        }
   }
}
output:
Enter your name: Sujan
Enter your age: 23
Enter marks for 3 subjects: 
Subject 1:98
Subject 2:89
Subject 3:75
Total Marks: 262
Average Marks: 87
Grade: B
Countdown from average:
77
67
57
47
37
27
17
7

Do you want to enter marks again? (yes/no): 
------------------------------------

All Students Entered:
Name: Sujan,Age: 23,Marks: 98,89,75
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Array implementation in java DS
import java.util.*;
class DynamicArray{
    private int size;
    private int arr[];
    private int capacity;
    private static final int initialcapacity=16;
    DynamicArray(){
        size = 0;
        arr = new int[initialcapacity];
        capacity = initialcapacity;
    }
    public void add(int val){
        if(size==capacity){
            expandArray();
        }
        arr[size++]=val;
    }
    public void expandArray(){
        capacity*=2;
        arr = java.util.Arrays.copyOf(arr,capacity);
    }
    public void display(){
        System.out.println("Elements in the list:");
        for(int i = 0;i<size;i++){
            System.out.print(arr[i]+ " ");
        }
    }
    public void insertAtSpecPos(int pos,int val){
        if(size==capacity){
            expandArray();
        }
        for(int i=size-1;i>=pos;i--){
            arr[i+1]=arr[i];
        }
        arr[pos]=val;
        size++;
    }
    public void deleteAtSpecPos(int pos){
        for(int i=pos+1;i<size;i++){
            arr[i-1]=arr[i];
        }
        size--;
    }
    
}
class Main {
    public static void main(String[] args) {
        int choice,val,pos;
        Scanner sc = new Scanner(System.in);
        DynamicArray list = new DynamicArray();
        while(true){
            System.out.println("\n---------------List Menu-----------------\n");
            System.out.println("1.Insert at the end\n");
            System.out.println("2.Display the list\n");
            System.out.println("3.Insert at the specified position\n");
            System.out.println("4.Delete from specified position\n");
            System.out.println("5.Exit\n");
            System.out.println("\n-----------------------------------------\n");
            System.out.println("Enter your choice: \t");
            choice = sc.nextInt();
            switch(choice){
                case 1:
                    System.out.println("Enter your data:");
                    val = sc.nextInt();
                    list.add(val);
                    break;
                case 2:
                    list.display();
                    break;
                case 3:
                    System.out.println("Enter the specified posotion to be inserted(Start at 0):");
                    pos = sc.nextInt();
                    if(pos<0){
                        System.out.println("Invalid position");
                        break;
                    }
                    System.out.println("Enter your data:");
                    val = sc.nextInt();
                    list.insertAtSpecPos(pos,val);
                    break;
                case 4:
                    System.out.println("Enter the specified posotion to be deleted:");
                    pos = sc.nextInt();
                    if(pos<0){
                        System.out.println("Invalid position");
                        break;
                    }
                    list.deleteAtSpecPos(pos);
                    break;
                case 5:
                    System.exit(0);
                default:
                    System.out.println("Invalid choice");
            }
        }
    }
}
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Sum of digits in java:
Program:
class Main{
    public static void main(String[] args){
        int n=1234,sum=0,A=0;
        while(n!=0){
            A=n%10;
            sum+=A;
            n=n/10;
        }
        System.out.print("Sum of digits: "+sum);
    }
}
Output:
Sum of digits: 10
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Count the no of digits:
Program:
class Main{
    public static void main(String[] args){
        int num = 1234,s,count++;
        while(num!=0){
            s=num/10;
            count++;
        }
        System.out.print("No of digits: "+count);
    }
}
Output:
No of Digits : 4
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Reverse the number:
Program:
class Main{
    public static void main(String[] args){
        int n = 1234,rev=0,l=0;
        System.out.println("The number is: "+n);
        while(n!=0){
            l=n%10;
            rev=(rev*10)+l
            n=n/10;
        }
        System.out.println("The reverse of the given number: "+rev);
    }
}
Output:
The number is: 1234
The reverse of the given number: 4321
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
To check if the given number is a palindrome or not
Program:
class Main{
    public static void main(String[] args){
        int num = 121,rev=0,l=0,c=num;
        while(num!=0){
            l=num%10;
            rev=(rev*10)+l;
            num=num/10;
        }
        if(c==rev){
            System.out.println(c+" is a palindrome");
        }
        else{
            System.out.println(c+" is not a palindrome");
        }
    }
}
Output:
121 is a palindrome
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
To find an Armstrong number in java
Program:
class Main{
    public static void main(String[] args){
        int num=153,sum=0,l=0,num1=num;
        while(num!=0){
            l=num%10;
            sum+=Math.pow(l,3);
            num/=10;
        }
        if(num1==sum){
            System.out.println(num1+" is an armstrong number");
        }
        else{
            System.out.println(num1+" is not an armstrong number");
        }
    }
}
Output:
153 is an armstrong number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Factorial of a number using loops no recurssion
Program:
class Main{
    public static void main(String[] args){
        int num=5,mul=1;
        for(int i=num;i>=1;i--){
            mul*=i;       
        }
        System.out.println("The factorial of "+num+" is :"+mul);
    }
}
Output:
The factorial of 5 is :120
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Program to find the given number is a prime number or not
Program:
class Main{
    public static void main(String[]args){
        int num = 2,count=0;
        for(int i =1;i<=num;i++){
            if(num%1==0){
                count++;
            }
        }
        if(count==2){
            System.out.print("Prime");
        }
        else{
            System.out.print("not a prime");
        }
    }
}
Output:
Prime
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Program to find whether a number is a perfect number or not
Program:
class Main{
    public static void main(String[]args){
        int num = 6,sum=0,num1=num;
        for(int i =0;i<num;i++){
            if(num%i==0){
                sum+=i;
            }
        }
        if(num1==sum){
            System.out.print(num1+" is a perfect number");
        }
        else{
            System.out.print(num1+" is not a perfect number");
        }
    }
}
Output:
6 is a perfect number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Program to find whether a number is a strong number or not
Program:
class Main{
    public static void main(String[]args){
        int num = 145,sum=0,num1=num,l=0;
        while(num!=0){
            l=num%10;
            int mul =1;
            for(int i=l;i>=1;i--){
                mul*=i;
            }
            sum+=mul
            num=num/10;
        }
        if(num1==sum){
   		    System.out.print(num1+" is a strong number");
        }
        else{
   		    System.out.print(num1+" is not a strong number");
        }
    }
}
Output:
145 is a strong number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Fionacci Series:
Program:
class Main{
    public static void main(String[] args){
        int n=8,a=0,b=1,c=0;
        System.out.print("The fibonacci series of "+n+" is:"+a+" "+b+" ");
        for(int i=3;i<=n;i++){
            c=a+b;
            System.out.print(c+" ");
            a=b;
            b=c;
        }
    }
}
Output:
The fionacci series of 8 is:0 1 1 2 3 5 8 13 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Sum of N natural numbers:
Program:
class Main{
    public static void main(String[] args){
        int n=5,sum=0;
        for(int i=1;i<=n;i++){
            sum+=i;
        }
        System.out.print("The sum of "+n+" natural numbers is:"+sum);
    }
}
Output:
The sum of 10 natural numbers is:55 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Given number ia an automorphic number or not
Program:
class Main{
    public static void main(String[] args){
        int n=25,digits=0,l=0;
        int s=n*n;
        int temp=n
        while(temp>0){
            digits++;
            n/=10;
        }
        l = s % (int)Math.pow(10,digits);
        if(n==l){
             System.out.print(n+" is an automorphic number");
        }
        else{
             System.out.print(n+" is not an automorphic number");
        }
    }
}
Output:    
25 is an automorphic number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Given number is a spy number or not:
Program:
class Main{
    public static void main(String[] args){
        int n=134,sum=0,nl=0,m=n,mul=1,ml=0,d=n;
        while(n!=0){
            nl=n%10;
            sum+=nl;
            n/=10;
        }
        while(m!=0){
            ml=m%10;
            mul*=ml
            m/=10;
        }
        if(sum==mul){
            System.out.print(d+" is a spy number");
        }
        else{
            System.out.print(d+" is not a spy number");
        }
    }
}
Output:
134 is not a spy number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Neon number or not
Program:
class Main{
    public static void main(String[]args){
        int n=9,s=0,d=n,sum=0,l=0;
        s=n*n;
        while(s!=0){
            l=s%10;
            sum+=l
            n/=10
        }
        if(d==sum){
            System.out.print(d+" is a neon number");
        }
        else{
            System.out.print(d+" is not a neon number");
        }
    }
}
Output:
9 is a neon number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Given number is a Harshad (Niven) Number:
Program:
class Main{
    public static void main(String[] args){
        int n=18,sum=0,l=0;
        while(n!=0){
            l=n%10;
            sum+=l;
            n/=10;
        }
        if(n%sum==0){
  	        System.out.print(d+" is a Harshad number");
        }
        else{
            System.out.print(d+" is not a Harshad number");
        }
    }
}
Output:
19 is not a Harshad number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Palindrome Numbers in a Range (e.g., 1 to 150):
Program:
class Main{
    public static void main(String[] args){
        int num=0,l=0,n=0;
        for(int i=0;i<=num;i++){
            n=i;
            int rev=0;
            while(n!=0){
                l=n%10;
                rev=(rev*10)+l;
                n/=10;
            }
            if(i==rev){
                System.out.print(rev+" ");
            }
                
        }
        
    }
}
Output:
1 2 3 4 5 6 7 8 9 11 22 33 44 55 66 77 88 99 101 111 121 131 141 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Magic Number or not
Program:
class Main{
    public static void main(String[]args){
        int num=1729,l=o,sum=0,d=num;
        while(num!=0){
            l=num%10;
            sum+=l;
            num/=10;
        }
        while(sum>9){
            int temp = sum;
            sum=0;
            while(temp!=0){
                l=temp%10;
                sum+=l;
                temp/=10;
            }
        }
        if(d==1){
            System.out.print(d+" is a magic number");
        }
        else{
            System.out.print(d+" is not a magic number");
        }
    }
}
Output:
1729 is a Magic Number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Factorial Series (up to 5):
Program:
class Main{
    public static void main(String[]args){
        int mul=1,a=1;
        for(int i=1;i<=5;i++){
            mul*=a;
            a++;
            System.out.print(mul+" ")
        }
    }
}
Output:
1 2 6 24 120 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Duck Number:
Program:
class Main{
    public static void main(String[]args){
        int num=1123,l=0,temp=num;
        boolean a = false;
        while(num!=0){
            l=num%10;
            if(l==0){
                a=true;
                break;
            }
            num/=10;
        }
        if(a){
            System.out.print(temp+" is a duck number");
        }
        else{
            System.out.print(temp+" is not a duck number");
        }
    }
}
Output:
1123 is not a duck number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Evil number or not
Program:
class Main{
    public static void main(String[] args){
        int n=6,rem=0,quo=0,count=0,d=n;
        String r = "";
        while(n>0){
            quo=n/2;
            rem=n%2;
            r=rem+r;
            n=quo;
        }
        for(int i =0;i<r.length();i++){
            if(r.chatAt(i)=='1'){
                count++
            }
        }
        if(count%2==0){
            System.out.print(d+" is an evil number");
        }
        else{
            System.out.print(d+" is not an evil number");
        }
    }
}
Output:
6 is an evil number
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

