function repeatFront(str, n) {
  var str1 = "";
  for (var i = n; i >= 0; i--) {
    str1 += str.substring(0, i);
  }
  return str1;
}