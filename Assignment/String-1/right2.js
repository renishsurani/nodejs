function right2(str){
//   if(str.length <3)
//     return str;
  else
    var front = str.substring(0,str.length-2);
    var end = str.substring(str.length-2);
  return end+front;
}