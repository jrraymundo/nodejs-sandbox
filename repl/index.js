import repl from 'repl'

const local = repl.start()

local.on('exit', () => {
	console.log('Have a nice day, good bye!')
})
