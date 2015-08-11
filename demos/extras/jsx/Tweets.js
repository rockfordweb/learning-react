'use strict';

module.exports = React.createClass({
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

