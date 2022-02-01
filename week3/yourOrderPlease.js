function order(words){
    let numbers = words.replace(/[^-.0-9]/g,'').split('').map(Number);
    let newWords = words.split(' ');
    let result = [];
  
    for(let i = 1; i <= newWords.length; i++ ){
        result.push(newWords[numbers.indexOf(i)]);
      }
    return result.join(' ');
  }