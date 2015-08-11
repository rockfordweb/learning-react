'use strict';

module.exports = React.createClass({
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
      <div>
        <TweetForm onClick={this.getMoreTweets} />
        <Tweets data={this.state.tweets} />
      </div>
    );
  }
});

