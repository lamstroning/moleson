let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');
let addressSchema = require('./address');
let snSchema = require('./socialNetworks');
/*
export class User extends BaseModel {
    id: number;
    username: string;
    password: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    roles: number[];
    pic: string;
    fullname: string;
    occupation: string;
    companyName: string;
    phone: string;
    address: Address;
    socialNetworks: SocialNetworks;
    */
let userSchema = new mongoose.Schema({
  id : {
    type: Number,
    unique: true,
   // required: true
  },
  username : {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  roles: [Number],
  pic: String,
  fullname: {
    type: String,
    //required: true,
    trim: true
  },
  occupation: String,
  companyName: String,
  phone: {
    type: String,
    //required: true,
    trim: true
  },
  accessLevel: {
    type: Number,
    //required: true,
  },
  //address : addressSchema,
  //socialNetworks: snSchema, typeError: Invalid schema configuration: 'Model' is not a valid type at path 'address'
  //accessToken: String,
  refreshToken: String,
  hash: String, //this is password hashed by sha512
  salt: String
});

userSchema.plugin(uniqueValidator);

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt,
    1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  let hash = crypto.pbkdf2Sync(password, this.salt,
    1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7); //token will expire in 7 days

  return jwt.sign({
    _id: this.id,
    email: this.email,
    name: this.name,
    accessLevel: this.accessLevel,
    exp: expiry.getTime() / 1000, //This acts weired
  }, 'SecretString_18_02_2020_for_sph_dev_server'); //string thisIsSecret in production should be replaced with getting secret from .env
};

module.exports = mongoose.model('User', userSchema, "users");//?
