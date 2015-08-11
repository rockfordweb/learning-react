'use strict';

var Twit = require( 'twit' );
var creds = require( '../../credentials.js' );

var T = new Twit( creds );

module.exports = function tweetData( req, res ) {
  T.get( 'search/tweets', { q: req.params.search, count: 20 }, function( err, data ) {
    res.send( data );
  });
};
