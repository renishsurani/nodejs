function endUp(str){
  if(str.length < 4)
    return str.toUpperCase();
  else
    return str.substring(0 , (str.length)-3) + str.substring((str.length)-3 , (str.length)).toUpperCase();
}