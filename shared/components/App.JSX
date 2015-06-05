/** @jsx React.DOM */
"use strict";

var React = require('react');

module.exports = React.createClass({

	// Set the initial component state
	getInitialState: function(props){

		props = props || this.props;

		// Set initial application state using props
		return {
			models: props.models,
			count: 0,
			page: 0,
			paging: false,
			skip: 0,
			done: false
		};
	  },

	componentWillReceiveProps: function(newProps, oldProps){
		this.setState(this.getInitialState(newProps));
	},

	componentDidMount: function() {
		console.log('mounted');
	},

	// Render the component
	render: function(){
		return (
			<div className="main-app">
				new app
			</div>
		)
	}
});