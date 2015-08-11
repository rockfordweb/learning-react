'use strict';

var container = document.getElementById( 'tweets' );

var TweetForm = React.createClass({displayName: "TweetForm",
  handleClick: function() {
    var query = React.findDOMNode( this.refs.query ).value.trim();

    this.props.onClick( query );
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("label", {for: "query"}, "Search Twitter for something... anything!"), 
        React.createElement("input", {id: "query", name: "query", type: "text", ref: "query"}), 
        React.createElement("button", {onClick: this.handleClick, id: "submitQuery"}, "Search")
      )
    );
  }
});

var Tweets = React.createClass({displayName: "Tweets",
  render: function() {
    if ( !Object.keys( this.props.data ).length ) {
      return (React.createElement("br", null));
    }

    var tweets = this.props.data.map( function( tweet ) {
      return (
        React.createElement("div", {className: "tweet"}, 
          React.createElement("p", null, tweet.text), 
          React.createElement("strong", null, "@", tweet.user.screen_name)
        )
      );
    });

    return (
      React.createElement("div", {className: "tweets"}, 
        tweets
      )
    );
  }
});

var TweetApp = React.createClass({displayName: "TweetApp",
  getInitialState: function() {
    return {tweets: []};
  },
  processTweets: function( data ) {
  console.log( data, typeof data );
    var allTweets = React.addons.update( this.state.tweets, {$merge: data.statuses});

    this.setState({tweets: allTweets});
  },
  getMoreTweets: function( query ) {
    $.ajax({
      url: '/tweetData/' + query
    }).then( this.processTweets );
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(TweetForm, {onClick: this.getMoreTweets}), 
        React.createElement(Tweets, {data: this.state.tweets})
      )
    );
  }
});

React.render( React.createElement(TweetApp, null), container );

