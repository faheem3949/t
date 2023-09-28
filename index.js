const http = require('http') ; 
const fs = require('fs')
var h = fs.readFileSync('./index.html')
const server = http.createServer((req,res) => {
if(req.url==='/'){
  return res.end(h);
}
else if(req.url==='/about'){
  return res.end('<h1>about page</>')
}
else{
 return res.end('<h2>error 404 not found<h2/>') 
}
})


server.listen(process.env.port,()=>{
  console.log(`server is running on ${process.env.port}`)
})
// module.exports = name;