$(document).ready(function(){
    	
	var box=$("#box");
	var ball=$("#ball");
    var dice=$("#dice");
	var top=0,bottom=0,left=0,right=0;
	var change=0;
	top=parseInt(ball.css('margin-top'));
	/*bottom=parseInt(ball.css('margin-top'))+500;
    left=parseInt(ball.css('margin-left'));
    right=parseInt(ball.css('margin-left'))+500;*/
    start();
    function start(){
    	
        go_down();

        function go_down(){

        top=parseInt(ball.css('margin-top'))+1;
        left=parseInt(ball.css('margin-left'))+1;
        if(left<=485){
            setTimeout(function(){
            ball.css('margin-top',top);
            ball.css('margin-left',left);
            go_down();
            },10);          
        }
        else{
            right=left;
            //start();
            go_bottom();
        }
    }

    function go_bottom(){
        top=parseInt(ball.css('margin-top'))+1;
        right=parseInt(ball.css('margin-left'))-1;
        if(top<=475){
            setTimeout(function(){
                ball.css('margin-top',top);
                ball.css('margin-left',right);
                go_bottom();
            },10);
        }
        else{
            up=top;
            //start();
            go_up();
        }
    }

    function go_up(){
        top=parseInt(ball.css('margin-top'))-1;
        left=parseInt(ball.css('margin-left'))-1;

        if(left>0){
            setTimeout(function(){
                ball.css('margin-top',top);
                ball.css('margin-left',left);
                go_up();
            },10);
        }
        else{ 
            go_top();
        }
    }
     function go_top(){

        top=parseInt(ball.css('margin-top'))-1;
        right=parseInt(ball.css('margin-left'))+1;

        if(top>0){
            
            setTimeout(function(){
            ball.css('margin-top',top);
            ball.css('margin-left',right);   
            go_top();
            },10);
        }
        else{
            go_down();
        }
        
    }
    

	   
    }
	
    
        $(document).keydown(function(e){
        if(e.keyCode==37){
            var dice_left=parseInt(dice.css('margin-left'))-10;
            if(dice_left>=0){
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            dice.css('margin-left',dice_left);
            }
        }

         else if(e.keyCode==39){

            var dice_right=parseInt(dice.css('margin-left'))+10;
            if(dice_right<=450){
                dice.css('margin-left',dice_right);      
            }
            
        }

    });
    
    
  });

	   