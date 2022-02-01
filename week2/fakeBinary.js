function fakeBin(x){
    let resultingString = '';
      x.split('').forEach(e => parseInt(e) <5 ? resultingString +=0 : resultingString += 1);
      return resultingString;
    }