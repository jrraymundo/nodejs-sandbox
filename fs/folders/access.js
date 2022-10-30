import fs from 'fs'
import { printSuccess, printError } from '../../utils.mjs'

const checkAccess = (path) => {
	fs.access(path, (err) => {
		if (err) return printError(`${path} no such file or directory`)
		printSuccess(`${path} is accessible`)
	})
}

const folderPath1 = './fs/files'
const folderPath2 = './fs/testFolder'
checkAccess(folderPath1)
checkAccess(folderPath2)
