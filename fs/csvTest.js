import fs from 'fs'

fs.readFile('./fs/files/test.csv', 'utf8', (err, data) => {
	if (err) return console.error(err)
	console.log(data)
})
