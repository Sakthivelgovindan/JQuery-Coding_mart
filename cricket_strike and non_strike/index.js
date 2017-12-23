$(document).ready(function(){
			$("#startplay,#score,#run,#start,#scoreboard1,#scoreboard2,#scoreboard11,#scoreboard22").hide();
			var aa,bb,cc=0,dd=0;
		$("#submit").click(function(){
			$("#player,#player1,#player2,#submit").hide();
			var a=$("#player1").val();
			var b=$("#player2").val();
			$("#first1").html(a);
			$("#second1").html(b);
			$("#scoreboard1").html(a+":");
			$("#scoreboard2").html(b+":");
				$("#startplay,#run,#score,#board,#scoreboard1,#scoreboard2,#scoreboard11,#scoreboard22").show();
				aa=$("#player1").val();
		});
		$("#startplay").click(function(){
				var run1=Math.floor(Math.random()*(6-1+1))+1;
				$("#score").show().html(run1);
				var strike=$("#player1").val();
				var strike1=$("#player2").val();
				if(strike==aa){
					setTimeout(function(){
						cc=cc+parseInt(run1);
					$("#scoreboard11").html(cc);
				},3000);						
				if(run1%2==0){
					setTimeout(function(){
						$("#first1").html(strike);
						$("#second1").html(strike1);
						$("#player1").val(strike);
						$("#player2").val(strike1);									 
				},2000);					
				}
				else{
					setTimeout(function(){
					$("#first1").html(strike1);
					$("#second1").html(strike);
					$("#player1").val(strike1);
					$("#player2").val(strike);					
					},1000);					
					}
				}
				else{
					setTimeout(function(){
						dd=dd+parseInt(run1);
					$("#scoreboard22").html(dd);
				},3000);
				if(run1%2==0){
					//alert(strike);
					setTimeout(function(){
						$("#first1").html(strike);
						$("#second1").html(strike1);
						$("#player1").val(strike);
						$("#player2").val(strike1);
				},2000);		
				}
				else{
					setTimeout(function(){
					$("#first1").html(strike1);
					$("#second1").html(strike);
					$("#player1").val(strike1);
					$("#player2").val(strike);
					},1000);					
					}
				}		
		});
})