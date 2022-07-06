function countXX(str){
  var j=0;
  for(var i=0;i<str.length;i++)
    if('xx'==str.substring(i,i+2))
      j+=1;
   return j;
}