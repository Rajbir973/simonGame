var buttonColours=["red","blue","green","yellow"]

var gamePattern=[]

var userClickedPattern=[]

var started=false;

var level=0

$("body").keydown(function(){
  
  if(!started)
  {
   $("#level-title").text("Level"+level) 
   nextSequence()
   started=true;
  }
  
})

$(".btn").click(function(event){

  var userChosenColour=event.target.id;
  userClickedPattern.push(userChosenColour)

  playSound(userChosenColour)

  animatePress(userChosenColour)

  checkAnswer(userClickedPattern.length-1)

})


function nextSequence()
{
  userClickedPattern = [];
  level++   

  $("#level-title").text("Level "+level)
    var randomNumber=Math.floor(Math.random()*4);
    
    var randomChosenColour=buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    
   

}

function playSound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed")

  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed")
  },100)
}

function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
  {

      if(userClickedPattern.length===gamePattern.length)
    {
    
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

 
}

function startOver()
{

   gamePattern=[]

   started=false;
  
   level=0
}




