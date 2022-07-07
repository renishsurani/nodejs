function endOther(a, b){
  var min='';
  var max='';
  if(a.length < b.length){
    min = a.toUpperCase();
    max=b.toUpperCase();
  }else{
    min=b.toUpperCase();
    max=a.toUpperCase();
  }
  return max.substring(max.length - min.length)==min;
}