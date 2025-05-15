const EventEmitter = require('events')

const emitter = new EventEmitter();

const eventCounts = {
    'user-login': 0,
    'user-logout': 0,
    'user-purchase': 0,
    'profile-update': 0,
};

emitter.on('user-login', (userName) => {
eventCounts['user-login']++
    console.log(`${userName} logged in !`);
})

emitter.on('user-purchase', (userName, item) => {
eventCounts['user-logout']++
    console.log(`${userName} purchased ${item}`);
})

emitter.on('profile-update', (userName, field) => {
eventCounts['user-purchase']++
    console.log(`${userName} update theri ${field}`);
})

emitter.on('user-logout', (userName) => {
eventCounts['profile-update']++
    console.log(`${userName} logged out`);
})

emitter.on('summary', () => {
    console.log(eventCounts);
})

//Emit some events
emitter.emit('user-login', 'Shreyash');
emitter.emit('user-purchase', 'Shreyash', 'laptop');
emitter.emit('profile-update', 'Shreyash', 'email');
emitter.emit('user-logout', 'Shreyash');

// show the summary
emitter.emit('summary');