function atFirst(str){
  if(str.length<2){
    if(str.length==0){
      return '@@';
    }
    return str+'@';
  }
  else
    return str.substring(0,2);
}