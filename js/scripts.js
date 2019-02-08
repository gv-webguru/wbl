// JavaScript Document for Forbes Women Business Leaders
$(document).ready(function(){
    
    
    $("#form-sub").click(function(evt){
        evt.preventDefault();
        //console.log("I'm getting submitted!");
        $("#form-1").submit();
    });
    
    $("#mktd-before-y").click(function(evt){
        $("#if-yes").fadeIn();
        console.log("Of course I have!");
    });
    
    $("#mktd-before-n").click(function(evt){
        $("#if-yes").fadeOut();
        console.log("Oh, lord no!");
    });
    
    $("#include-dude").click(function(evt){
        evt.preventDefault();
        $("#this-guy").fadeToggle();
        console.log("Yeah, I can think of a guy!");
    
    });
    
    var msg = "This microsite developed by Grant L. McDonald @ Graphic Village, Inc - for more info contact - Lisa at lhohner@multi-craft.com. Tell her you read the console."
    
    console.log(msg);
});