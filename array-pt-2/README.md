# Arrays | Part 2

- Work from the `solution.js` file provided in this repository.
  
**1. The Greater Numbers.**

Create a function named `findGreatest` which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the numbers from the array which are greater than the second argument. 

i.e. 

`findGreatest([3, 4, 5], 4)` ➞ 5

`findGreatest([10, 20, 30], 12)` ➞ 20, 30

`findGreatest([0, 10, 3], 4)` ➞ 10

**2. The longest word.**
Create a function named `getLongestWord` to find the longest word in a given string. 

i.e. `getLongestWord("this is a web development course")` ➞  "development"

**3. Reverse.**
Create a function named `reverseNum` to reverse a number. 

i.e. `reverseNum(34532)` ➞ 23543
i.e. `reverseNum(-34532)` ➞ -23543

Hint: `Math.sign()` returns the positive or negative sign of the integer 
[MDN for Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)

**4. "AEIOU": Vowels.**
Create a function named `vowelCounter` that takes a string in as the parameter and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 

i.e. `vowelCounter("this is a string")` ➞ 4

**5. Missing Number.**
Create a function named `findMissingNum`:
- as an argument, it takes an array of the sequence of integers between 1 and N (N ≤ 10). One number is omitted from this series.
- the function returns the omitted number.

Examples: 
* `findMissingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])` ➞ 5
* `findMissingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])` ➞ 10
* `findMissingNum([[2, 1, 3, 4, 6, 7, 8]])` ➞ 5

**6. Cubed.**
Create a function named `sumOfCubes` that takes in an array of numbers and returns the sum of its cubes. 

Examples: 
* `sumOfCubes([1, 5, 9])` ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* `sumOfCubes([2])` ➞ 8
* `sumOfCubes([])` ➞ 0

**7. Dictionary.**
Create a function named `dictionary` that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.

Notes:
* If none of the words match, return an empty array.
* Keep the filtered array in the same relative order as the original array of words.

Examples:
* `dictionary("bu", ["button", "breakfast", "border"])` ➞ ["button"]
* `dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])` ➞ ["triplet", "tries", trip"]
* `dictionary("beau", ["pastry", "delicious", "name", "boring"])` ➞ []

**8. Even Number Generator.**
Create a function named `getEvenNums` that finds all even numbers from 1 to the given number.

Examples:
* `getEvenNums(8)` ➞ [2, 4, 6, 8]
* `getEvenNums(4)` ➞ [2, 4]
* `getEvenNums(2)` ➞ [2]
**Notes:** 
* If there are no even numbers, return an empty array. 
* Do not include 0. 

**9: Alphabetical Order.**
Create a function named `alphabetise` to sort a string into alphabetical order. **NOTE:** assume numbers, symbols and punctuation are not included in the string.

i.e. `alphabetise("webdev")` ➞ "bdeevw"




