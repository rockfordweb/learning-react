'use strict';

var container = document.getElementById( 'tweets' );

var TweetForm = require( './TweetForm.js' );

var Tweets = require( './Tweets.js' );

var TweetApp = require( './TweetApp.js' );

React.render( <TweetApp />, container );

