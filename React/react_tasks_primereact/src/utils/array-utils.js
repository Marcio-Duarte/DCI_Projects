// Returns the index of an Object in array.
// id is optional, needed to search by key in object element.
export function getIndexOfObjInArray(array, arrayItem, id) {
  const index = array.findIndex((element) => {
    if (id) {
      return element[id] === arrayItem
    } else {
      return element === arrayItem
    }
  });
  return index;
}

// Returns an array with the same elements but shuffled.
export function shuffleArray(array) {
  const shuffled = [];
  array.forEach((element) => {
    const rnd = Math.floor(Math.random() * array.length);
    shuffled.splice(rnd, 0, element);
  });
  return shuffled;
}
