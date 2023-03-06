const crypto = require('crypto');
const encrypt_password = 'd2d5c81b8fbca3ea864acfc645b895e9';
const decipher = crypto.createDecipher('aes-128-cbc','srikarthickk');
var decrypted = decipher.update(encrypt_password,'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);