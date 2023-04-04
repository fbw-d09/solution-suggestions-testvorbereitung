# Arrays | Part 3

- Work from the `solution.js` file provided in this repository.

**1. Where Have My Four Letter Words Gone?**
Create a function named `isFourLetters` that takes an array of strings. Return an array with all the words in the given array that are exactly four letters long.

Examples:

- isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
- isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
- isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

**2. Print Month Name.**
Create a function named `getMonthName` that takes a number between 1 and 12, and returns its corresponding month name as a string.

Examples:

- getMonthName(3) ➞ "March"
- getMonthName(12) ➞ "December"
- getMonthName(6) ➞ "June"

**3. Amplify the Multiples of 4.**
Create a function named `amplifyMultiplesOfFour` that takes an integer and returns an array of integers ascending from 1 to the given number, where:

- For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return ten times the number).
- If the number cannot be divided evenly by 4, return the number itself.
- The given integer will always be equal to or greater than 1.

Examples:

- amplifyMultiplesOfFour(4) ➞ [1, 2, 3, 40]
- amplifyMultiplesOfFour(3) ➞ [1, 2, 3]
- amplifyMultiplesOfFour(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

**4. Being unique is cool...**
Create a function named `unique` that takes an array of numbers and returns the unique numbers.

Examples:

- unique([3, 3, 3, 7, 3, 3]) ➞ [7]
- unique([0, 0, 0.77, 0, 0, 5]) ➞ [0.77, 5]
- unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ [0]

**5. c4n y0u r34d th15?**
Create a function named `code` that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

**PS:** for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

Examples:

- code("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
- code("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
- code("become a coder") ➞ "b3c0m3 4 c0d3r"

## Bonus Questions

**6. Is it Symmetrical?**
Create a function named `isSymmetrical` that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.

**NB:** A number is symmetrical when it is the same as its reverse.

Examples:

- isSymmetrical(7227) ➞ true
- isSymmetrical(12567) ➞ false
- isSymmetrical(44444444) ➞ true
- isSymmetrical(9939) ➞ false
- isSymmetrical(1112111) ➞ true

**7. snake_case ➞ camelCase**
Create a function `toCamelCase()` that takes a string in `snake_case` and converts it to `camelCase`.

Examples:

- toCamelCase("hello_world") ➞ "helloWorld"
- toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

**8. Pig Latin Translation.**
Create a function name `pigLatin` that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

- Move the first letter of each word to the end of the word.
- Add "ay" to the end of the word.
- Words starting with a vowel (a, e, i, o, u) append "way" to the end instead.

Examples:

- pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
- pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
- pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."