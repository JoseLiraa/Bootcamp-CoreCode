var uniqueInOrder=function(iterable){
    var newIterable = [];
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i+1]) newIterable.push(iterable[i]);
    }
    return newIterable;
  }