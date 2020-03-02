module.exports = async function updateUser(json) {
  const userModel = require("../DB_schema/users.js");
  let lookFor = {"email" : json['email']};
  //TODO check user permission and that data matches request
  let newData = json; //need a sanity check here
  let userData = userModel.findOneAndUpdate(lookFor, newData);
  //et newUser = new userModel(json);
  //newUser.setPassword(json["password"]);
  let promise = userData.save();
  return (promise);
};
