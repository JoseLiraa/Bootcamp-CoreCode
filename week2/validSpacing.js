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