const crypto =require('crypto');

const password='crypto@123';

const cipher = crypto.createCipher('aes-128-cbc','karthick');

var encrypted =cipher.update(password,'utf8','hex');

encrypted+= cipher.final('hex');

console.log(encrypted);