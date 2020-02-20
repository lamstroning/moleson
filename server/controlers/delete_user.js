module.exports = function delete_user(json) {
    const userModel = require("../DB_schema/users.js");
    userModel.findOneAndDelete(json, function (err, res) {
        if (err)
            console.log(err.message);
        else if (res)
            console.log("Deleted!");
    });
};