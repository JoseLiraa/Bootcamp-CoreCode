function dutyFree(normPrice, discount, hol){
    return Math.floor((hol/(discount/100))/normPrice);
   }