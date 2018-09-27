function countingLetters (string) {
  var count = {};
  var result = string.split(' ').join('').split('');
  for (var i = 0 ; i <result.length; i++){

     var letter = result[i];

     if(count[letter]) {
        count[letter]++
     } else {
        count[letter] = 1;
     }
   }
  return count;
}
console.log(countingLetters("lighthouse in the house"))


