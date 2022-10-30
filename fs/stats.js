import fs from 'fs'
// Can also import from 'fs/promises' version

//File information is stored in stats
fs.stat('./fs/files/test.txt', (err, stats) => {
	if (err) console.error(err)

	// Can view readable properties
	console.log(stats)

	// Can also invoke some methods
	console.log('size', stats.size)
	console.log('isFile()', stats.isFile())
	console.log('isDirectory()', stats.isDirectory())
	console.log('isSymbolicLink()', stats.isSymbolicLink())
})

/* 
Sample Stats Output:
{
  dev: 16777222,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 44490354,
  size: 1249, // Equivalent to 1kb
  blocks: 8,
  atimeMs: 1667042796941.5562,
  mtimeMs: 1667042795337.784,
  ctimeMs: 1667042795337.784,
  birthtimeMs: 1667042700177.1138,
  atime: 2022-10-29T11:26:36.942Z,
  mtime: 2022-10-29T11:26:35.338Z,
  ctime: 2022-10-29T11:26:35.338Z,
  birthtime: 2022-10-29T11:25:00.177Z
}
*/
