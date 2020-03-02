module.exports = async function get_user_by_jwt(jwt) {
  console.log("get_user_by_jwt called with: " + jwt);
  const userModel = require("../DB_schema/users.js");
  //if (!(jwt && userModel.verifyJWT(jwt))) {
  //  console.log("Invalid token!");
 // } uncommenting this code makes server fail with empty error object and console.log behaving weired
  let query = userModel.find({"accessToken" : jwt});
  //console.log(promise); This too - seems like every error in code makes this function immidiatly exit without any info?
  //userModel.verifyJWT(jwt);
  return (query);
};
