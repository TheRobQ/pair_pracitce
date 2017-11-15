var letter = ['a', 'b', 'c', 'd', 'e', 'f'];

 function printLetter(array){
   for (var i = 0; i < array.length; i++) {
     setTimeout(function(){console.log(array[i])}, 5000)

   }
   console.log(array);
 }

 printLetter(letter)
