function frontAgain(str){
  if(str.length < 2)
    return false;
  var first = str.substring(0,2);
  if(first == str.substring(str.length-2))
    return true;
  else
    return false;
}