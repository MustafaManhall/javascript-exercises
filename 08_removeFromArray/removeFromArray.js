const removeFromArray = function(arr, ...valuesToRemove) {
    return arr.filter((i) => !valuesToRemove.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
