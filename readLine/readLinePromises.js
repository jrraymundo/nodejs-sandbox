import readline from 'readline/promises'
import { FgGreen, Reset } from '../ANSI/index.mjs'

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

const start = async () => {
	let name = ''
	let favFood = ''

	const askName = async () => {
		name = await read.question(
			FgGreen + "Hi there, what's your name? \n" + Reset
		)
	}

	const askFavFood = async () => {
		favFood = await read.question(
			FgGreen + 'What about your favorite food? \n' + Reset
		)
	}

	const botReply = (message) => {
		console.log(FgGreen + message + Reset)
	}

	try {
		await askName()
		botReply(`Nice to meet you ${name}!`)
		await askFavFood()
		botReply(`That's delicious, I love ${favFood} too`)
		read.close()
	} catch (err) {
		console.error(err)
	}
}

start()
