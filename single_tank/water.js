$(document).ready(
	function(){
	var bgtank=$('#bgtank');
	var tap2=$('#tap2');
	var pause=false;
	$("#tappress").click(function(){
		var start=setInterval(function(){
			if(!pause){
				$("#tap2").show();
			var water_content=parseInt(bgtank.css('height'))-5;
		var margin=parseInt(bgtank.css('margin-top'));
		var color1=tap2.css('backgroundColor');
		//alert(margin);
		bgtank.css('height',water_content);
		bgtank.css('margin-top',margin+5);
		tap2.css('background-color',color1);
		$("#tappress").click(function(){
			$("#tap2").hide();
			pause=true;
		});
	}
	else{
		$("#tappress").click(function(){
			
			pause=false;
		});
		
	}
		//alert(color);
		//tap1.css('background-color',color1);

				},500);
});
});
/*
	aprakashraj07
		
		alert(water_content);
	});*/