module.exports = async function updateUser(json) {
  const userModel = require("../DB_schema/users.js");
  let query = {"email" : json['email']};
  let userData = userModel.find(query);
  //et newUser = new userModel(json);
  //newUser.setPassword(json["password"]);
  let promise = userData.save();
  return (promise);
};
