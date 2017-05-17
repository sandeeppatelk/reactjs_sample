"use strict";

var React= require('react');

var CartRow  = React.createClass({

  render: function()
  {
     // var itemId = this.props.product.itemId;

      return(
          <tr>
            <td>{this.props.product.itemId}</td>
            <td>{this.props.product.itemName}</td>
            <td>{this.props.product.itemCost}</td>
            
          </tr>
      );
  }
});

module.exports= CartRow;