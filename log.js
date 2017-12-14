//this is the library that is required for winston
var winston = require('winston');

winston.remove(winston.transports.Console);
//we want to have timestamp in our log
winston.add(winston.transports.Console, {timestamp: true});
//this is our file that will be created
winston.add(winston.transports.File, {filename: 'winston-basic.log'});

module.exports = winston;

