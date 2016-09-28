'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var port = 9000;


/*
 * Mongoose configuration
 */
var mongoose = require('mongoose');
var mongoServer = 'mongodb://localhost:27017/angular2Test';
mongoose.connect(mongoServer);


/*
 *Import mongo schema
 */
mongoose.model('User', require('./models/user').User);

/*
 * Use Handlebars for templating
 */

var exphbs = require('express3-handlebars');

// For gzip compression
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

/*
 *ALLOW CROSS DOMAIN
 */
var allowedDomains = '*';
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', allowedDomains);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);

/*
 *Routes importing
 */

var User = {
    'add': require('./routes/user/add').add,
    'edit': require('./routes/user/edit').edit,
    'get': require('./routes/user/get').get,
    'list': require('./routes/user/list').list,
    'remove': require('./routes/user/remove').remove,
};

/*
 * Config for Production and Development
 */
if (process.env.NODE_ENV === 'production') {
    // Set the default layout and locate layouts and partials
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: 'dist/views/layouts/',
        partialsDir: 'dist/views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/dist/views');

    // Locate the assets
    app.use(express.static(__dirname + '/dist/assets'));

} else {
    app.engine('handlebars', exphbs({
        // Default Layout and locate layouts and partials
        defaultLayout: 'main',
        layoutsDir: 'views/layouts/',
        partialsDir: 'views/partials/'
    }));

    // Locate the views
    app.set('views', __dirname + '/views');

    // Locate the assets
    app.use(express.static(__dirname + '/assets'));
}

// Set Handlebars
app.set('view engine', 'handlebars');

// Index Page
app.get('/', function(request, response) {
    response.render('index');
});

/*
 * Routes
 */
// Index Page
app.get('/', function(request, response) {
    response.render('index');
});
app.post('/user/list', User.list);
app.post('/user/add', User.add);
app.post('/user/:id', User.get);
app.post('/user/:id/edit', User.edit);
app.post('/user/:id/remove', User.remove);

/*
 * Start it up
 */
app.listen(process.env.PORT || port);
console.log('Mongo on ' + mongoServer);
console.log('Express started on port ' + port);

module.exports = app;