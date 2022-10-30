import path from 'path'

const file = '/fs/files/test.txt'

// Get the parent folder of a file
console.log(path.dirname(file))

// Get the name of the file
console.log(path.basename(file))

// Get the extension of the file
console.log(path.extname(file))
