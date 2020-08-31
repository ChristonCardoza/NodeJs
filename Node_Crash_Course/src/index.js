const Logger = require('./logger_demo');

const logger = new Logger();

logger.on('message', data => console.log("Called Listerner ",data));

logger.log("Hello World");
logger.log("Hello");
logger.log("Hi");

