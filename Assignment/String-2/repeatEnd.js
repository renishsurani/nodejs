function repeatEnd(str, n){
  var str1='';
  for(var i=0; i<n;i++){
    str1 += str.substring(str.length-n);
  }
  return str1;
}