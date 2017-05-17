"use strict"

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute= Router.NotFoundRoute;
var Redirect = Router.Redirect;
var IndexRouter = require('react-router').IndexRouter;

var route= (

	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/login/loginPage')} />
		<Route name="home" handler={require('./components/homePage')} />
		<Route name="cart" handler={require('./cart/cartPage')} />
	    <Route name="thankYou" handler={require('./components/thankYou')} />
	    <NotFoundRoute handler={require('./components/notFoundPage')} /> 
	    <Redirect from="cart-item" to="cart" />
	</Route>

);

module.exports=route;



