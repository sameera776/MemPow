var gpattern=[];
var upattern=[];
var level=0;
var b=false;
var col=["red","blue","green","yellow"];

function nextSequence(){
    upattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var n=Math.random();
    n=n*4;
    n=Math.floor(n);
   var selectedCol=col[n];
   gpattern.push(selectedCol);
   addAni(selectedCol);
   playSound(selectedCol);
}

$(".btn").click(function(){
  var ucol=$(this).attr("id");
  upattern.push(ucol);
  playSound(ucol);
  $(this).addClass("pressed");
  setTimeout(function () {
    $("#" + ucol).removeClass("pressed");
  }, 100);
  checkAns(upattern.length-1);
});

function playSound(name){
    var audio=new Audio("./sounds/"+name+".mp3");
  audio.play();
}

function addAni(name)
{
    $("#"+name).fadeIn(100).fadeOut(100).fadeIn(100);
}

$(document).keypress(function(event){
    if(b===false){
        $("h1").text("Level 0");
        nextSequence();
        b=true;
    }
});
$(".start").click(function(event){
  if(b===false){
    $("h1").text("Level 0");
    nextSequence();
    b=true;
}
})
function checkAns(clevel)
{
   if(gpattern[clevel]==upattern[clevel])
   {
       if(gpattern.length==upattern.length)
       {
           setTimeout(function(){
               nextSequence();
           },1000);
       }
   }
else
{
    var audio=new Audio("./sounds/wrong.mp3");
    $("body").addClass("game-over");
    audio.play();
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    b=false;
    level=0;
    gpattern=[];
}

}