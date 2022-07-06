function altPairs(str){
  var result="";
  for(var i =0; i<str.length;i++){
    result += str.charAt(i);
    if(i%2!=0) 
      i+=2;
  }
  return result;
}