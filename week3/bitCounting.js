var countBits = function(n) {
    return  n.toString(2).split('').map(Number).reduce((a,b) => a+b);
    };