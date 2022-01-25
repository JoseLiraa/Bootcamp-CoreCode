# Bootcamp-CoreCode 🚀

## Second week
### Week challenges (Thursday)💻

1. Exclamation marks series #2: Remove all exclamation marks from the end of sentence [Exercise 1](https://www.codewars.com/kata/57faece99610ced690000165)
```javascript
function remove (string) {
  while(string.endsWith('!'))
    {
      string = string.slice(0,-1);
    }
  return string;
}
```

2. Vowel remover [Exercise 2](https://www.codewars.com/kata/5547929140907378f9000039)
```javascript
function shortcut (string) {
  return string.replace(/[aeiou]/g, '');
}
```

3. Rock Paper Scissors! [Exercise 3](https://www.codewars.com/kata/5672a98bdbdd995fad00000f)
```javascript
const rps = (p1, p2) => {
  if(p1 === p2){return 'Draw!'}
  if(p1 === 'paper'&& p2 ==='rock'){ return 'Player 1 won!'}
  if(p1 === 'rock' && p2 ==='scissors'){ return 'Player 1 won!'}
  if(p1 === 'scissors' && p2 ==='paper'){ return 'Player 1 won!'}

  if(p1 === 'rock' && p2 === 'paper'){ return 'Player 2 won!'}
  if(p1 === 'paper' && p2 === 'scissors'){ return 'Player 2 won!'}
  if(p1 === 'scissors' && p2 === 'rock'){ return 'Player 2 won!'}
};
```

4. Persistent Bugger. [Exercise 4](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)
```javascript
function persistence(num) {
    let timesMultiply   = 0;
    num = num.toString();
    while (num.length > 1) {
        timesMultiply++;
        num = num.split('').map(Number).reduce((previousValue, currentValue) => previousValue * currentValue).toString();
    }
    return timesMultiply;
}
```

> You can return to the index of week 2, [here](indexWeek2.md)