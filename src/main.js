"use strict";

var React = require('react');
var Router= require('react-router');
var route = require('./route');

Router.run(route,Router.HistoryLocation, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
});






 

