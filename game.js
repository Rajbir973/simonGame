//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours=["red","blue","green","yellow"]

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern=[]

var userClickedPattern=[]

//1. Inside game.js create a new function called nextSequence()
function nextSequence()
{   
  //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber=Math.floor(Math.random()*4);

  //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour=buttonColours[randomNumber];
    
    
    
    
    
    //  console.log(randomChosenColour)
    // switch (randomChosenColour) {
    //     case"green":
      
    //     // flashing colour to the pressed-button 
    //        $(".green").addClass("pressed-button");   
    //        setTimeout(function(){$(".green").removeClass("pressed-button");},100);
        
    //     // Flashing sound to the pressed button
    //     $(document).ready()
    //     {
    //         $(".green").trigger(function(){
            
    //             var audio1=new Audio("sounds/green.mp3")
    //             audio1.play();
    //         })
            
        
    //     }     
    //     break;

    //     case"red":
    //      $(".red").addClass("pressed-button");  
    //      setTimeout(function(){$(".red").removeClass("pressed-button");},100);
    //     break;    
        
        
    //     case"yellow":
    //      $(".yellow").addClass("pressed-button");  
    //      setTimeout(function(){$(".yellow").removeClass("pressed-button");},100);
    //     break;   


        
    //     case"blue":
    //      $(".blue").addClass("pressed-button");  
    //      setTimeout(function(){$(".blue").removeClass("pressed-button");},100);
    //     break;   
          
    //     default:
    //         break;
    // }
  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    //7. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio=new Audio("sounds/"+randomChosenColour+".mp3");
    audio.play();

}
nextSequence()

$(".btn").on("click", function(event){

  var userChosenColour=event.target.id; 
  userClickedPattern.push(userChosenColour)
  // console.log(userClickedPattern)

})





