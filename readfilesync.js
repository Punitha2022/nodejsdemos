//using file we can call any methods in the module file system
//file.readFileSync
//const file =require('fs')

const {readFileSync,writeFileSync} =require('fs')
console.log('Reading the data from the file')
const data1=readFileSync('data1.js','utf-8')
const data2=readFileSync('data2.js','utf-8')
console.log('read operation completed')
writeFileSync('data.txt',`User Details 
${data1} 
${data2}`)
console.log('done writing...')
