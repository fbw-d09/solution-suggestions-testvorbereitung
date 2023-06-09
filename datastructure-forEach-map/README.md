# forEach() and map()

* Work in the `solution.js` file provided in this repository.

**1.** Write a function named `doubleValues` which accepts an array and returns a new array with all the original values doubled.

Examples:
```
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
```

**2.** Write a function named `onlyEvenValues` which accepts an array and returns a new array with only the even values from the original array.

Examples:
```
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
```

**3.** Write a function named `showFirstAndLast` which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
```
showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
```

**4.** Write a function named `addKeyAndValue` which accepts an array of objects, a key, and a value and then returns the array passed to the function with the new key and value added to each object.

Examples:
```
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
```

**5.** Write a function named `vowelCount` which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters are counted.

Examples:
```
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
```