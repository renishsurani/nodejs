function front3(str){
  if(str.length <= 3)
    return str + str + str;
  else
    String nstr = str.substring(0,3);
    return nstr + nstr + nstr;
}