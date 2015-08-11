'use strict';

module.exports = React.createClass({displayName: "exports",
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

