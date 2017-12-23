$(document).ready(function(){
	var count1=0,count2=0,count3=0,count4=0;
	
	
	$("#value5").blur(function(){


		var count=0;
		var value5=parseInt($("#value5").val());
		var start=setInterval(function(){
			
		   $("#value1").focusout(function(event) {
		    	count1=1;
		   });

		   $("#value2").focusout(function(event) {
		    	count2=1;
		   });

		   $("#value3").focusout(function(event) {		    
		     	count3=1;
		   });

		   $("#value4").focusout(function(event) {
		    	count4=1;
		   });

		  count=count1+count2+count3+count4;
		  if(count==3){
		   if(count4==0){

		    var value1=parseInt($("#value1").val());
			var value2=parseInt($("#value2").val());
			var value3=parseInt($("#value3").val());
			var total=parseInt(value5-(value1+value2+value3));
			$("#value4").val(total);
		    }

		    else if(count3==0){

		    var value1=parseInt($("#value1").val());
			var value2=parseInt($("#value2").val());
			var value4=parseInt($("#value4").val());
			var total=parseInt(value5-(value1+value2+value4));
			$("#value3").val(total);
		    }

		     if(count2==0){

		    var value1=parseInt($("#value1").val());
			var value4=parseInt($("#value4").val());
			var value3=parseInt($("#value3").val());
			var total=parseInt(value5-(value1+value4+value3));
			$("#value2").val(total);
		    }

		     if(count1==0 ){

		    var value4=parseInt($("#value4").val());
			var value2=parseInt($("#value2").val());
			var value3=parseInt($("#value3").val());
			var total=parseInt(value5-(value4+value2+value3));
			$("#value1").val(total);
		    }
		  } 
		  
		},100);
	});
});