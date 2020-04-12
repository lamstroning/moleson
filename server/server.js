const express = require('express');
const server = express();

let connect = require('./connect.js');
let Parser = require('body-parser');
server.use(Parser.urlencoded({ extended: false }));
server.use(Parser.json());

server.get("/api/users/byJWT", (req, res) =>
{
  const get_user = require('./controlers/get_user_by_jwt.js');
  if (req.headers['authorization'] === undefined) {
    res.status(401).send('Header is undefined!');
    return;
  }
  let token = (req.headers['authorization'].split(' '))[1];
  let promise = get_user(token);
  function fullfiled(result) {
    res.status(200).send(result[0]); //result is a query object, result[0] - json user info
  }
  function rejected(error) {
    console.log('/api/users/byJWT rejected: ' + error);
    res.status(500).send(error);
  }
  promise.then(fullfiled, rejected);
});

server.get("/api/users", (req, res) =>
{
  // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
  // items => filtered/sorted result
  const userModel = require("./DB_schema/users.js");
  const get_users = require('./controlers/get_users.js');
  //TODO add permission check
  let promise = get_users();
  function fullfiled(result)
  {
    let QRModel = {"items" : result, "totalsCount" : result.length};
    res.status(200).send(QRModel);
  }
  function rejected(error)
  {
    res.status(500).send(error);
  }
  promise.then(fullfiled, rejected);
});

server.get("/api/permissions", (req, res) => {
  const fp = require("./config/permissions_fake");
  res.status(201).send(fp.permissions);
});

server.get("/api/roles", (req, res) => {
  const fp = require("./config/permissions_fake");
  res.status(201).send(fp.roles);
});

server.post('/api/users/register', (req, res) => {
  const incoming = req.body;
  const createUser = require('./controlers/create_user.js');
  let promise = createUser(incoming);
  function fullfiled(result)
  {
      console.log("registration successful!");
      console.log(promise);
      res.status(201).send(result);
  }
  function rejected(error)
  {
      console.log("registration rejected!");
      console.log(promise);
      res.status(403).send(error);
  }
  promise.then(fullfiled, rejected);
});

server.post('/api/users/login', (req, res) => {
  const data = req.body;
  console.log("login attempt: " + data["email"]);
  const login = require("./controlers/login.js");
  login(data, res);
});

server.delete('/db/deleteUser', (req, res) => {
  const data = req.body;
  const deleteUser = require('./controlers/delete_user.js');
  deleteUser(data);
  res.sendStatus(200);
});

const port = process.env.PORT || 8000;
server.listen(port, function() {
  connect();
  console.log('server listening on port ' + port);
});
