function withoutX(str){
  var begin = 0;
    var end = str.length;
      
    if(str.length > 0 && str.charAt(0) == 'x')
        begin = 1;
                
    if(str.length > 1 && str.charAt(str.length-1) == 'x')
        end--;
                          
    return str.substring(begin, end);
}