# Bootcamp-CoreCode 🚀

## Third week
### Week challenges (Tuesday)💻
1. Your order, please [Exercise 1](https://www.codewars.com/kata/55c45be3b2079eccff00010f)
```javascript
function order(words){
  let numbers = words.replace(/[^-.0-9]/g,'').split('').map(Number);
  let newWords = words.split(' ');
  let result = [];

  for(let i = 1; i <= newWords.length; i++ ){
      result.push(newWords[numbers.indexOf(i)]);
    }
  return result.join(' ');
}
```

2. Counting Duplicates [Exercise 2](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)
```javascript
function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];

  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
}
```


3. Simple Pig Latin [Exercise 3](https://www.codewars.com/kata/520b9d2ad5c005041100000f)
```javascript
function pigIt(str) {
  var newString = str.replace(/\w+/g, (word) => {  return word.slice(1) + word[0] + 'ay' });
  return newString;
}
```

> You can return to the index of week 3, [here](indexWeek3.md)