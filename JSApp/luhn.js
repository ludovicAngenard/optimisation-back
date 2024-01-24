export const luhn = (value) => {
    var Luhn = require('luhn-js');
 
    Luhn.isValid(value); // false

    return Luhn.isValid(value);
}