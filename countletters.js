function count (string) {
  var count = {};
  var result = string.split(' ').join('').split('');
  result.forEach(function totalCount(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
console.log(count("lighthouse labs in the house"))
