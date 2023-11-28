const {writeFile} =require('fs')
const data='Hello!... welcome to NODE JS'
//flag:'a' to append the content with the already existing content
writeFile('asyncdemo.txt',`${data}`,{flag:'a'},(err)=>{
if(err)
console.log(err)
})