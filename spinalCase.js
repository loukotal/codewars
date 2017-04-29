function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //Matches underscores and replaces with "" string.
  str = str.replace(/[W_]/g," ");
  //matches any white space.
  str = str.replace(/[\s]+/g, " ");
  //Matches Uppercase and puts white space between them
  str = str.replace(/([A-Z])/g, " $1");
  str = str.replace(/^ /, "");

  str = str.replace(/([A-Z])/g,function(u) {
      return u.toLowerCase();
  });



  console.log(str);
  return str.replace(/[\s]+/g, "-");
}

var s = spinalCase("Teletubbies say Eh-oh");
console.log(s);
