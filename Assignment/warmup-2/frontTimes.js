function frontTimes(str, n){
  var result = '';
  for(var i=0; i<n; i++)
    result += str.substring(0,3);
  return result;
}