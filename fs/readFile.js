import fs from 'fs'
import fsPromises from 'fs/promises'

fs.readFile('./fs/files/markdown.md', 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	console.log('fs.readFile \n\n', data)
})

async function example() {
	try {
		const data = await fsPromises.readFile('./fs/files/markdown.md', {
			encoding: 'utf8'
		})
		console.log('fsPromises.readFile \n\n', data)
	} catch (err) {
		console.log(err)
	}
}
example()
