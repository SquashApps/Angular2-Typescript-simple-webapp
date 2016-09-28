'use strict';
var dependency = require('./../../dependency');
var _ = dependency.getLodash();

var add = function(req, res) {
    req.body = req.body.bodyData;
    var userName = req.body.userName;
    var displayName = req.body.displayName;
    var emailId = req.body.emailId;
    var password = req.body.password;
    if (!userName || !displayName || !emailId || !password) {
        res.send(400);
        return;
    }
    var newUser = dependency.getNewUserModel();
    newUser.userName = userName;
    newUser.displayName = displayName;
    newUser.emailId = emailId;
    newUser.password = password;
    newUser.createdDate = Date.now();
    newUser.modifiedDate = Date.now();
    newUser.save(function(error) {
        if (!_.isEmpty(error)) {
            res.json(500, { message: 'Error in adding the user', 'error': error });
            console.error({ message: 'Error in adding the user', 'error': error });
        } else {
            res.send(200, { success: 'Success' });
        }
        return;
    });
};

module.exports = {
    add: add
};