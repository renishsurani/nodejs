function doubleChar(str){
  var str1="";
  for(var i=0;i<str.length;i++){
    str1 += str.charAt(i)+str.charAt(i);
  }
  return str1;
}