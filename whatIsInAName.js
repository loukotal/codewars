
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var counter = 0;

  for (var i = 0; i < collection.length; i++) {
      for (var key in collection[i]) {

          if (collection[i][key] == source[key] ) {
              console.log(counter);
              counter++;
          }
      }

      if (counter >= Object.keys(source).length){
          console.log(counter);
          arr.push(collection[i]);

      }
      counter = 0;
      console.log(arr);
  }
// Only change code above this line
  return arr;
}
//should return first: "Tybalt", last: "Capulet"
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
