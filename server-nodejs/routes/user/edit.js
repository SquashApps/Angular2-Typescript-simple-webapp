'use strict';
var dependency = require('./../../dependency');
var _ = dependency.getLodash();
var edit = function(req, res) {

    var id = req.params.id;
    var updateCriteria = req.body.bodyData;

    if (_.isEmpty(updateCriteria) || _.isEmpty(id)) {
        res.send(400);
        return;
    }
    var updateUser = {};

    function update(updateCriteria, updateUser) {
        if (updateCriteria.userName) { updateUser.userName = updateCriteria.userName; }
        if (updateCriteria.displayName) { updateUser.displayName = updateCriteria.displayName; }
        if (updateCriteria.emailId) { updateUser.emailId = updateCriteria.emailId; }
        if (updateCriteria.password) { updateUser.password = updateCriteria.password; }
        updateUser.modifiedDate = Date.now();
        return updateUser;
    }

    dependency.getUserModel().findOneAndUpdate({ '_id': id }, update(updateCriteria, updateUser), { new: true }, function(error, doc) {
        if (!_.isEmpty(error)) {
            res.json(500, { message: 'Error in updating the user' });
            console.error({ message: 'Error in updating the user' });
        } else {
            res.json(200, { updated: doc });
        }
    });
    return;

};
module.exports = {
    edit: edit
};