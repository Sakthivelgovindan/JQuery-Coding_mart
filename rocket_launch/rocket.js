$(document).ready(function(){
		$("#first1,#second1,#third1,#fourth1,#fifth1,#six1,#seven1,#eight1,#nine1,#ten1,#eleven1,#twelve1").hide();
		$("#first,#second,#third,#fourth,#fifth,#six,#seven,#eight,#nine,#ten,#eleven,#twelve").show();
		$("#ifirst,#isecond,#ithird,#ifourth,#ififth,#isix,#iseven,#ieight,#inine,#iten,#ieleven,#itwelve").hide();
		var box=$("#box");
		var first1=$("#first1");
		var second1=$("#second1");
		var third1=$("#third1");
		var fourth1=$("#fourth1");
		var fifth1=$("#fifth1");
		var six1=$("#six1");
		var seven1=$("#seven1");
		var eight1=$("#eight1");
		var nine1=$("#nine1");
		var ten1=$("#ten1");
		var eleven1=$("#eleven1");
		var twelve1=$("#twelve1");
		var width=parseFloat(box.css('width'));
		var height=parseFloat(box.css('height'));
		
		$("#first").click(function(){
			$("#first1").show();
			$("#first").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(first1.css('margin-top'))-10;
				console.log(margin_top1);
				if(margin_top1>=-310){
				first1.css("margin-top",margin_top1);
				}
				else{
				console.log("Reached...")				
					if(x==0){
						$("#first1").hide();
					$("#ifirst").show();
					setTimeout(function(){
						$("#ifirst").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},200);
		});

		$("#second").click(function(){
			$("#second1").show();
			$("#second").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(second1.css('margin-top'))-10;
				if(margin_top1>=-310){
				second1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#second1").hide();
					$("#isecond").show();
					setTimeout(function(){
						$("#isecond").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});


		$("#third").click(function(){
			$("#third1").show();
			$("#third").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(third1.css('margin-top'))-10;
				if(margin_top1>=-310){
				third1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#third1").hide();
					$("#ithird").show();
					setTimeout(function(){
						$("#ithird").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});


		$("#fourth").click(function(){
			$("#fourth1").show();
			$("#fourth").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(fourth1.css('margin-top'))-10;
				if(margin_top1>=-310){
				fourth1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#fourth1").hide();
					$("#ifourth").show();
					setTimeout(function(){
						$("#ifourth").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});


		$("#fifth").click(function(){
			$("#fifth1").show();
			$("#fifth").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(fifth1.css('margin-top'))-10;
				if(margin_top1>=-310){
				fifth1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#fifth1").hide();
					$("#ififth").show();
					setTimeout(function(){
						$("#ififth").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});

		$("#six").click(function(){
			$("#six1").show();
			$("#six").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(six1.css('margin-top'))-10;
				if(margin_top1>=-310){
				six1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#six1").hide();
					$("#isix").show();
					setTimeout(function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      tr+d
						$("#isix").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});

		$("#seven").click(function(){
			$("#seven1").show();
			$("#seven").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(seven1.css('margin-top'))-10;
				if(margin_top1>=-310){
				seven1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#seven1").hide();
					$("#iseven").show();
					setTimeout(function(){
						$("#iseven").hide(1000); 
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});

		$("#eight").click(function(){
			$("#eight1").show();
			$("#eight").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(eight1.css('margin-top'))-10;
				if(margin_top1>=-310){
				eight1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#eight1").hide();
					$("#ieight").show();
					setTimeout(function(){
						$("#ieight").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});

		$("#nine").click(function(){
			$("#nine1").show();
			$("#nine").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(nine1.css('margin-top'))-10;
				if(margin_top1>=-310){
				nine1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#nine1").hide();
					$("#inine").show();
					setTimeout(function(){
						$("#inine").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});

		$("#ten").click(function(){
			$("#ten1").show();
			$("#ten").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(ten1.css('margin-top'))-10;
				if(margin_top1>=-310){
				ten1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#ten1").hide();
					$("#iten").show();
					setTimeout(function(){
						$("#iten").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});

		$("#eleven").click(function(){
			$("#eleven1").show();
			$("#eleven").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(eleven1.css('margin-top'))-10;
				if(margin_top1>=-310){
				eleven1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#eleven1").hide();
					$("#ieleven").show();
					setTimeout(function(){
						$("#ieleven").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});

		$("#twelve").click(function(){
			$("#twelve1").show();
			$("#twelve").hide();
			var x=0;
			var start=setInterval(function(){

				var margin_top1=parseInt(twelve1.css('margin-top'))-10;
				if(margin_top1>=-310){
				twelve1.css("margin-top",margin_top1);
				}
				else{				
					if(x==0){
						$("#twelve1").hide();
					$("#itwelve").show();
					setTimeout(function(){
						$("#itwelve").hide(1000);
						x=x+1;
					},1000);
				}
				}
				
			},20);
		});
});