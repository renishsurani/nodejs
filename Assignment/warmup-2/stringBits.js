function stringBits(str){
  var n=0;
  var result='';
  while(n<str.length){
    if(n%2==0)
      result += str.charAt(n);
    n++;
  }
  return result;
}