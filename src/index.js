module.exports = function getZerosCount(number, base) {
var zeroNumber = number;
  for (i=2; i<=base; i++){
    if (base % i ==0){
      var countFactorials = 0;
      var countDivide = 0;
         while (base % i == 0){
         countFactorials++;
        base = base / i;
         }
       var tempNumber = number;
         while (tempNumber / i >0){
           countDivide+= Math.floor(tempNumber/i);    
           tempNumber = Math.floor(tempNumber / i);  
      }
    var zeroNumber = Math.min(zeroNumber, countDivide/countFactorials );
    }  
  }
  zeroNumber = Math.floor(zeroNumber);
  return zeroNumber}
