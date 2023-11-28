const http=require('http')
const {readDataFromFile}=require('./fsdemo');
const server=http.createServer(function(request,response){
    console.log(readDataFromFile)
    data=readDataFromFile();
    console.log(data )
    response.end(data)
})
server.listen(8085)//start the server