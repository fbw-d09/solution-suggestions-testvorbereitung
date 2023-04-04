// 1. Where Have My Four Letter Words Gone?

function isFourLetters(arr) {
    const fourLetterArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 4) {
        fourLetterArr.push(arr[i]);
      }
    }
  
    return fourLetterArr;
  }
  
  console.log(isFourLetters(['Deer', 'Duck', 'Dog', 'Elephant'])); // [ 'Deer', 'Duck' ]
  
  // 2. Print Month Name
  
  function getMonthName(num) {
    if (num < 1 || num > 12) return 'Invalid input';
  
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  
    return months[num - 1];
  }
  
  console.log(getMonthName(8)); // 'August'
  
  // 3. Amplify the Multiples of 4
  
  function amplifyMultiplesOfFour(num) {
    const numArr = [];
    for (let i = 1; i <= num; i++) {
      if (i % 4 === 0) {
        let ampByTen = i * 10;
        numArr.push(ampByTen);
      } else {
        numArr.push(i);
      }
    }
  
    return numArr;
  }
  
  console.log(amplifyMultiplesOfFour(8)); // [1, 2, 3, 40, 5, 6, 7, 80]
  
  // 4. Being unique is cool...
  
  function unique(arr) {
    const uniqueNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      if (arr.indexOf(currentElement) === arr.lastIndexOf(currentElement)) {
        uniqueNumbers.push(currentElement);
      }
    }
  
    return uniqueNumbers;
  }
  
  console.log(unique([3, 3, 3, 7, 3, 3, 5])); // [7, 5]
  
  // 5. c4n y0u r34d th15?
  
  function code(str) {
    const lowerStr = str.toLowerCase();
    const letters = lowerStr.split('');
  
    const hackerLetters = ['a', 'e', 'i', 'o', 's'];
    const replacements = ['4', '3', '1', '0', '5'];
  
    for (let i = 0; i < letters.length; i++) {
      const index = hackerLetters.indexOf(letters[i]);
      if (index !== -1) {
        letters[i] = replacements[index];
      }
    }
  
    return letters.join('');
  }
  
  console.log(code('do you even code, sis')); // d0 y0u 3v3n c0d3, 515
  
  // Bonus Questions
  
  // 6. Is it Symmetrical?
  
  function isSymmetrical(num) {
    const numForwards = num.toString();
    const numSplit = numForwards.split('');
    const reverse = numSplit.reverse();
    const numReverse = reverse.join('');
  
    return numForwards === numReverse ? true : false;
  }
  
  console.log(isSymmetrical(111)); // true
  
  // 7. snake_case => camelCase
  
  function toCamelCase(snakeStr) {
    const splitStr = snakeStr.split('_');
  
    const camelCaseArray = [];
    for (let i = 0; i < splitStr.length; i++) {
      if (i === 0) {
        camelCaseArray.push(splitStr[i]);
      } else {
        const firstChar = splitStr[i].slice(0, 1).toUpperCase();
        const remainder = splitStr[i].slice(1);
        camelCaseArray.push(firstChar + remainder);
      }
    }
  
    return camelCaseArray.join('');
  }
  
  console.log(toCamelCase('this_is_francesca_borg')); // thisIsFrancescaBorg
  
  // 8. Pig Latin Translation
  
  function pigLatin(str) {
    const cleanedString = str.replace(/[^\w\s]/gi, '');
    const splitStr = cleanedString.split(' ');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    const pigTranslation = [];
    for (let i = 0; i < splitStr.length; i++) {
      const firstChar = splitStr[i][0];
      let remainder = splitStr[i].slice(1);
  
      if (vowels.includes(firstChar.toLowerCase())) {
        pigTranslation.push(firstChar + remainder + 'way');
      } else {
        pigTranslation.push(remainder + firstChar + 'ay');
      }
    }
  
    return pigTranslation.join(' ') + '.';
  }
  console.log(code("do you even code, sis"));
  
  // BONUS: Is it Symmetrical?
  console.log("")
  console.log("--- BONUS Task 1: Is it Symmetrical? ---")
  function isSymmetrical(num) {
      const numForwards = num.toString();
      const numSplit = numForwards.split("");
      const reverse = numSplit.reverse();
      const numReverse = reverse.join("");
  
      if (numForwards === numReverse) {
          return true;
      } else {
          return false;
      }
  }
  console.log(isSymmetrical(111));
  
  // camelCase -> snake_case
  console.log("")
  console.log("--- BONUS Task 2: camelCase -> snake_case ---")
  function toCamelCase(snakeStr) {
      const splitStr = snakeStr.split("_");
      const camelCaseArray = [];
      for (let i = 0; i < splitStr.length; i++) {
          let firstChar, remainder;
          if (splitStr[i] === splitStr[0]) {
              camelCaseArray.push(splitStr[0]);
              continue;
          } else {
             firstChar = splitStr[i].slice(0, 1);
              remainder = splitStr[i].slice(1, splitStr[i].length);
          }
          const currentWord = firstChar.toUpperCase() + remainder;
          camelCaseArray.push(currentWord);
      }
      const camelCaseText = camelCaseArray.join("");
      return camelCaseText;
  }
  console.log(toCamelCase("this_is_francesca_borg"));
  
  console.log(pigLatin('this pig latin')); // histay igpay atinlay
  console.log(pigLatin('Cats are great pets.')); // atsCay areway reatgay etspay.