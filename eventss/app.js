//import EventEmitter class
const EventEmitter = require('events')

//create an instance of EventEmitter 
const emitter = new EventEmitter();


// emitter.on('greet' , () => {
//     console.log('hello shreyash');
// })

// emitter.emit('greet')

//  you can also pass argument with emitting

emitter.on('greet', (userName) =>{
    console.log(`hello ${userName}`);
})

emitter.emit('greet' , 'shreyash jadhav')