$(document).ready(function(){
	var value1=$("#value1");
	var value2=$("#value2");
	var firstvalue=$("#firstvalue");
	var secondvalue=$("#secondvalue");
	var resultvalue=$("#resultvalue");
	var a,b,i=0,j;

	var arr=new Array();
	$("#submit1").click(function(){
		a=value1.val();
		arr.push(parseInt(a));
		go_push();
	});	

	$("#submit2").click(function(){
		
		b=parseInt(value2.val());
		
		go_down();
		go_result();
	});

	function go_push(){			
			firstvalue.append('<p>'+a+'</p>');		
	      }

	      function go_down(){

	      	secondvalue.append('<p>'+b+'</p>');
	      }

	      function go_result(){
	      	for(j=0;j<arr.length;j++){
	      		var w=arr[j];
	      		var x=b+w;
	      		if(x>=100){
	      			resultvalue.append('<p>'+b+"+"+arr[j]+"="+x+'</p>');
	      		}
	      	}

	      }
});

/*function fun()
{
	var d=document.getElementById('firstvalue');
	d.innerHTML=d.innerHTML+document.getElementById('value1').value+'<br>';
}*/