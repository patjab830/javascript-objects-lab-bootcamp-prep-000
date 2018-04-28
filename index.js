var recipes = new Object();

// Returns an object with the original key value pairs and the new key value 
// pair
// It does not modify the original object, but rather returns a clone with the 
// new data
function updateObjectWithKeyAndValue(object, key, value) {
  var tempObject = new Object(object);
  tempObject[key] = value;
  return Object.assign({}, tempObject);
}

// updates `object` with the given `key` and `value` (it is destructive) and 
// returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// deletes `key` from a clone of object and returns the new object (it is 
// non-destructive)
// does not modify the original object(it is non-destructive)
function deleteFromObjectByKey(object, key) {
  //var tempObject = O
}

// returns object withoutthe delete key/value pair
// modifies the original object
function destructivelyDeleteFromObjectByKey(object, key) {
  
}