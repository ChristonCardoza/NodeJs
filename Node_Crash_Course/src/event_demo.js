const EventEmiter = require('events');

//create class
class MyEmitter extends EventEmiter {};

//Init object
const myEmiter = new MyEmitter();

//Event listener
myEmiter.on('event',() => {console.log("Event Fired!")});

//Emit event
myEmiter.emit('event');