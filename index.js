var recipes = new Object();

// Returns an object with the original key value pairs and the new key value pair
// It does not modify theoriginal object, but rather returns a clone with the new data
function updateObjectWithKeyAndValue(object, key, value) {
  var tempObject = new Object();
  tempObject[key] = value;
  return Object.assign(object, tempObject);
}

//