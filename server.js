
/**
 * Module dependencies.
 * 
 * Routs
 *  Views
 * 		index
 * 	API
 * 		tracker
 * 		-locations
 * 		-location
 * 
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	return next();
  });
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use('/assets',express.static(path.join(__dirname, 'public')));
});

require('./db');

var controllers = require('./controllers')
  , tracker = require('./controllers/tracker')

app.configure('development', function(){
  app.use(express.errorHandler());
});


 
//Routs
//===============================

//index
app.get('/', controllers.index);

//API
//-------------------------------

//Tracker
app.get('/api/tracker/locations', tracker.locations);
app.get('/api/tracker/:id/location', tracker.locationOf);
app.get('/api/tracker/locations/initial', tracker.initialLocations);
app.get('/api/tracker/', tracker.index);

app.get('/api/tracker/create',controllers.create)
app.post('/api/tracker/create',tracker.create)

app.get('/api/tracker/:id', tracker.get);
app.post('/api/tracker/:id/update', tracker.update);
app.get('/api/tracker/:id/delete', tracker.delete);

//TrackerLocation
app.get('/api/tracker/location/data', tracker.listLocationData);
app.post('/api/tracker/location/data', tracker.addLocationData);




//Start server

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
