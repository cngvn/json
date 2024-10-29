const http = require("http");
const fs = require("fs");

// const users = [
//   { id: '1', name: "cngvn", age: 20 },
//   { id: '2', name: "cnzo", age: 30 },
//   { id: '3', name: "asdf", age: 50 },
// ];

let data;
const jsondata = fs.readFileSync("data.json");
data = JSON.parse(jsondata);

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-type", "application/json");

  if (method === "GET") {
    if (url.startsWith("/users?id=")) {
      const id = url.split("=")[1];
      const user = data.find((user) => user.id === id);
      if (user) {
        res.write(JSON.stringify(user));
      } else {
        res.write(JSON.stringify({ message: "user not found" }));
      }
    } else {
      res.write(JSON.stringify(data));
    }
    res.end();
  } 

  if (method === "POST") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      const parseData = JSON.parse(body);
      const newUser = {
        id: (data.length + 1),
        ...parseData
      };
      data.push(newUser);
      res.write(JSON.stringify({ message: "User added", user: newUser }));
      res.end();
    });
  }

  if (method === "DELETE") {
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  }
});
server.listen(8080, () => console.log("Server is running"));
