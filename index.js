const http = require("http");
const users = [
  {
    id: '1',
    name: "cngvn",
    age: 20,
  },
  {
    id: '2',
    name: "cnzo",
    age: 30,
  },
  {
    id: '3',
    name: "asdf",
    age: 50,
  },
];
const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-type", "application/json");
  if (url.startsWith("/users?id=")) {
    const id =  url.split("=")[1]
    console.log({id})
    const user =  users.filter((user)=>user.id===id)
    if(user){
        res.write(JSON.stringify(user));
    } else {
    res.write (JSON.stringify({message:"user not found"}));
  }
}else{
    res.write(JSON.stringify(users))
     
}

  res.end();
});
server.listen(8080, console.log("server is runnig"));