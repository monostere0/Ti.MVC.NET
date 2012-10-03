function Index() {
	var txtName =  UI.Element('input')
		    	     .attr({  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 						      color: '#336699',
  					 	      top: 60, 
  					 	      left: 10,
  					 	      width: 300, 
  					 	      height: 40}).get();
  	var txtEmail = UI.Element('input')
 		    	     .attr({  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 						      color: '#336699',
  					 	      top: 10, 
  					 	      left: 10,
  					 	      width: 300, 
  					 	      height: 40}).get();
  	var btnSubmit = UI.Element('button')
  	 				  .attr({ borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 						      color: '#336699',
  					 	      top: 110, 
  					 	      left: 10,
  					 	      width: 300,
  					 	      title: 'Submit', 
  					 	      height: 40  	 				  	
  	 				  }).on('click', function() {
  	 				  	 MVC.Invoke('Home', 'About', txtName.value, txtEmail.value);
  	 				  })
  	 				  .get();				 	      
  	var imgBkg =  UI.Element('image')
				  	  .attr({
					  	  width: 320,
					  	  height: 480,
						  backgroundColor: '#eeeeee',
					  	  preventDefaultImage: true
				  	  }).get();
	
	
	UI.Element('window')
	  .attr({
	  	title: 'hello',
	  	backgroundColor: '#fff'
	  })
	  .append([imgBkg, txtName, txtEmail, btnSubmit])
	  .get().open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	  
}
module.exports = Index;