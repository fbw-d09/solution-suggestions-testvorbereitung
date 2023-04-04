# Programming Basics: Loops Using Arrays

* Work from the `solution.js` file provided in this repository.

## 1. sumOfNumbers
- Create a program that adds up the numbers in an array (of at least 3 numbers)
- It prints the result to the Terminal in the following format: "The sum of the array is [**sum**]; the product of the array is [**product**].".  
- **Bonus**: Print to screen both the sum and the product of these numbers.

## 2. Hello Frien
- Create an array filled with your friends' and family's names.
- Loop over the array and greet each friend in the format:  
"Hello [friend]!"   
- Print the index of each item in the array. Example:  
"[friend] is at index [i] of my friends array!"  
* [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!" 

* [Susan, Rezvane, Hadi] ➞ expected output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array". 

## 3. City Names
- Create an array of city names named `cityArr`.
- Loop through the array and add the city names to a string. 
- Print the string to the terminal  
Examples:

* [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome".

## 4. Odds and Evens
- Write a function named `oddsEvens` that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. 
- It should return the new array  
Examples:
* oddsEvens([3, 5, 2, 4]) ➞ expected output: [4, 6, 1, 3]
* oddsEvens([6, 9, 10, 20]) ➞ expected output: [5, 10, 9, 19]

## 5. Capitalize
- Create a function named `capitalize` that capitalizes the first letter of each element in an array of names.  
Examples:
* capitalize(["matt", "sara", "lara"]) ➞ ["Matt", "Sara", "Lara"]
* capitalize(["samuel", "MARIA", "luke", "mary"]) ➞ ["Samuel", "Maria", "Luke", "Mary"]
* capitalize(["Cynthia", "Karen", "Jane", "Carrie"]) ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

* **Note:** Keep names in the same order and make sure that only the first letter of the name is capitalised (See "Maria" in the second above example). 
	
## 6. No Duplicates!
- A set is a collection of unique items.
- A set can be formed from an array by removing all duplicate items.
- Write a function named `noDuplicates` which transforms an array into a set of unique values. See the examples below. Example:
* noDuplicates([1, 4, 4, 7, 7, 7]) ➞ [1, 4, 7]

* noDuplicates([1, 6, 6, 9, 9]) ➞ [1, 6, 9]
* noDuplicates([2, 2, 2, 2, 2, 2]) ➞ [2]
* noDuplicates([5, 10, 15, 20, 25]) ➞ [5, 10, 15, 20, 25]

## 7. Repeat it 
- Write a function named `repeatItem`
- The function should create a string where the string passed as first argument is repeated as many times as denoted by the number in the second argument
- The function should return the resulting array
 Examples:

* repeatItem("example", 3) ➞ ["example", "example", "example"]

## 8. Factors
- A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
[3, 6, 12, 36]

* // 3 is a factor of 6 (3 * 2 = 6)
* // 6 is a factor of 12 (6 * 2 = 12)
* // 12 is a factor of 36 (12 * 3 = 36)

Write a function named `isFactorChain` that determines whether or not a given array is a factor chain. Examples:
* isFactorChain([1, 2, 4, 8, 16, 32]) ➞ true
* isFactorChain([1, 1, 1, 1, 1, 1]) ➞ true
* isFactorChain([2, 4, 6, 7, 12]) ➞ false
* isFactorChain([10, 1]) ➞ false