const http=require('http')
const server=http.createServer(function(request,response){
    if(request.url=='/') return responseText(request,response)
    if(request.url=='/json') return responseJson(request,response)
    requestNotFound(request,response)
})

function responseText(req,res){
    res.setHeader('Content-Type','text/plain')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.end('Hi')
}
function responseJson(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({'name':'John','age':20,'numbers':[1,2,3,5]}))
}
function requestNotFound(request,response){
    response.writeHead(404,{'Content-Type':'text/plain'})
    response.end('Requested Resource Not FOUND')
}
server.listen(8080)
