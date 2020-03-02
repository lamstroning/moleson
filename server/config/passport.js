let passport = require('passport');
let localStrategy = require('passport-local').Strategy;
let mongose = require('mongoose');
let user = mongose.model('User');

/*passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (username, password, done) {
    User.findOne({email: username }, function (err, user) {
        if (err)

    })
    }*/
