# Bootcamp-CoreCode 🚀

## Third week
### Week challenges (Wednesday)💻
1. Valid Parentheses [Exercise 1](https://www.codewars.com/kata/52774a314c2333f0a7000688)
```javascript
function validParentheses(parens) {
  let count = 0;
  for(let i =0; i < parens.length; i++){
   parens[i] === "(" ? count++ : count--;
    if (count < 0) return false;
  }
  return count == 0;
}
```

2. Convert string to camel case [Exercise 2](https://www.codewars.com/kata/517abf86da9663f1d2000003)
```javascript
function toCamelCase(str){
  let strArray = str.split('');
  for (let i=0; i < strArray.length; i++){
    if(strArray[i] === "-" || strArray[i] === "_"){
      strArray.splice([i],1);
      strArray[i] =  strArray[i].charAt(0).toUpperCase();
    }
  }
  return strArray.join('');
}
```


3. Unique In Order [Exercise 3](https://www.codewars.com/kata/54e6533c92449cc251001667)
```javascript
var uniqueInOrder=function(iterable){
  var newIterable = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i+1]) newIterable.push(iterable[i]);
  }
  return newIterable;
}
```

> You can return to the index of week 3, [here](indexWeek3.md)