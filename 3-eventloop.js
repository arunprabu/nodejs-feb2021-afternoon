const events = require('events');

const eventEmitter = new events.EventEmitter();

//Defining Custom Event 
eventEmitter.on("OPEN_CONNECTION", function(err, data){

  if(!err){
    console.log(data);
  }else{
    console.oog(err);
  }
  
});

// custom events should be emitted thru program
eventEmitter.emit('OPEN_CONNECTION', null, 'Connection Opened Successfully!');
