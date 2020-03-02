module.exports = async function createUser(json) {
  const userModel = require("../DB_schema/users.js");
  json["accessLevel"] = 1;
  json["roles"] = [3]; //Guest
  if (!(json["password"])) {
    console.log("password required!");
    throw new Error("password required!");
  }
  let newUser = new userModel(json);
  newUser.setPassword(json["password"]);
  newUser.generateJwt();
  let promise = newUser.save();
  return (promise);
};
