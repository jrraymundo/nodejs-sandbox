import fs from 'fs'
import { printSuccess, printError } from '../../utils.mjs'

const createFolder = (folderPath) => {
	fs.mkdir(folderPath, (err) => {
		if (err) return printError(err)
		printSuccess(folderPath + ' has been created')
	})
}

createFolder('./fs/files/mkdir-test')
