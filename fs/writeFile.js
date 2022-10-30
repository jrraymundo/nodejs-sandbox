import fs from 'fs'

const content = '\n\nhello thereee'

fs.writeFile('./fs/files/test-1.txt', content, { flag: 'a+' }, (err) => {})
