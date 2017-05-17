"use strict";

var React = require('react');
var Router =require('react-router');
var Link = Router.Link;


var	iconStyle= {
		height: 50,
		width: 50,
		padding:0
	};

var Header = React.createClass({
    render: function(){
    	return(
          /*<nav className="navbar navbar-default">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
    		   <span className="icon-bar"></span>
    		   <span className="icon-bar"></span>
 			 </button>
  	  		<div className="navbar-collapse">
 				<a href="/" className="navbar-brand">
 					<img src="images/logo.png" style={iconStyle}/>
 				</a>
 				<ul className="nav navbar-nav">
 					<li><a href="/">Home</a></li>
 					<li><a href="/#cart">Shopping Cart</a></li>
 				</ul>
 			</div>
		  </nav>
		  */
		  <nav className="navbar navbar-default">
            <div className="container-fluid">
             <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar" aria-expanded="false">
        			<span className="sr-only">Toggle navigation</span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
       
      		   </button>
      		   <Link to="home" className="navbar-brand">Buy and Get</Link>
             </div>
              <div className="collapse navbar-collapse" id="bs-navbar">
               <ul className="nav navbar-nav">
        		<li className="active"><Link to="home">Home</Link></li>
        		
            <li><Link to="app">LogOut</Link></li>
               </ul>
 			  </div>
            </div>
		  </nav>
    	);
    }
});


module.exports = Header;