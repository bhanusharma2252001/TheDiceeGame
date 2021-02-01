 var randomNum1=Math.floor(Math.random()*6+1);
 var randomNum2=Math.floor(Math.random()*6+1);
 var imgsrc="images/dice"+randomNum1+".png";
var imgsrc2="images/dice"+randomNum2+".png";
document.querySelector(".img1").setAttribute("src",imgsrc);
document.querySelector(".img2").setAttribute("src",imgsrc2);
if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML="player 1 Wons!";

}
else if(randomNum1===randomNum2)
{
    document.querySelector("h1").innerHTML="Draw!";

}
else{
    document.querySelector("h1").innerHTML="player 2  Wons!";
}
