'use strict';

var container = document.getElementById( 'tweets' );

var TweetForm = React.createClass({
  handleClick: function() {
    var query = React.findDOMNode( this.refs.query ).value.trim();

    this.props.onClick( query );
  },
  render: function() {
    return (
      <div>
        <label for="query">Search Twitter for something... anything!</label>
        <input id="query" name="query" type="text" ref="query" />
        <button onClick={this.handleClick} id="submitQuery">Search</button>
      </div>
    );
  }
});

var Tweets = React.createClass({
  render: function() {
    if ( !Object.keys( this.props.data ).length ) {
      return (<br />);
    }

    var tweets = this.props.data.map( function( tweet ) {
      return (
        <div className="tweet">
          <p>{tweet.text}</p>
          <strong>@{tweet.user.screen_name}</strong>
        </div>
      );
    });

    return (
      <div className="tweets">
        {tweets}
      </div>
    );
  }
});

var TweetApp = React.createClass({
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

React.render( <TweetApp />, container );

