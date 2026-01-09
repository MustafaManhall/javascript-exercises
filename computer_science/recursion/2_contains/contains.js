const contains = function(obj, goal) {
    for (let key in obj) {

        let element = obj[key];
        
        if (element === goal) return true;

        if (element !== element && goal !== goal) return true;
         
        if (typeof element === 'object' && element !== null) {
            if (contains(element, goal)) return true;
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
