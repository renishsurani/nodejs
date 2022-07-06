function seeColor(str){
   var red = str.slice(0, 3)
   var blue = str.slice(0, 4)
   if(red == 'red') {
     return 'red'
   } else if(blue == 'blue') {
     return 'blue'
   } else {
     return ''
   }
}