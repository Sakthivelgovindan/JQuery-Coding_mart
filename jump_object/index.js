$(function(){
	//alert("hello");

	var pole=$('#pole');
	var object=$('#object');
	var count=0;
	var start=setInterval(function(){
		var pole_position=parseInt(pole.css('margin-left'))-10;
		
		//alert(pole_initial_margin_top);
		if(pole_position<-10){
			pole_position=(pole.css('margin-left'),870);
			var pole_initial_height=parseInt(pole.css('height'));
		var pole_initial_margin_top=parseInt(pole.css('margin-top'));
			var new_height=parseInt(Math.random()*(170-70)+70);
			var x=pole_initial_height-new_height;
			if(x>=0){
		pole.css('height',pole_initial_height-new_height);

		pole.css('margin-top',pole_initial_margin_top+new_height);
	}
	else{
		pole.css('height',380);
		pole.css('margin-top',250);
	}
		$("#pole").hide();
		}
		
	
		pole.css('margin-left',pole_position);
		$("#pole").show();
		$(document).keydown(function(e){ 
			if(e.keyCode==32){
				var game_over=parseInt(pole.css('margin-left'));
				if(game_over>220){
					var y=parseInt(pole.css('margin-top'))-70;
				var z=parseInt(pole.css('margin-top'));
				object.css('margin-top',y);
				go_down();
				
				}
				else if(190<game_over<210){
					var touch=parseInt(pole.css('margin-left'));
				if(100<touch<350){
				var y=parseInt(pole.css('margin-top'))-70;
				var z=parseInt(pole.css('margin-top'));
				object.css('margin-top',y);
				go_down();
				stop_the_game();
				}
				}
				
				
			}
		});
		var output_margin_left=parseInt(pole.css('margin-left'));
		if(output_margin_left==220){
			count=count+1;
			$("#output-btn").html(count);

		}
	
            
	},20);

	function go_down(){
		setTimeout(function(){
			object.css('height',50);
		object.css('margin-top',583);
		//object.css('margin-left',250);
		},300)


		
		/**/
	}
	function stop_the_game(){
			clearInterval(start);
			$("#button").show();
			$("#over").show();
		}

		$("#button").click(function(){
			location.reload();
		});
	
}); 