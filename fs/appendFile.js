import fs from 'fs'

const content = '\n## Header 2\n'

fs.appendFile('./fs/files/markdown.md', content, (err) => {
	if (err) {
		console.error(err)
	}
})
