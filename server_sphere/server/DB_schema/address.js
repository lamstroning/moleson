let mongoose = require('mongoose');
let addressSchema = new mongoose.Schema({
	addressLine: String,
	city: String,
	state: String,
	postCode: String,
});
module.exports = mongoose.model('Address', addressSchema);