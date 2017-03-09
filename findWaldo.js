// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach( function(name, index) {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
