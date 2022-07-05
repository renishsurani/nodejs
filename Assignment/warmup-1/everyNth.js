function everyNth(str, n){
  var str1 = '';
  for(let i=0;i<str.length;i++)
    if(i%n == 0)
      str1 += str.charAt(i);
  return str1;
}