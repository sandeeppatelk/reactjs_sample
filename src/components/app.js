/*eslint-disable strict */

$ = jQuery = require('jquery');
var React=require('react');

var RouteHandler= require('react-router').RouteHandler;

var App= React.createClass({
    render: function(){

    return(
           <div> 
               
               <div className="container-fluid">
               <RouteHandler/>
               </div>
           </div>
    	);
    }
}); 

module.exports= App; 

