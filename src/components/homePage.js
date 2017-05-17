"use strict";

var React = require('react');
var ProductPage = require('./products/productPage');
var Header = require('../comman/header');
var Router =require('react-router');
var Login = require('./login/loginPage');
var Cart = require ('../cart/cartPage');
var jsonfile = require('jsonfile');
var fs = require('browserify-fs');
var stringify = require('json-stable-stringify');	


var Home =React.createClass({

	mixins: [
			Router.Navigation
	],

	
    	
    getInitialState: function(){
		return{
   			cartItems : {items : {itemIndex :{
   											  one: {	
   													itemId  : 101,
   													itemName	: "CDs", 
   													itemCount : 5,
   													itemCost : 20,
   													itemSelected : 0
   												 },
   										 	  second: {	
   										 	  		itemId  : 105,
   										 			itemName	: "Books",
   										 			itemCount : 10,
   										 			itemCost : 40,
   										 			itemSelected : 0
   										 		 }
   									   }
   							   	 }
   						}
		};
		
	},

	/*statics: {
    willTransitionFrom: function (transition, component) {
      console.log("it is working json");
    	var file  = '../data.json';
    	var obj1= {abc : "abc"};
    	var obj = stringify(obj1);

    	fs.writeFile('./Abc.json', "hhjhjjh", "utf-8", function(err){
    		if(err)
    		{	
    			console.log("error");
    		}
    		else
    		{
    			console.log("saved it");
    		}
    	});

      }
    },*/

	handleCheckingChange : function(event){
console.log("this is working");
	var selectedItemName = event.target.name;
	//console.log(selectedItemName);
	//var cdCountPath  = cartItems.items.itemIndex.one.itemCount;
	//var bookCountPath = cartItems.items.itemIndex.second.itemCount;
		if(selectedItemName === "CDs")
		{
			if(event.target.checked)
			   {
					this.setState(function(prevState){
						return{
						cartItems : {items : {itemIndex :{
   											  one: {	
   													itemId  : 101,
   													itemName	: "CDs", 
   													itemCount : prevState.cartItems.items.itemIndex.one.itemCount -1,
   													itemCost : 20,
   													itemSelected : prevState.cartItems.items.itemIndex.one.itemSelected +1
   												 },
   										 	  second: {	
   										 	  		itemId  : 105,
   										 			itemName	: "Books",
   										 			itemCount : prevState.cartItems.items.itemIndex.second.itemCount,
   										 			itemCost : 40,
   										 			itemSelected : prevState.cartItems.items.itemIndex.second.itemSelected
   										 		 }
   									   }
   							   	 }
   						}
    				  };	
    				});
			   }
			else
			   {
					this.setState(function(prevState){
					 return{	
						cartItems : {items : {itemIndex :{
   											  one: {	
   													itemId  : 101,
   													itemName	: "CDs", 
   													itemCount : prevState.cartItems.items.itemIndex.one.itemCount + 1 ,
   													itemCost : 20,
   													itemSelected  : prevState.cartItems.items.itemIndex.one.itemSelected -1
   												 },
   										 	  second: {	
   										 	  		itemId  : 105,
   										 			itemName	: "Books",
   										 			itemCount : prevState.cartItems.items.itemIndex.second.itemCount,
   										 			itemCost : 40,
   										 			itemSelected : prevState.cartItems.items.itemIndex.second.itemSelected
   										 		 }
   									   }
   							   	 }
   						}
    				  };	
    				});
			   }
		}	

	else if(selectedItemName === "Books")
		{
			if(event.target.checked)
			   {
					this.setState(function(prevState){
					 return{	
						cartItems : {items : {itemIndex :{
   											  one: {	
   													itemId  : 101,
   													itemName	: "CDs", 
   													itemCount : prevState.cartItems.items.itemIndex.one.itemCount,
   													itemCost : 20,
   													itemSelected :  prevState.cartItems.items.itemIndex.one.itemSelected 
   												 },
   										 	  second: {	
   										 	  		itemId  : 105,
   										 			itemName	: "Books",
   										 			itemCount : prevState.cartItems.items.itemIndex.second.itemCount - 1,
   										 			itemCost : 40,
   										 			itemSelected : prevState.cartItems.items.itemIndex.second.itemSelected + 1
   										 		 }
   									   }
   							   	 }
   						}
    				  };	
    				});
			   }
			else
			   {
					this.setState(function(prevState){
					 return{	
						cartItems : {items : {itemIndex :{
   											  one: {	
   													itemId  : 101,
   													itemName	: "CDs", 
   													itemCount : prevState.cartItems.items.itemIndex.one.itemCount,
   													itemCost : 20,
   													itemSelected :  prevState.cartItems.items.itemIndex.one.itemSelected 
   												 },
   										 	  second: {	
   										 	  		itemId  : 105,
   										 			itemName	: "Books",
   										 			itemCount : prevState.cartItems.items.itemIndex.second.itemCount  + 1,
   										 			itemCost : 40,
   										 			itemSelected : prevState.cartItems.items.itemIndex.second.itemSelected - 1
   										 		 }
   									   }
   							   	 }
   						}
    				  };	
    				});
			   }
		}
	},

	handleAddToCart : function(event){
		event.preventDefault();
			console.log("this is working for button");
			console.log(this.state.cartItems.items.itemIndex.second.itemSelected);
			this.transitionTo('cart',null,this.state.cartItems);
	
	},


    render: function(){
    	return(
    		<div> 
    		  <Header />
              	<div className="jumbotron">
              		<h1>Buy products</h1>

              		<ProductPage cartItems={this.state.cartItems}  onChange = {this.handleCheckingChange} onClickCart={this.handleAddToCart} /> 
              	</div>
            </div>
    	)
    }
});

/*
class Home extends React.Component{
  
  render()
  {

  	return(
      
        <div className="jumbotron">
              <h1>THis is first project...</h1>
        </div>
    );
  }
}
*/
module.exports= Home;