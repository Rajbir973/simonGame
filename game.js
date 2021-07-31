//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours=["red","blue","green","yellow"]

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern=[]

var userClickedPattern=[]

var started=false;

var level=0

//Function to check keydown event in the begining 
$("body").keydown(function(){
  
  if(!started)
  {
   $("#level-title").text("Level"+level) 
   nextSequence()
   started=true;
  }
  
})

// function to check user selected colour
$(".btn").click(function(event){

  var userChosenColour=event.target.id; //or we can use $(this).attr("id");
//  console.log(userChosenColour)
  userClickedPattern.push(userChosenColour)

  playSound(userChosenColour)
  // console.log(userClickedPattern)
  animatePress(userChosenColour)

  // console.log(userClickedPattern.length-1)
  checkAnswer(userClickedPattern.length-1)
  // userClickedPattern.length-1 way to print last element of the array
  // length++
  // console.log(userClickedPattern[0])


})


//1. Inside game.js create a new function called nextSequence()
// function to select the colour for an item with randomnumbers
function nextSequence()
{
  // Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  //user needs to rember the colours
  userClickedPattern = [];
  level++   

  $("#level-title").text("Level "+level)
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
    // setTimeout(function(){},1000)
    //     break;   
          
    //     default:
    //         break;
    // }
  //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);
    //7. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
   

}

//Function to play sound in both the scenarios
function playSound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

// function to add animations to the code
function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed")

  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed")
  },100)
}

// function to compare user input with the randomInput genreated by computer
function checkAnswer(currentLevel)
{
  // console.log("game ["+gamePattern+"]")
  // console.log("user ["+userClickedPattern+"]")
  


  // console.log(gamePattern[currentLevel])
  // console.log(userClickedPattern[currentLevel])
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
  {

    // setTimeout(function(){nextSequence()},1000)
    //It only runs this statement when it knows 
    // user has made number of clicks equal to the elements in gamepattren array

      if(userClickedPattern.length===gamePattern.length)
    {
      // console.log("this is"+userClickedPattern.length)
      // console.log("this is"+gamePattern.length)
    
      setTimeout(function()
      {
        nextSequence();
      },1000);
    } 
  
  } 
  else
  {
    $("#level-title").text("GAME OVER,Press Any Key to Restart")
    var gameOverSound=new Audio("sounds/wrong.mp3")
    gameOverSound.play()

    $("body").addClass("game-over")

    setTimeout(function(){
      $("body").removeClass("game-over")
    },200)

    startOver()
  }

  
  // userClickedPattern=[]
}

function startOver()
{

   gamePattern=[]

   started=false;
  
   level=0
}




