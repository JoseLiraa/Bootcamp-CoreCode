# Bootcamp-CoreCode 🚀

## Fourth week
### Week challenges (Monday)💻
1. Check [this](https://www.youtube.com/watch?v=sXQxhojSdZM) video
2. Check [this](https://www.youtube.com/watch?v=909NfO1St0A) video
3. Regex_exercises
```javascript
// Exercise 01 | Using a regex pattern, get the 3 letter words in the ex1 string.
const ex1 = 'The quick brown fox jumped over the lazy dog';
console.log(ex1.match(/\b\w{3}\b/g));
//OUTPUT: [ 'The', 'fox', 'the', 'dog' ]

//-----------------------------------------
// Exercise 02 | Using a regex pattern, remove all of the numbers from the ex2 string.
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
console.log(ex2.replace(/[0-9]/g,''));
//OUTPUT: 'ABCDEFGHIJ'

console.log(ex2.match(/\D/g));
//OUTPUT: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ]

//-----------------------------------------
// Exercise 03 | Using a regex pattern, find the monetary value contained within the ex3 string.
const ex3 = 'The salad costs $9.99';
console.log(ex3.match(/(?<=\$)\d+\.\d+/g).join(''));
//OUTPUT: '9.99'

//-----------------------------------------
// Exercise 04 | Using a regex pattern, find the telephone number contained within the ex4 string.
const ex4 = 'Contact customer support on 0800 300 500';
console.log(ex4.match(/\d{4}\s\d{3}\s\d{3}/g).join(''));
//OUTPUT: '0800 300 500'

//-----------------------------------------
// Exercise 05 | Using a regex pattern, find the email address contained within the ex5 string.
const ex5 = 'You can contact me on Twitter @codebubb or ames@juniordevelopercentral.com';
console.log(ex5.match(/\w+@\w+.com/g).join(''));
//OUTPUT: 'james@juniordevelopercentral.com'
```
4. Check [this](https://www.youtube.com/watch?v=RvYYCGs45L4) video
5. Check [this](https://www.youtube.com/watch?v=DHvZLI7Db8E) video
6. Check [this](https://www.youtube.com/watch?v=rKK1q7nFt7M) video

> You can return to the index of week 4, [here](indexWeek4.md)