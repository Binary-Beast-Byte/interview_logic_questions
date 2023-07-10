// !Write a program to find the maximum number in an array of numbers.
// let arrays = [4,58, 5, 23, 55]
// function findMax(array) {
//     let max = 0;
//     for(let i=0; i<array.length; i++) {
//        if(array[i] > max) {
//         max = array[i]
//        }
//     }
//     console.log(max);
// }

// findMax(arrays)

// !Create a function that takes a string as input and returns the reverse of the string.
// function reverse(string) {
//     let reverse = '';
//     for(let i=string.length -1; i >=0; i --) {
//         reverse += string[i]
//     };
//     return console.log(reverse);
// }

// reverse('my name is ravi')

// !Implement a function to calculate the factorial of a given number.
// !factorial(5) = 5 * 4 * 3* 2* 1 = 120
// function calculateFactorial(num) {
//     let factorial = 1;
//     for(let i=2; i <=num ; i++) {
//         factorial *= i
//     }
//     console.log(factorial)
// }

// calculateFactorial(5)

// !Write a program to check if a given string is a palindrome.
//palindrome words are 'level', 'racecar' forwared = backward

// function isPalindrome (str) {
//     let isPalindrome ;
//     if([...str].reverse().join('') === str) {
//         isPalindrome = true;
//     } else {
//         isPalindrome = false;
//     }
//     console.log(isPalindrome)
// }

// isPalindrome('racecar')

//*without the help of reverse method
// function isPalindrome(str) {
//     const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     let left = 0;
//     let right = processedStr.length - 1;

//     while (left < right) {
//       if (processedStr[left] !== processedStr[right]) {
//         return false;
//       }

//       left++;
//       right--;
//     }

//     return true;
//   }

//   // Example usage:
//   const inputString = prompt('enter input');
//   const isPalindromeResult = isPalindrome(inputString);
//   console.log(isPalindromeResult); // Output: true

// !Create a function that takes an array of numbers and returns the average of those numbers.

// function findAverage(array) {
//     let sum = 0;
//     for(i=0; i<array.length; i++) {
//         sum += array[i]
//     }
//     // return sum/array.length ;
//     console.log(sum/array.length)
// }

// findAverage([2, 5,7, 12])

// ! Write a program to find the longest word in a sentence.
// let sentence = 'my name is elephant'

// function findLongestWord(sentence) {
//     let sentenceArrays = sentence.split(' ');
//     let longestWord= '';

//     for(i=0; i<sentenceArrays.length; i++) {
//         if(sentenceArrays[i].length > longestWord.length) {
//             longestWord = sentenceArrays[i]
//         }
//     }
//     console.log(longestWord);
// }

// findLongestWord(sentence)

// !Implement a function to find the second smallest element in an array of numbers.
// function findSmaller(array) {
//     let smaller = array[0];

//     for (i=array.length -1; i>=0; i--) {
//         if(array[i] < smaller) {
//             smaller = array[i]
//         }
//     }

//     console.log(smaller)

// }

// findSmaller([3, 67, 7])

//!create a function that sums the total array using reduce method
// function sumArray(arr) {
//     const total = arr.reduce(function(acc, curr) {
//         acc += curr;
//         return acc;
//     })

//     console.log(total)
// }

// sumArray([4, 5, 1, 5])

//!create a function that finds the max element in the array use reduce method
// function findMax(arr) {
//     const output = arr.reduce(function(acc, curr) {
//         if(curr > acc) {
//             acc = curr
//         }
//         return acc
//     })

//     console.log(output)
// }

// findMax([4, 5, 1, 35, 3])

//? Generate Permutations Task:
// Write a function that generates all permutations of a given string.
//  Each permutation should be a unique combination of the characters in the string.
// For example, given the string "abc", the function should return ["abc", "acb", "bac", "bca", "cab", "cba"].

/**
 *! FizzBuzz: Write a program that prints the numbers from 1 to 100.
 * But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz."
 * For numbers that are multiples of both three and five, print "FizzBuzz."
 *
 * [1, 2, fizz, 4,5. ..., buzz, .... fizzbuzz]
 *
 * */

// function FizzBuzz() {
//   let fizzs = [];

