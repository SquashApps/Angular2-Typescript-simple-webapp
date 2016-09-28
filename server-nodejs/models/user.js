'use strict';
var mongoose = require('mongoose');
var User = new mongoose.Schema({
    userName: { type: String, required: true },
    displayName: { type: String, required: true },
    emailId: { type: String, required: true },
    password: { type: String, required: true },
    createdDate: { type: Date, required: false, default: Date.now },
    modifiedDate: { type: Date, required: false, default: Date.now },
    deletedDate: { type: Date, required: false, default: null },
});

User.index({ userName: 1 }, { unique: true });
module.exports = {
    User: User
};