function doubleX(str){
  if(str.length == 0)
    return false;
  else
    for(var i=0; i<str.length;i++){
      if(str.indexOf('x') >-1)
        var xpos = str.indexOf('x');
        if('x'== str.charAt(xpos+1))
          return true;
        else
          return false;
    }
}