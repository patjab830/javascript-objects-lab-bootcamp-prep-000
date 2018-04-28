var recipes = new Object();

// Returns an object with the original key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
  var tempObject = new Object();
  tempObject[key] = value;
  return Object.assign(object, tempObject);
}

//