import fs from 'fs'
import fsPromises from 'fs/promises'

/*
  A file descriptor is a reference to an open file, 
  a number (fd) returned by opening the file using the open() method offered by the fs module. 
  This number (fd) uniquely identifies an open file in operating system
 
  r open the file for reading only
  r+ open the file for reading and writing, if file doesn't exist it won't be created.
  w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing.
  a open the file for writing, positioning the stream at the end of the file. The file is created if not existing.
  a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing.
 */

fs.open('./fs/files/markdown.md', 'r', (err, fd) => {
	console.log('fd', fd)
})

// fs.openSync does the same thing but able to return fd to a variable
try {
	const fdSync = fs.openSync('./fs/files/markdown.md', 'r')
	console.log('fdSync', fdSync)
} catch (error) {
	console.error(err)
}

// Promise version of fs
async function example() {
	let filehandle
	try {
		filehandle = await fsPromises.open('./fs/files/markdown.md', 'r')
		console.log('fsPromise fd', filehandle.fd)
	} finally {
		if (filehandle) await filehandle.close()
	}
}
example()
