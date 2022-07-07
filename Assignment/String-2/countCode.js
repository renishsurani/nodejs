function countCode(str){
  var t =0;
  for(var i=0;i<str.length;i++){
    if(str.substring(i,i+2)=='co' && str.charAt(i+3)=='e')
      t++;
  }
  return t;
}