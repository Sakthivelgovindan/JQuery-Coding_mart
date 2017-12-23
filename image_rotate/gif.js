$(document).ready(function(){
	var a=Math.floor(Math.random()*(6+1-1)+1);
	var count=0;
	var image=$("#image");
	alert(a);
	var start=setInterval(function(){
		if(count<a){
		go_up();
		go_down();
		count++;
		}
		
	},100);
	function go_up(){
		var margin_top=parseInt(image.css('margin-top'));
		image.css('margin-top',margin_top-80);
	}
	function go_down(){
		setTimeout(function(){
			var margin_top=parseInt(image.css('margin-top'))+80;
			image.css('margin-top',margin_top);
		},500);
	}
});