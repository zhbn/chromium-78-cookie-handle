var addon = require('bindings')('cookie-handle');
str_arr = new Buffer.from('test=1')
encode  = addon.encodeCookieValue('',str_arr)
decode  = addon.decodeCookieValue('',encode)//
console.log(decode)