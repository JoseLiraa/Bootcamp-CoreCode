# Bootcamp-CoreCode 🚀

## Fourth week
### Week challenges (Thursday)💻
1. Detect Pangram [Exercise 1](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)
```javascript
function isPangram(string){
 let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  return  alphabet.every((letter) => string.toLowerCase().includes(letter));
}
```

2. Find the missing letter [Exercise 2](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)
```javascript
function findMissingLetter(array){
 for (var i = 0; i < array.length; i++) {
    if (array[i].charCodeAt() + 1 !== array[i + 1].charCodeAt()) {
      return String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }
}
```

3. Find the unique number [Exercise 3](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)
```javascript
function findUniq(arr) {
  arr = arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0];
}
```

4. Reverse or rotate? [Exercise 4](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991)
```javascript
function revrot(str, sz) {
  if (sz <= 0 || str == '' || sz > str.length) {
    return '';
  }
  const arr = [];
  const s = str.split('');
  while (s.length >= sz) {
    arr.push(s.splice(0, sz));
  }
  let result = arr.map((elem) => {
    const sum = elem.reduce((a, c) => a + Math.pow(c, 3), 0);
    if (sum % 2) {
      elem.push(elem[0]);
      elem.shift();
      return elem.join('');
    } else {
      return elem.reverse().join('');
    }
  });
  return result.join('');
}
```

5. What's Your Poison? [Exercise 5](https://www.codewars.com/kata/58c47a95e4eb57a5b9000094)
```javascript
function find(rats) {
  var bottle = [0,0,0,0,0,0,0,0,0,0];
  rats.forEach(function(rat) {
    bottle[rat] = 1;
  });
  return parseInt(bottle.reverse().join(""), 2);
}
```

> You can return to the index of week 4, [here](indexWeek4.md)