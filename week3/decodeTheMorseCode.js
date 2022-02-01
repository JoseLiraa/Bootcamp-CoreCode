decodeMorse = function(morseCode){
    return morseCode
             .split("   ") // with 3 spaces we get a word
             .map(word => word
                           .split(" ") // with 1 space we get a character
                           .map(character => MORSE_CODE[character]) // decode Morse code character
                           .join('') // join the character to make words 
              )
              .join(' ') // add spaces between words 
              .trim()
}