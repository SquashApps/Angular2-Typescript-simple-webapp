'use strict';
var dependency = require('./../../dependency');
var _ = dependency.getLodash();

var remove = function(req, res) {
    var user = dependency.getUserModel();
    var id = req.params.id;

    user.remove({ '_id': id }, function(error) {
        if (!_.isEmpty(error)) {
            res.json(500, { message: 'Error in removing the user ', error: error });
            console.error({ message: 'Error in removing the user ', error: error });
        } else {
            res.send(200, { success: 'success' });
        }
    });
    return;
};

module.exports = {
    remove: remove
};