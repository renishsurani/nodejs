function minCat(a, b){
  var min = Math.min(a.length, b.length)
  return a.substring(a.length-(min))+b.substring(b.length-(min));
}