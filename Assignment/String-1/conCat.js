function conCat(a, b){
  if(a.charAt(a.length-1) == b.charAt(0))
    return a + b.substring(1);
  else
    return a+b;
}