function stringSplosion(str){
  var str1 = '';
  for(var i=0; str.length; i++)
    str1 += str.substring(0,i);
  return str1;
}