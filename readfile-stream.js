const fs =require('fs')
const stream=fs.createReadStream('largefile.txt');
stream.on('data',(chunk)=>{
    console.log(`Received ${chunk.length} of data`)
})
stream.on('end',()=>{
    console.log('end of the file is reached')
})
stream.on('error',(err)=>{
    console.log(err)
})