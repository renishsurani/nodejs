function twoChar(str, index){
  if(index < 0 || str.length < index+2)
     return str.substring(0,2);
  else
    return str.substring(index,index+2);
}