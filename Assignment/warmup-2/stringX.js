function stringX(str){
  var result = '';
  var start = str.charAt(0);
//   var mid = str.substring(1,str.length-1);
  var end = str.charAt(str.length-1);
  for(var i=1;i<str.length-1;i++)
    if('x'!=str.charAt(i) && i!=0 && i!=(str.length-1))
        result += str.charAt(i);
  return start+result+end;
}