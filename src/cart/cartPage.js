"use strict"

var React = require('react');
var Header = require('../comman/header');
var home = require('../components/homePage');
var CartRow  = require('./CartRow');
var Router =require('react-router');


var Cart = React.createClass({
	
	mixins: [
			Router.Navigation
	],

	getInitialState: function(){
		console.log(this.props.query);
		var total = 0;
		return{
			flag  : 0,
   		   cartItems : this.props.query
		};
		
	},

	statics: {
    willTransitionFrom: function (transition, component) {
      if(component.state.flag == 0 && transition.path == '/thankYou?items[itemIndex][one][itemId]=101&items[itemIndex][one][itemName]=CDs&items[itemIndex][one][itemCount]=5&items[itemIndex][one][itemCost]=20&items[itemIndex][one][itemSelected]=0&items[itemIndex][second][itemId]=105&items[itemIndex][second][itemName]=Books&items[itemIndex][second][itemCount]=10&items[itemIndex][second][itemCost]=40&items[itemIndex][second][itemSelected]=0'){
        
        confirm("Please Add something into cart...");
        transition.abort();

      }
     }
	},

	onClickBuy : function(){
		this.transitionTo('thankYou',null,this.state.cartItems);
	},

    render: function(){

    	let  varPath = this.state.cartItems.items.itemIndex;
      var rows = [];
      var rowsNo = [];
      var total = 0;
      console.log(this.state.cartItems.items.itemIndex.one.itemSelected);
      if(this.state.cartItems.items.itemIndex.one.itemSelected == 1)
      {
      	 rowsNo.push(this.state.cartItems.items.itemIndex.one);
      }
      if(this.state.cartItems.items.itemIndex.second.itemSelected == 1)
      {
      	 rowsNo.push(this.state.cartItems.items.itemIndex.second);
      }
      //var rowsNo = [this.props.cartItems.items.itemIndex.one,this.props.cartItems.items.itemIndex.second];
      var product;
      var style = {
        marginTop :30,
        marginBottom : 30 
      };
     for(let i= 0 ; i<2 ; i++)
     {  
            
        //no = "one";
        product  =  rowsNo[i];
        if(product == undefined){break;}
        total = total + Number(product.itemCost);
        this.state.flag = 1;
        rows.push(<CartRow product={product} key={product.itemId} />);
     }
    	return(
    		<div>
    		 	<Header />
             	<div>
               		<h1> Your Cart is Ready Bhulaku !!!</h1>
               		
               		 <table className='table'>
                      <thread>
 						           <tr>
 							          <th> Product Id</th>
 							          <th> Product Name</th>
 							          <th> Prize</th>
 						           </tr>
                      </thread>
                      <tbody>
                        {rows}
                      </tbody>
                      
                 </table>
					
				 <table className = 'table'>
				 	<thread>
				 	   <tr>
				 	   	<th>Total Amount</th>
				 	   	<th> = </th>
				 	   	<th>{total}</th>
				 	   </tr>
				 	</thread>
				 </table>

				 <table className = 'table'>
				 	<thread>
				 	   <tr>
				 	   	<th> <input type="button" 
                             style= {style} 
                             value="Buy it now" 
                             className="btn btn-default"
                              onClick= {this.onClickBuy}/></th>
				 	   </tr>
				 	</thread>
				 </table>


             	</div>
             </div>
               
    		);
    }
});

module.exports=  Cart;