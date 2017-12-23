$(document).ready(function(){
		var square=$('#square');
		var a=parseInt(square.css('left'));
		var b=parseInt(square.css('top'));
		var count=0;
	$("#leftarr").click(function(){
	
		//var g=parseInt(square.css('left'))+5;
		square.css('left',parseInt(square.css('left'))-20);
		count++;
		$("#output-btn").html(count);
		});
	$("#rightarr").click(function(){
		//var h=parseInt(square.css('left'));
		square.css('left',parseInt(square.css('left'))+20);
		count++;
		$("#output-btn").html(count);
		
		//alert(h);
	});

	$("#uparr").click(function(){
		//var h=parseInt(square.css('top'));
		//alert(h);
		square.css('top',parseInt(square.css('top'))-20);
		count++;
		$("#output-btn").html(count);
		
		//alert(h);
	});
	$("#downarr").click(function(){
		//var h=parseInt(square.css('top'));
		square.css('top',parseInt(square.css('top'))+20);
		count++;
		$("#output-btn").html(count);
		
		//alert(h);
	});

	$("#restart-btn").click(function(){
		/*square.css('left',a);
		square.css('top',b);
		count=0;
		$("#output-btn").html(count);*/
		location.reload();
	});

	$("#start-btn").click(function(){
		alert("Welcome to this game");
	});
	});
