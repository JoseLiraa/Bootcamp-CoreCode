function toCamelCase(str){
    let strArray = str.split('');
    for (let i=0; i < strArray.length; i++){
      if(strArray[i] === "-" || strArray[i] === "_"){
        strArray.splice([i],1);
        strArray[i] =  strArray[i].charAt(0).toUpperCase();
      }
    }
    return strArray.join('');
  }