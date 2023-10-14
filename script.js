"use strict"

// -----------------------1---------------
// -------------Find duplicates in an array-----------


// let arr1 = [1,2,3,2,2,3,3];

//     let dubvalue1="";
//     let count1 = 0;
//     for (let i=0; i<arr1.length-1; i++) 
//     {
//         for (let j=i+1; j<arr1.length; j++)
//         {
//             if((arr1[j] == arr1[i]) && (!(dubvalue1.includes(arr1[j])))){
//                 dubvalue1 += arr1[j]+ " "
//                 count1 = 1;
//             } 
//         }
//     }
// if (count1 !=0) {
//     console.log(dubvalue1);
// }
// else {
//     console.log(-1)
// }

// -----------------------2---------------

// Given an array A of positive integers.
// Your task is to find the leaders in the array.
// An element of array is leader if it is greater than or equal to the sum of all the elements to its right side. 
// The rightmost element is always a leader. 

// let A = leader([2,16,7,23,9,6,1,2]);

// function leader(x) {
//     let value2 = 0;
//     let leaders=""
//     for (let i=0; i < x.length; i++) 
//     {
//         for (let j=i+1; j < x.length; j++)
//         {
//             value2 = value2 + x[j];
//         }
//         if (x[i] >= value) {
//             leaders += x[i] + " ";
//         }
//         value2 = 0;           
//     }
//     console.log(leaders);
// }

// -----------------------3---------------
// ----------------checking of palindrome string-----------------


// let input = reversing("madam")

//  function reversing(x){
//     let output3 = ""
//     for (i = x.length-1; i>=0; i--){
//         output3 += x[i];
//     }
//     if (x == output3){
//         console.log("It is a Palindrome")
//     }
//     else {
//         console.log("It is not a Palindrome")
//     }
    
// }

// ------------------------4----------------
// ----------------checking of palindrome number-----------------

// let number4 = 8998;
// let result = palindrome(number4);

// function palindrome(x) {
//     let reversed4 = 0;
//     for (; x > reversed4; x = Math.floor(x / 10)) {
//         reversed4 = (reversed4 * 10) + (x % 10);
//     }
//     return x === reversed4;
// }

// if (result) {
//     console.log(number + " is a palindrome.");
// } else {
//     console.log(number + " is not a palindrome.");
// }