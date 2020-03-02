let sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports = function login(json, response) {
    const userModel = require("../DB_schema/users.js");
    let pswd = json["password"];
    if (!pswd)
    {
        sendJSONresponse(response, 400, "Password required!");
        return;
    }
    delete json["password"];
    userModel.findOne(json, function (err, res) {
        if (err) {
            console.log(err.message);
        }
        else if (res)
        {
            console.log("Found!");
            if (res.validPassword(pswd))
                sendJSONresponse(response, 200, res);
            else
                sendJSONresponse(response, 403, "Invalid password!");
        }
        else
            sendJSONresponse(response, 404, "User not found!");
    });
};
