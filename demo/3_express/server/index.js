const app = require('./app');

/**********************
* start express on localhost
***********************/
var port = 8000;
var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
