var recipes = new Object();

// Returns an object with the original key value pairs and the new key value pair
// It does not modify theoriginal object, but rather returns a clone with the new data
function updateObjectWithKeyAndValue(object, key, value) {
  var tempObject = new Object();
  tempObject[key] = value;
  return Object.assign(object, tempObject);
}

// updates `object` with the given `key` and `value` (it is destructive) and 
// returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

