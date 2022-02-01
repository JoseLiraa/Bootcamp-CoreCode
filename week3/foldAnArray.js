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