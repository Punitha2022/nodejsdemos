const fs=require('fs')
const util=require('util')
//SYNCHRONOUS
//reading the content from the file modulesdemo.js and displaying it in the console.
//readFileSync will read the content synchronously
//const data=fs.readFileSync('modulesdemo.js','utf8')

//ASYNCHRONOUS
const readDataFromFile=()=>{
    const data1=fs.readFileSync('modulesdemo.js','utf8')
const data=fs.readFile('modulesdemo.js','utf-8',(error,data)=>{
    if(error)
      console.log(error)
    console.log(data)
})
return data1;
}
//console.log(data)
// for(var i=0;i<100;i++)
// console.log(i)
module.exports={readDataFromFile}