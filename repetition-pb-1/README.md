# Repetition PB


## PLease solve by using a callback (filter, reduce, map ...)

---

![map - filter - reduce ](map-filter-reduce.jpg)

1. 
The head of teachers needs an information, who passed the course. Write a program to forward this info (forward name and grade of students who passed). 

(passed means 70 and more points)

```javascript
  const students = [
    { name: 'Quincy', grade: 83 },
    { name: 'Jason', grade: 70 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
```
---

2. 

Write a program to calculate the profit made by Ali`s Electronic Shop for the months of September.

```javascript
dataSeptember = [
    {
      product: 'Dell Inspiration',
      sold: 10,
      priceBuying:200.00,
      priceSelling: 396.99
    },
    {
      product: 'Hp Elite Book',
      sold: 15,
      priceBuying:200.00,
      priceSelling: 496.99
    },
    {
      product: 'Mac Book Air',
      sold: 25,
      priceBuying:400.00,
      priceSelling: 796.99
    },
    {
      product: 'Samsung Galaxy Book',
      sold: 2,
      priceBuying:200.00,
      priceSelling: 396.99
    }
  ];
```
---
3.

Sum up all positive numbers in the array.\
extra Challenge: 
Try to solve in one line of code.
```
const input = [1, -4, 12, 0, -3, 29, -150];

function sumUpPositiveNumbers(input) {
    //one line here to solve the challenge
}
```
---
4.

Return an object with key/value pairs (letter the key and value (occurances of this letter in all arrays counted together)\
Google Hint: "make one array from array of arrays"
```
const letterArray = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];
expected output:{ a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }
```
---
## Classes

5. 
* Create a class named `TV` with the properties `brand`, `channel` and `volume`.
* Specify `brand` as a constructor parameter.
* The value of `channel` should be `1` by default. `volume` should be `50` by default.
* Add methods `increaseVolume` and `decreaseVolume`. Volume can't be below 0 or above 100.
* Add a method `getNewChannel` to set the channel randomly. Let's say the TV has only 50 channels.
* Add a method `resetTV` to reset the TV back to channel 1 and volume 50. 
* Add a merhod `getTVstatus` that returns info about the TV status in the format: "Panasonic at channel 8, volume 75".