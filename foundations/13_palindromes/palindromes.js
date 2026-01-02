const palindromes = function (str) {
    let cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(cleaned);
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
