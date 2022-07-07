function repeatSeparator(word, sep, count){
  var str = '';
  for(var i=0;i<(count*2)-1;i++){
    if(i%2==0)
      str+=word;
    else 
      str+=sep;
  }
  return str;
}