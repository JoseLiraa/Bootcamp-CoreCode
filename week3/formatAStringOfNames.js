function list(names){
    let newArrayNames=[];
   
     let newStringNames = JSON.stringify(names).replace(/(\[*)(\]*)(\{*)(\}*)(\:*)(\"*)(\,*)/g, '').split('name');
   
     newStringNames.forEach(function(e) {
       if (e !== ''){
         newArrayNames.push(e);
       }
     });
     console.log(newArrayNames)
     switch (newArrayNames.length){
       case 0:
         return '';
       case 1:
         return newArrayNames[0];
       case 2:
         return newArrayNames[0] + ' & ' + newArrayNames[1];
       case 3:
         return newArrayNames[0] + ', ' + newArrayNames[1] + ' & ' + newArrayNames[2];
        case 4:
         return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ' & ' + newArrayNames[3];
       case 5:
         return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', ' + newArrayNames[3] + ' & ' + newArrayNames[4];
         case 6:
         return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', ' + newArrayNames[3] + ', ' + newArrayNames[4] + ' & ' + newArrayNames[5];
         case 7:
         return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', ' + newArrayNames[3] + ', ' + newArrayNames[4] + ', ' + newArrayNames[5] + ' & ' + newArrayNames[6];
         case 8:
         return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', ' + newArrayNames[3] + ', ' + newArrayNames[4] + ', ' + newArrayNames[5] + ', ' + newArrayNames[6] + ' & ' + newArrayNames[7];
         case 9:
         return newArrayNames[0] + ', ' + newArrayNames[1] + ', ' + newArrayNames[2] + ', '  + newArrayNames[3] + ', ' + newArrayNames[4] + ', ' + newArrayNames[5] + ', ' + newArrayNames[6] + ', ' + newArrayNames[7] + ' & ' + newArrayNames[8];
     }
   }
   list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])