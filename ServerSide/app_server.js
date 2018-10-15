module.exports = function (app) {
    var mongoose = require('mongoose');
    mongoose.Promise = require('q').Promise;

    require("./Services/common.service.server.js")(app);
    require("./Test/apiTest")(app);
};