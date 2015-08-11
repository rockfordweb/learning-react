'use strict';

module.exports = React.createClass({
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

