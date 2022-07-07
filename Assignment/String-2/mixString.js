function mixString(a, b){
  var str = '';
  for(var i=0; i<Math.max(a.length, b.length);i++){
    str += a.charAt(i)+b.charAt(i);
  }
  return str;
}