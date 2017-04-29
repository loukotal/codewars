
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[\W_]+/g, "");
  var reversed = str.split("").reverse().join("");
  if (reversed == str) {
      return true;
  }
  return false;

}
console.log(palindrome("My age is 0, 0 si ega ym."));
