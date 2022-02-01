# Bootcamp-CoreCode 🚀

## Third week
### Week challenges (Monday)💻
1. Who likes it? [Exercise 1](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)
```javascript
function likes(names) {
 switch(names.length){
   case 0:
      return "no one likes this";
   case 1:
      return names[0] + " likes this";
   case 2:
      return names[0] + " and " + names[1] + " like this";
   case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
   default:
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}
```

2. Bit Counting [Exercise 2](https://www.codewars.com/kata/526571aae218b8ee490006f4)
```javascript
var countBits = function(n) {
return  n.toString(2).split('').map(Number).reduce((a,b) => a+b);
};
```


3. Decode the Morse code [Exercise 3](https://www.codewars.com/kata/54b724efac3d5402db00065e)
```javascript
decodeMorse = function(morseCode){
    return morseCode
             .split("   ") // with 3 spaces we get a word
             .map(word => word
                           .split(" ") // with 1 space we get a character
                           .map(character => MORSE_CODE[character]) // decode Morse code character
                           .join('') // join the character to make words 
              )
              .join(' ') // add spaces between words 
              .trim()
}

```


> You can return to the index of week 3, [here](indexWeek3.md)