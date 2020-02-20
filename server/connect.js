//const dbpas = '6cTgijL5d8rg8riP';
//const uri = "mongodb+srv://user:" + dbpas + "@cluster0-18ec3.mongodb.net/smetrama?retryWrites=true&w=majority";
const dbpas = '8ukXn0fAJQPJ3ly6';
const uri ="mongodb+srv://api:" + dbpas + "@cluster0-jbsrv.mongodb.net/test?retryWrites=true&w=majority";

module.exports = function db_connect() {
  let mongoose = require('mongoose');
  let promise = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false});
  promise.catch(error => {console.log(error)});

  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
  });
};
