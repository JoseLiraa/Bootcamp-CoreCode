function persistence(num) {
    let timesMultiply   = 0;
    num = num.toString();
    while (num.length > 1) {
        timesMultiply++;
        num = num.split('').map(Number).reduce((previousValue, currentValue) => previousValue * currentValue).toString();
    }
    return timesMultiply;
}