//   for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         fizzs.push("fizzBuzz");
//       }else if (i % 3 === 0) {
//         fizzs.push("fizz");
//       }else  if (i % 5 === 0) {
//         fizzs.push("buzz");
//       } else {
//           fizzs.push(i)
//       }
//   }

//   console.log(fizzs);
// }
// FizzBuzz();

/**
 * !Fibonacci Sequence: Write a function to generate the Fibonacci sequence up to a given number of terms.
 *? genFibonacci(10) = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
 */

//  function generateFibonacci(n) {
//     let sequence = [0, 1];

//     for(let i = 2; i < n; i++) {
//         let nextTerm = sequence[i -1] + sequence[i - 2];
//         sequence.push(nextTerm);
//     }

//     console.log(...sequence.join(','))
//  }

//  generateFibonacci(10)

/**
 * ! Factorial: Write a function to calculate the factorial of a given number.
 * 
 */

// function calculateFactorial(num) {
//    let factorial = 1;
//    for(let i=1; i <=num; i++) {
//     factorial *= i
//    }
//    console.log(factorial)
// }

// calculateFactorial(4) 

/**
 * ! Anagram Checker: Write a function to check if two strings are anagrams of each other 
 * (contain the same characters in a different order).
 * function(silent, listen) = true
 */
// ? my method
// function anagramChecker(string1, string2) {
//     let sortString1 = string1.split('').sort().join();
//     let sortString2 = string2.split('').sort().join();

//     if(sortString1 === sortString2) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// anagramChecker('level', 'elvel')

//? chatgpt method
// function areAnagrams(str1, str2) {
//     let charCount = {};
  
//     for (let char of str1) {
//         charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//     }
  
//     for (let char of str2) {
//         console.log(char)
//       if (!charCount[char]) {
//         return false;
//       }
//       charCount[char]--;
//     }
  
//     return true;
//   }
  
//  areAnagrams('listen', 'silent')

/**
 * !Array Sum: Write a function to find the sum of all numbers in an array.
 */

// function findSum(array) {
//   let sum = 0;

//   for(let i=0; i<array.length; i++) {
//     sum = sum +  array[i]
//   }

//   console.log(sum)
// }

// ? reduce method

// function findSum(arr) {
//   const sum = arr.reduce((acc, val) => acc += val, 0)
//   console.log(sum)
// }
// findSum([1, 6, 8])

/**
 *! Prime Number: Write a function to check if a given number is prime.
 */
//  function checkPrime(num) {
//     for(i=2; i <=Math.sqrt(num); i++){
//         if(num % i === 0) {
//          return  console.log(false)
//         }

//     }

//     console.log(true)
//  }
//  checkPrime(30)

/**
 *! Longest Word: Write a function to find the longest word in a given string.
 */
//  function findLongWord(sentence) {
//     let sentenceArrays = sentence.split(' ');
//     let longestword = ''
//     console.log("🚀 ~ file: script.js:298 ~ findLongWord ~ sentenceArrays:", sentenceArrays)
//     for(i=0; i<sentenceArrays.length; i++) {
//         if(sentenceArrays[i].length > longestword.length) {
//             longestword = sentenceArrays[i]
//         }
//     }
//     console.log(longestword)
    
//  }

//  findLongWord('i am a good programmer')

// !Array Sorting: Write a function to sort an array of numbers in ascending or descending order.

// ? bubble sort alogrithm method
// function sortNum(arr) {
//     for(let i=0; i<arr.length -1; i++) {
//         console.log("i loop run")
//         for(let j=0; j<arr.length -1 -i; j++) {
//             console.log("j loop run !")
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = temp
//             }
//         }
//     }

//     console.log(arr)
// }
// ? using sort method

// function sortNum(arr) {
//     const sortedArray = arr.sort((a, b) => b - a )
//     console.log(sortedArray)
// }

// sortNum([4, 3, 5, 1])

/**
 *! Write a function to remove duplicate elements from an array and return the modified array.
 */

 function removeDuplicate(arr) {
    for(let i=0; i<arr.length -1; i++) {
        for(let j=0; j<arr.length -1 -i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            // if(arr[j] === arr[j+1]) {
            //     arr.splice(j, j+1)
            // }
        }
    }
    console.log(arr)
 }

 removeDuplicate([3, 5, 7, 9, 3, 5])