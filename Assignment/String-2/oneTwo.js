function oneTwo(str){
  var temp='';
  if(str.length<3)
    return '';
  for(var i=0; i<str.length;i++){\
    if(i%3==0)
      if(str.charAt(i+2)!='')
        temp+= str.substring(i+1,i+3)+str.charAt(i);
  }
 return temp;
}