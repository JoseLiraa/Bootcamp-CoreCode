# Bootcamp-CoreCode 🚀

## Second week
### Week challenges (Thursday)💻

- Watch [this video](https://www.youtube.com/watch?v=cEBkvm0-rg0)

1. Multiply [Exercise 1](https://www.codewars.com/kata/50654ddff44f800200000004)
```javascript
function multiply(a, b){
  return a * b;
}
```

2. ASCII Total [Exercise 2](https://www.codewars.com/kata/572b6b2772a38bc1e700007a)
```javascript
function uniTotal (string) {
  let sumCharacters = 0;
  for (let i = 0; i < string.length; i ++){
  sumCharacters = sumCharacters + string.charCodeAt(i);
  }
  return sumCharacters;
}
```

3. get character from ASCII Value [Exercise 3](https://www.codewars.com/kata/55ad04714f0b468e8200001c)
```javascript
function getChar(c){
  return String.fromCharCode(c);
}
```

4. Binary Addition [Exercise 4](https://www.codewars.com/kata/551f37452ff852b7bd000139)
```javascript
function addBinary(a,b) {
  let sum = a+b;
  return sum.toString(2);
}
```

5. Student's Final Grade [Exercise 5](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)
```javascript
function finalGrade (exam, projects) {
  //let result = 0;
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 && projects >=5) return 90;
  if(exam > 50 && projects >= 2 ) return 75;
  return 0;
}
```

> You can return to the index of week 2, [here](indexWeek2.md)