function uniTotal (string) {
    let sumCharacters = 0;
    for (let i = 0; i < string.length; i ++){
    sumCharacters = sumCharacters + string.charCodeAt(i);
    }
    return sumCharacters;
}