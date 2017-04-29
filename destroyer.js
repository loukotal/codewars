function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);

  for (var i = arr.length-1; i >= 0; i--) {
      for (var j = args.length; j >= 1; j--) {
          if (arr[i] == args[j]){
              arr.splice(i,1);
          }
      }
  }

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
