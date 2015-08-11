'use strict';

module.exports = React.createClass({displayName: "exports",
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

