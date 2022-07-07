function getSandwich(str){
  var first = str.indexOf('bread');
  var last = str.lastIndexOf('bread');
  if(last != -1)
    if(first==last)
      return "";
    else
      return (str.substring(first+5,last));
  return "";
}