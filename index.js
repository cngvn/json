const http = require("http")
const users  = [
    { 
 id:1,
name:"cngvn",
age:20,
},
{
 id:2,
name:"cnzo",
age:30,
},
{
    id:3,
   name:"asdf",
   age:50,
   }
]
const server = http.createServer((req,res)=>{
    const url = req.url
    console.log(url)
    res.setHeader("Content-type","application/json")
    if(url.startsWith("/users")){
        res.write(JSON.stringify(users))
    }else{
        res.write("user not found")
    }
    
    res.end()
})
server.listen(8080)
