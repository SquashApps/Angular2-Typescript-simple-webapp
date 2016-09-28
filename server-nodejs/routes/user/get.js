'use strict';
var dependency = require('./../../dependency');
var _ = dependency.getLodash();

var get = function (req, res) {
	var userGet = dependency.getUserModel();
	var id = req.params.id;
	
	userGet.findOne({'_id': id, 'deletedDate': null}, function (error, doc) {
		if (!_.isEmpty(error)) {
			res.json(500, {message: 'Error in fetching the user ', error: error});
			console.error({message: 'Error in fetching the user ', error: error});
		} else {
			res.json(200, {user: doc});
		}
	});
	return;
};

module.exports = {
	get : get
};
