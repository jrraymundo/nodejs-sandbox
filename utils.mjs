import { FgRed, FgGreen, Reset } from './ANSI/index.mjs'

export const printSuccess = (message) => {
	console.error(FgGreen + message + Reset)
}

export const printError = (message) => {
	console.error(FgRed + message + Reset)
}
