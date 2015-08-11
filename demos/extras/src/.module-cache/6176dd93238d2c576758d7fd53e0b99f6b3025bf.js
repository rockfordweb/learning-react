'use strict';

module.exports = React.createClass({displayName: "exports",
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

