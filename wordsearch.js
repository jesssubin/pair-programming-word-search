const transpose = require('../../d2/matrix_transposition'); 

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word)){
            return true; 
        } 
    }
   const verticalJoin = transpose(letters).map(ls => ls.join('')); 
    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false; 
}

module.exports = wordSearch