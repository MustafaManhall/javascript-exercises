const totalIntegers = function (data) {
  let count = 0;

  // Base case: primitive values
  if (typeof data !== "object" || data === null) {
    return Number.isInteger(data) ? 1 : 0;
  }

  // Recursive case: container (array/object)
  for (let key in data) {
    let value = data[key];
    count += totalIntegers(value); // Add counts from nested levels
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
