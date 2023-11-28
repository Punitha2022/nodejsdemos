const http=require('http')
const fs=require('fs')
const server=http.createServer(function(request,response){
  const fileStream=fs.createReadStream('largefile.txt')
   fileStream.pipe(response)
})
server.listen(8080)