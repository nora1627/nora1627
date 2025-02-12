var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotatevalue = circle.style.transform;
//console.log(rotatevalue);
var rotatesum;

upbtn.onclick = function(){
    /*時計回りに90°回転させる*/
    rotatesum = rotatevalue + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotatevalue = rotatesum;
}

downbtn.onclick = function(){
    /*反時計回りに90°回転させる*/
    rotatesum = rotatevalue + "rotate(90deg)";
    circle.style.transform = rotatesum;
    rotatevalue = rotatesum;
}