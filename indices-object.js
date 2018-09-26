function indices(string) {
  var indexArray = {};
  var result = string.split(' ').join('');

  for (var i = 0 ; i <result.length; i++){

     var letter = result[i];

     if(indexArray[letter]) {
        indexArray[letter] !==undefined;

         indexArray[letter].push(i);

     }else {
        indexArray[letter] = [i];
     }
   }
  return indexArray;
}
console.log(indices("lighthouse in the house"))


// count = {l:0, i: 1 , g: 2 , h : }