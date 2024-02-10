function myEach(collection, callback){
    //Checks if the collection is an array. If it is, the values variable is set to collecition
    //If not, it converts the collection object into an array using Object.values()
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    //Iterates over each elemment in the array starting at index 0 until indez is less than the length of the array
    for (let i = 0; i < values.length; i++){
        //Callback function is called w/ the current element as the argument
        //The callback function will be executed for each element in the array
        callback(values[i]);
    }
    return collection;
}
function myMap(collection, callback) {
  let newArray = [];
  // Determine if the collection is an object
  let values = Array.isArray(collection) ? collection : Object.values(collection);
  // Iterate over each value in the collection
  for (let i = 0; i < values.length; i++) {
      // Apply the callback function to the current value and store the transformed value in the new array
      newArray.push(callback(values[i], i, collection));
  }

  return newArray;
}

function myReduce(collection, callback, acc){
    // Check if the collection is an object and convert it to an array if needed
  const values = Array.isArray(collection) ? collection.slice() : Object.values(collection);
     // If no start value for the accumulator is provided, set it to the first element/value
  if (acc === undefined) {
    acc = values[0];
    values.splice(0, 1); // Remove the first element from the array
  }
   // Iterate through each element/value in the collection
   for (let i = 0; i < values.length; i++) {
    // Invoke the callback function with the current value of `acc`, current element/value, and the collection
    acc = callback(acc, values[i], collection);
  }
  // Return the final value of `acc`
  return acc;
}

function myFind(collection, predicate) {
    // Check if collection is an array or object Convert object to array if necessary
    let values = Array.isArray(collection) ? collection : Object.values(collection);

    // Iterate over the collection
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i];
        }
      }
    
      return undefined;

}

function myFilter(collection, predicate) {
    // Create an empty array that will hold the filtered values
    const trueArray = [];
    // Check if collection is an array or object and convert it to an array if necessary
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    // Iterate over the collection
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            trueArray.push(values[i]);
        }
    }
    // Return the filtered array
    return trueArray;
}

function mySize(collection) {
    // Check if collection is an array or object and convert it to an array if necessary
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++){
        return values.length
    }
}

function myFirst(array, n) {
    if (n && n > 0) {
      return array.slice(0, n);
    } else {
      return array[0];
    }
  }

  function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    }
    return array[array.length - 1];
  }

function myKeys(object) {
    return Object.keys(object)
}
function myValues(object) {
    return Object.values(object)
}