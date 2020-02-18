let mongoose = require('mongoose');
let snSchema = new mongoose.Schema({
	linkedIn: String,
	facebook: String,
	twitter: String,
	instagram: String,
});
module.exports = mongoose.model('SocialNetworks', snSchema);