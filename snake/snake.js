$(document).ready(function(){
//alert("hello");
	var snake=$('#snake');
	var position='margin-left';
	var snack_position=parseInt(snake.css('margin-left'));
	//var position1,position2,position3,position4;
	position='margin-left';
	//alert(snack_position);
			var game=setInterval(function(){

				if(position=='margin-left'){
					snake.css('height',10);
					snake.css('width',50);
					var snack_position=parseInt(snake.css('margin-left'));
					snake.css('margin-left',snack_position+10);
					
				}

				else if(position=='margin-top'){
					
					//alert("hello");
					snake.css('height',50);

			       snake.css('width',10);
			       var snack_position=parseInt(snake.css('margin-top'));
					snake.css('margin-top',snack_position-10);
					
				}

				else if(position=='margin-right'){
					snake.css('height',10);

			       snake.css('width',50);
			       var snack_position=parseInt(snake.css('margin-left'));
					
					snake.css('margin-left',snack_position-10);
					
				}

				else if(position=='margin-bottom'){
					snake.css('height',50);

			       snake.css('width',10);
			       var snack_position=parseInt(snake.css('margin-top'));
					
					snake.css('margin-top',snack_position+10);
					
				}
				},40);
				 
			$(document).keydown(function(e){
					
				if(e.keyCode===37){
					//alert("1");
					var snack_position=parseInt(snake.css('margin-left'));
					snake.css('margin-left',snack_position-1);
					snake.css('height',10);
 					snake.css('width',50);
					
					position='margin-right';
				}
				else if(e.keyCode===38){
					//alert("2");
					var snack_position=parseInt(snake.css('margin-top'));
			snake.css('margin-top',snack_position-1);
			snake.css('height',50);
					snake.css('width',10);
					
				 position='margin-top';

				}
				else if(e.keyCode===39){
					//alert("3");
					var snack_position=parseInt(snake.css('margin-left'));
					snake.css('margin-left',snack_position+1);
					snake.css('height',10);
					snake.css('width',50);
					
					 position='margin-left';
				}
				else if(e.keyCode===40){
				var snack_position=parseInt(snake.css('margin-top'));
			snake.css('margin-top',snack_position+1);
			snake.css('height',50);
					snake.css('width',10);
					
			position='margin-bottom';
				}

				
			});
				
				
});