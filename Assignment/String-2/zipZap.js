function zipZap(str){
  var temp='';
  if(str.length<=2)
    return str;
  for(var i=0;i<str.length;i++){
    if(str.substring(i,i+1)==("z") && str.substring(i+2,i+3)==("p")){
      temp+=str.substring(i,i+1)+str.substring(i+2,i+3);
      i += 2;
    }
    else{
      temp+=str.substring(i,i+1);
    }
  }
  return temp;
}