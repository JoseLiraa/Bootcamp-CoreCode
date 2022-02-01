# Bootcamp-CoreCode 🚀

## Third week
### Week challenges (Thursday)💻
1. Fold an array [Exercise 1](https://www.codewars.com/kata/57ea70aa5500adfe8a000110)
```javascript
function foldArray(array, runs)
{
  while(runs > 0) {
    array = fold(array);
    runs -= 1;
  }
  return array;
}

function fold(array) {
  var result = [];
  if(array.length % 2 == 0) {
    var i = 0;
    var i2 = array.length / 2;
    while(i < i2) {
      result.push(array[i] + array[array.length - 1 - i]);
      i += 1;
    }
  } else {
    var i = 0;
    var i2 = array.length - ((array.length - 1) / 2) - 1;
    while(i < i2) {
      result.push(array[i] + array[array.length - 1 - i]);
      i += 1;
    }
    result.push(array[((array.length - 1) / 2)]);
  }
  return result;
}
```

2. Encrypt this! [Exercise 2](https://www.codewars.com/kata/5848565e273af816fb000449)
```javascript
var encryptThis = function(text) {
  return text.split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');
  }

```


3. Format a string of names like 'Bart, Lisa & Maggie'. [Exercise 3](https://www.codewars.com/kata/53368a47e38700bd8300030d)
```javascript
function list(names){
 let newArrayNames=[];
 
  
  /*let newArrayNames= names.map(function(name){
    return name.name;
  });*/
  
  
  let newStringNames = JSON.stringify(names).replace(/(\[*)(\]*)(\{*)(\}*)(\:*)(\"*)(\,*)/g, '').split('name');
  
  newStringNames.forEach(function(e) {
    if (e !== ''){
      newArrayNames.push(e);
    }
  });
  console.log(newArrayNames)
  switch (newArrayNames.length){
    case 0:
      return '';
    case 1:
      return newArrayNames[0];
    case 2:
      return newArrayNames[0] + ' & ' + newArrayNames[1];
    case 3:
      return newArrayNames[0] + ', ' + newArrayNames[1] + ' & ' + newArrayNames[2];
     case 4:
      return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ' & ' + newArrayNames[3];
    case 5:
      return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', ' + newArrayNames[3] + ' & ' + newArrayNames[4];
      case 6:
      return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', ' + newArrayNames[3] + ', ' + newArrayNames[4] + ' & ' + newArrayNames[5];
      case 7:
      return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', ' + newArrayNames[3] + ', ' + newArrayNames[4] + ', ' + newArrayNames[5] + ' & ' + newArrayNames[6];
      case 8:
      return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', ' + newArrayNames[3] + ', ' + newArrayNames[4] + ', ' + newArrayNames[5] + ', ' + newArrayNames[6] + ' & ' + newArrayNames[7];
      case 9:
      return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', '  + newArrayNames[3] + ', ' + newArrayNames[4] + ', ' + newArrayNames[5] + ', ' + newArrayNames[6] + ', ' + newArrayNames[7] + ' & ' + newArrayNames[8];
  }
}
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
```

> You can return to the index of week 3, [here](indexWeek3.md)