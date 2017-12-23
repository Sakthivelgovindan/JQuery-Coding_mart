$(document).ready(function(){

	var a=Math.floor(Math.random()*(6+1-1)+1);
	var count=0;
	var image=$("#image");
	//alert(a);
	var angle=0;
	var angle1=360;
	
	//image.data('angle',120);
	var start=setInterval(function(){
		
		$("#image").css({'transform':'rotate('+angle+'deg)'});
	   

		$("#image1").css({'transform':'rotate('+angle1+'deg)'});
		angle=angle+20;
		angle1=angle1-5;
		
	},100);
	/*function go_up(){
		var margin_top=parseInt(image.css('margin-top'));
		image.css('margin-top',margin_top-80);
	}
	function go_down(){
		setTimeout(function(){
			var margin_top=parseInt(image.css('margin-top'))+80;
			image.css('margin-top',margin_top);
		},500);
	}*/
});