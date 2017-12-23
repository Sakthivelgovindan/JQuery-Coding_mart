$(document).ready(function(){
	var  hit=$("#hit");

moveit();
 
moveit1();
var t = 0;
function moveit() {
    t += 0.05;

    var r = 150;
    var xcenter = 100;
    var ycenter = 100;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));
    $('#mainimg').animate({
        top: newTop,
        left: newLeft,
    }, 70, function() {
        moveit();
    });
}

var t1 = 0;

function moveit1() {
    t1 += 0.05;

    var r = 150;
    var xcenter = 100;
    var ycenter = 100;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t1)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t1)));
    $('#sampleimg').animate({
        top: newTop,
        left: newLeft,
    }, 70, function() {
        moveit1();
    });
}
var count=0;
	setInterval(function(){
    var $sampleimg = $("#sampleimg");
     // $sampleimg.hide();  
    if($sampleimg.is(":hover")) {
    	count++;
    	hit.html(count);   
         $sampleimg.show();  
    	 $sampleimg.css("background", "yellow");
    	
       
    }
    else {
       $sampleimg.css("background", "");
    }
}, 1000);
    
});