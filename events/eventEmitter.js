import EventEmitter from 'events'

const emitter = new EventEmitter()

emitter.on('greet', (firstName, lastName) => {
	console.log(`Hello ${firstName} ${lastName}`)
})

emitter.emit('greet', 'Jerome', 'Raymundo')
