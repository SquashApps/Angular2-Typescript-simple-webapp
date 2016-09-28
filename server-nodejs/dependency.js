'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

var getLodash = function() {
    return require('lodash');
};

var getUserModel = function() {
    return mongoose.model('User');
};

var getNewUserModel = function() {
    return new getUserModel()();
};

var getQ = function() {
    return require('q');
};

module.exports = {
    getLodash: getLodash,
    getQ: getQ,
    getNewUserModel: getNewUserModel,
    getUserModel: getUserModel
};