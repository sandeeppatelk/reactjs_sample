var React = require('react');
var Router =require('react-router');
var Link = Router.Link;


var Login = React.createClass({

	getInitialState: function(){
		return{
   			username: '',
   			password: '',
   			pathname: '/',
   			authCheck: false,
   			checked: null
		};
		
	},

	statics: {
    willTransitionFrom: function (transition, component) {
      if(component.state.authCheck === false){
        
        confirm("Enter correct User Credential pleases !!!");
        transition.abort();

      }
    }
  },

	
  
    handleInputChange: function(e)
    {
    	this.setState(prevState =>({
    			checked: null
    	}));
    	var target = e.target;
    	var value = target.value; 
    	var name = target.name;
 		/*
 		this.setState({
 		  	e.target.name : e.target.value
    	
    	});*/
 		var partialState = {};
 		partialState[name] =value;
    	this.setState(partialState);
    

    	
    },

     componentDidMount : function() {

    if(this.state.username === 'bhulaku' && this.state.password==='dasnadas')
         {
         	this.setState({
 				
 				authCheck: true
 				
         	});
         }
        
         else
         {
         	this.setState({
         	  	
         	  	authCheck: false
         	});
         }
  },

    handleSubmit: function(){
    	
         if(this.state.username === 'bhulaku' && this.state.password==='dasnadas')
         {
         	this.setState({
 				pathname: '/home',
 				authCheck: true
         	});
         }
         
         else
         {
         	this.setState({
         	  	pathname: '/',
         	  	authCheck: true
         	});
         }
     
    },


     
     render: function()
      {
      	return(
      		<div className="row">
      			<div className="col-md-4 col-md-offset-4">
      				 <form id="login" >
                        
                        <input 
                        	   type="text"
                        	   name="username" 
                        	   placeholder="username"
                        	   value={this.state.username}
                        	   onChange={this.handleInputChange} />{this.state.username}
                        <br/>
                        <input  
                        	   type="password"
                        	   name="password" 
                        	   placeholder="password"
                        	   value={this.state.password}
                        	   onChange={this.handleInputChange} />{this.state.password}
                        <br/>
                        <div className="wrapper">
                            <span className="group-btn">
                            	Agree : <input
            						name="agree"
            						type="checkbox"
            						checked={this.state.checked}
            						onChange={this.handleSubmit} />
                               <Link to ={this.state.pathname} className="btn btn-primary btn-md"  >Login
                                    
                                </Link>
                            </span>
                        </div>
                    </form>
      			</div>
      		</div>
        );
      }

});

module.exports=Login;