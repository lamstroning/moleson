module.exports = async function getUsers(json = null) {
  const userModel = require("../DB_schema/users.js");
  let promise = userModel.find(json);
  return (promise);
};
