function pigIt(str) {
    var newString = str.replace(/\w+/g, (word) => {  return word.slice(1) + word[0] + 'ay' });
    return newString;
  }