function multi (a){
  var compara = a ;
  var multiList = [];
  var sumList = 0;

  while(compara >= 1){
    if(a % compara == 0){
      multiList.push(compara);
    }
      compara--;
  }
  console.log(multiList);
  //return multiList;

  for (let i = 0; i < multiList.length; i++){
    sumList += multiList[i];
  }
  console.log(sumList)
  //return sumList;
}

multi(200)