'use strict';
var dependency = require('./../../dependency');
var q = dependency.getQ();
var _ = dependency.getLodash();
var list = function(req, res) {
    req.body = req.body.bodyData;
    var user = dependency.getUserModel();

    var countUsers = function() {
        var deferred = q.defer();
        user.count(function(err, count) {
            if (!_.isEmpty(err)) {
                deferred.reject({ message: 'Error in getting the count', error: err });
                console.error({ message: 'Error in getting the count', error: err });
            } else {
                deferred.resolve(count);
            }
        });
        return deferred.promise;
    };
    var getUser = function(count) {
        var deferred = q.defer();
        var skip = req.body.skip;
        var limit = req.body.limit;
        if (!skip) {
            skip = 0;
        }
        if (!limit) {
            limit = 10;
        }
        user.find()
            .limit(limit)
            .skip(skip)
            .sort({ 'createdDate': -1 })
            .exec(function(error, docs) {
                if (!_.isEmpty(error)) {
                    deferred.reject({ message: 'Error in fetching the list of users', error: error });
                    console.error({ message: 'Error in fetching the list of users', error: error });
                } else {
                    deferred.resolve({ count: count, users: docs });
                }
            });
        return deferred.promise;
    };

    countUsers()
        .then(getUser)
        .then(function(success) {
            res.json(200, success);
        })
        .fail(function(error) {
            res.json(500, error);
        })
        .done();
};
module.exports = {
    list: list
};