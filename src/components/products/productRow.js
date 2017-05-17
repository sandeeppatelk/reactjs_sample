"use strict";

var React= require('react');

var ProductRow  = React.createClass({

  render: function()
  {
     // var itemId = this.props.product.itemId;

      return(
          <tr>
            <td>{this.props.product.itemId}</td>
            <td>{this.props.product.itemName}</td>
            <td>{this.props.product.itemCount}</td>
            <td>{this.props.product.itemCost}</td>
            <td>
                <input 
                  name = {this.props.product.itemName}
                  type = "checkbox"
                  className = "form-control"
                  
                  onChange = {this.props.onChange}
                  />
            </td>
          </tr>
      );
  }
});

module.exports= ProductRow;