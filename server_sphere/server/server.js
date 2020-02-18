const express = require('express');
const server = express();

let connect = require('./connect.js');
let Parser = require('body-parser');
server.use(Parser.urlencoded({ extended: false }));
server.use(Parser.json());

server.get("/api/users", (req, res) =>
{
  // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
  // items => filtered/sorted result
  const userModel = require("./DB_schema/users.js");
  const get_users = require('./controlers/get_users.js');
  let promise = get_users();
 // console.log(promise);
  function fullfiled(result)
  {
    let i = 0;
    while (result[i])
    {
      result[i]['hash'] = undefined;
      result[i]['salt'] = undefined;
      i++;
    }
    QRModel = {"items" : result, "totalsCount" : result.length};
    res.status(200).send(QRModel);
  }
  function rejected(error)
  {
    res.status(500).send(error);
  }
  promise.then(fullfiled, rejected);
 // json_udata = userModel.find();
  //res.status(201).send(json_udata);
});

server.get("/api/permissions", (req, res) =>
{
  const permissions = [
  {
    id: 1,
    name: 'accessToECommerceModule',
    level: 1,
    title: 'eCommerce module'
  },
  {
    id: 2,
    name: 'accessToAuthModule',
    level: 1,
    title: 'Users Management module'
  },
  {
    id: 3,
    name: 'accessToMailModule',
    level: 1,
    title: 'Mail module'
  },
  {
    id: 4,
    name: 'canReadECommerceData',
    level: 2,
    parentId: 1,
    title: 'Read'
  },
  {
    id: 5,
    name: 'canEditECommerceData',
    level: 2,
    parentId: 1,
    title: 'Edit'
  },
  {
    id: 6,
    name: 'canDeleteECommerceData',
    level: 2,
    parentId: 1,
    title: 'Delete'
  },
  {
    id: 7,
    name: 'canReadAuthData',
    level: 2,
    parentId: 2,
    title: 'Read'
  },
  {
    id: 8,
    name: 'canEditAuthData',
    level: 2,
    parentId: 2,
    title: 'Edit'
  },
  {
    id: 9,
    name: 'canDeleteAuthData',
    level: 2,
    parentId: 2,
    title: 'Delete'
  },
  {
    id: 10,
    name: 'canReadMailData',
    level: 2,
    parentId: 3,
    title: 'Read'
  },
  {
    id: 11,
    name: 'canEditMailData',
    level: 2,
    parentId: 3,
    title: 'Edit'
  },
  {
    id: 12,
    name: 'canDeleteMailData',
    level: 2,
    parentId: 3,
    title: 'Delete'
  },
];
  res.status(201).send(permissions);
});

server.get("/api/roles", (req, res) =>
{
  const roles = [
  {
    id: 1,
    title: 'Administrator',
    isCoreRole: true,
    permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    id: 2,
    title: 'Manager',
    isCoreRole: false,
    permissions: [3, 4, 10]
  },
  {
    id: 3,
    title: 'Guest',
    isCoreRole: false,
    permissions: []
  }
];
  res.status(201).send(roles);
});

/*server.post("/api/users", (req, res) =>
{
  const json_udata = {
    id: 3,
    username: 'guest',
    password: 'demo',
    email: 'guest@demo.com',
    accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
    refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
    roles: [3], // Guest
    pic: './assets/media/users/default.jpg',
    fullname: 'Ginobili Maccari',
    occupation: 'CFO',
    companyName: 'Keenthemes',
    phone: '456669067892',
    address: {
      addressLine: '1467  Griffin Street',
      city: 'Phoenix',
      state: 'Arizona',
      postCode: '85012'
    },
    socialNetworks: {
      linkedIn: 'https://linkedin.com/guest',
      facebook: 'https://facebook.com/guest',
      twitter: 'https://twitter.com/guest',
      instagram: 'https://instagram.com/guest'
    }
  };
  res.status(201).send(json_udata);
});*/

/*server.get('/*', (req, res) =>
{
  console.log("Got a get request!");
  res.sendStatus(200);
});*/

server.post('/api/users/register', (req, res) => {
 // console.log('get post request on /api/users');
  const incoming = req.body;
// console.log(incoming);
  const createUser = require('./controlers/create_user.js');
  let promise = createUser(incoming);
  function fullfiled()
  {
      console.log("registration successful!");
      console.log(promise);
      res.status(201).send(promise);
  }
  function rejected()
  {
      console.log("registration rejected!");
      console.log(promise);
      res.status(403).send(promise);
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

const port = 8000;
server.listen(port, function() {
  connect();
  console.log('server listening on port ' + port);
});
