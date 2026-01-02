const sumAll = function (numOne, numTwo) {
    //Or (typeof numOne == 'number' && typeof numTwo == 'number') but includes the Double Numbers
    let total = 0;
    if ( numOne > 0 && numTwo > 0 && Number.isInteger(numOne) && Number.isInteger(numTwo)) {
        let min = Math.min(numOne, numTwo);
        let max = Math.max(numOne, numTwo);
        for (let i = min; i <= max; i++) {
            total += min;
            min++;
        }
        return total;
    } else {
        return "ERROR";
    }
};

let c = 2.5;

console.log(typeof c);


// Do not edit below this line
module.exports = sumAll;
