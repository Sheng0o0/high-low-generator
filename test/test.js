$(document).ready(function(){
var secretNum = 7;
   $("button").click(function(){
      var guess =$("#pass").val(); 
      if(secretNum > guess){
        $("#hint").html("That guess is too low, try again ");
      }
      else if(secretNum < guess){
        $("#hint").html("That guess is too high, try again ");
      }
      else{
      $("#hint").html("WOOOOOOOHHHH!!!!!! The secret number is " + secretNum);
      }
  });
});