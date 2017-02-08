var generateJWT = function(opts, callback) {
	var jwt = require('jsonwebtoken');
	var secret = opts.secret;
	var payload = opts.payload;

	var token = jwt.sign(payload, secret);

	return callback(null, token);

}


module.exports = {
	generateJWT : generateJWT
}