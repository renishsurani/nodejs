function lastChars(a, b){
  var aa = '@';
  var bb = '@';
  
  if(a.length >0)
     aa = a.substring(0,1);
  
  if(b.length>0)
    bb= b.substring(b.length-1);
  
  return aa+bb;
}