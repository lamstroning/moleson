module.exports = async function getUsers(json = null) {
  const userModel = require("../DB_schema/users.js");
  const user_projection = "-hash -salt -accessToken -refreshToken";
  let promise = userModel.find(json, user_projection);
  return (promise);
};
