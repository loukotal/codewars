function likes(names) {
  if (names.length === 0) return "no one likes this";

  var likesThis = " like this";
  var result;
  if (names.length == 1) {
       likesThis = " likes this";

       result = names[0] + likesThis;
       console.log(result);
       return result;
   }
   else if (names.length == 2) {
       result = names[0] + " and " + names[1] + likesThis;
       console.log(result);
       return result;
   }
   else if (names.length == 3){
       result = names[0] + ", " + names[1] + " and " + names[2] + likesThis;
       return result;
   }
   else {
       result = names[0] + ", " + names[1] + " and " + String(names.length-2) + " others " + likesThis;
       return result;
   }
}
console.log(likes(["Peter","Max","Pavel","Ja"]));
