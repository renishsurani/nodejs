function last2(str){
  var j=0;
  if(str.length < 4)
    return 0;
  else
    var last = str.substring((str.length-2));
    for(var i=0;i<str.length-2;i++)
      if(last==str.substring(i,i+2))
        j+=1;
    return j;
}
