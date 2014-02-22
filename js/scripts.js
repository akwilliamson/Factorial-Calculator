var numsToWords = function (inputNumber) {
  var numberString = inputNumber.toString();
  var integerArray = numberString.split("");
  var singleDigits = {1:'one', 2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine'}
  var teenDigits = {10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen'}
  var tensDigits = {20:'twenty',30:'thirty',40:'fourty',50:'fifty',60:'sixty',70:'seventy',80:'eighty',90:'ninety'}
  var hundredDigit = 'hundred';
  var thousandDigit = 'thousand';
  var millionDigit = 'million';
  var billionDigit = 'billion';
  var trillionDigit = 'trillion';

  if (inputNumber < 10) {
    return singleDigits[inputNumber];  
  } else if (inputNumber < 20) {
      return teenDigits[inputNumber];
  } else if (inputNumber < 100) {
      return tensDigits[integerArray[0]+0] + " " + singleDigits[integerArray[1]];  
  } else if (inputNumber < 1000) {
    return singleDigits[integerArray[0]] + " " + hundredDigit + " " + tensDigits[integerArray[1]+0] + " " + singleDigits[integerArray[2]];




  }
};
