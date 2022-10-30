import readline from 'readline'
import { FgGreen, Reset } from '../ANSI/index.mjs'

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let name = '_'
let favoriteFood = '_'

read.question(FgGreen + "What's your name? \n" + Reset, (nameInput) => {
	name = nameInput

	read.question(
		FgGreen + `\nHello ${name}! What's your favorite food? \n` + Reset,
		(foodInput) => {
			favoriteFood = foodInput
			console.log(FgGreen + `\nI see, I like ${favoriteFood} too`)
			read.close()
		}
	)
})
