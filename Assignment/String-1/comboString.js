function comboString(a, b){
  var min = Math.min(a.length, b.length);
  if(a.length == min)
    return a+b+a;
  else
    return b+a+b;
}