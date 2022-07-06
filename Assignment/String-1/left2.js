function left2(str){
  if(str.length>2)
    return str.substring(2,str.length)+str.substring(0,2);
  else
    return str;
}