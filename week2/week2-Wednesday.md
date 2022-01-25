# Bootcamp-CoreCode 🚀

## Second week
### Week challenges (Wednesday)💻


1. Holiday VIII - Duty Free [Exercise 1](https://www.codewars.com/kata/57e92e91b63b6cbac20001e5)
```javascript
function dutyFree(normPrice, discount, hol){
 return Math.floor((hol/(discount/100))/normPrice);
}
```

2. Twice as old [Exercise 2](https://www.codewars.com/kata/5b853229cfde412a470000d0)
```javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld- (sonYearsOld*2));
}
```

3. Valid Spacing [Exercise 3](https://www.codewars.com/kata/5f77d62851f6bc0033616bd8)
```javascript
function validSpacing(s) {
  let result = true;
  let array = s.split("");
  if(array[0] === ' ' || array[array.length -1] === ' ' ) return false;
  if (s.includes("  "))
    {
    result= false;
    }
  return result;
}
```

4. Fake Binary [Exercise 4](https://www.codewars.com/kata/57eae65a4321032ce000002d)
```javascript
function fakeBin(x){
let resultingString = '';
  x.split('').forEach(e => parseInt(e) <5 ? resultingString +=0 : resultingString += 1);
  return resultingString;
}
```

> You can return to the index of week 2, [here](indexWeek2.md)