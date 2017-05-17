"use strict";

var React= require('react');

var ProductRow  = require('./ProductRow');

var ProductPage = React.createClass({

   

    render: function()
    {
      let  varPath = this.props.cartItems.items.itemIndex;
      var rows = [];
      var rowsNo = [this.props.cartItems.items.itemIndex.one,this.props.cartItems.items.itemIndex.second];
      var product;
      var style = {
        marginTop :30,
        marginBottom : 30 
      };
     for(let i= 0 ; i<2 ; i++)
     {  
            
        //no = "one";
        product  =  rowsNo[i];

        rows.push(<ProductRow product={product} key={product.itemId}  onChange={this.props.onChange}/>);
     }
     
      return (
             <div> 
                 <table className='table'>
                  <form>
                      <thread>
 						           <tr>
 							          <th> Product Id</th>
 							          <th> Product Name</th>
 							          <th> Available number</th>
 							          <th> Prize</th>
 							          <th> Add to Cart </th>
 						           </tr>
                      </thread>
                      <tbody>
                        {rows}
                      </tbody>
                      <input type="button" 
                             style= {style} 
                             value="Add to Cart" 
                             className="btn btn-default"
                              onClick= {this.props.onClickCart}/>
                    </form>
                 </table>
             </div>
      	);
    }
});

module.exports= ProductPage;

