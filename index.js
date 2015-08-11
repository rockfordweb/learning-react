/**
 * Taken from the React tutorial for a basic file server
 * https://github.com/reactjs/react-tutorial/blob/master/server.js
 */

'use strict';

var path = require( 'path' );
var express = require( 'express' );

var tweetData = require( './demos/data/tweet.js' );

var app = express();

var folders = ['basics', 'jsx', 'data', 'tooling', 'router'];

app.set( 'port', ( process.env.PORT || 8000 ));

app.use( '/', express.static( __dirname ));

folders.forEach( function( folder ) {
  app.use( '/' + folder, express.static( path.join( __dirname, 'demos/' + folder )));
});

app.get( '/tweetData/:search', tweetData );

app.listen( app.get( 'port' ), function() {
  console.log( 'Server started at http://localhost:' + app.get( 'port' ) + '/' );
});
