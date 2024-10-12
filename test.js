var ImgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg"); // typo fixed: "orginalImg" -> "originalImg"

var line = document.getElementById("line");

originalImg.style.width = ImgBox.offsetWidth + "px";

var leftSpace = ImgBox.offsetLeft;

ImgBox.addEventListener("mousemove", function(e){ // use addEventListener instead of onmousemove
    var boxwidth = (e.clientX - leftSpace) + "px"; // use clientX instead of pageX for more accurate results
    imgWrap.style.width = boxwidth;
    line.style.left = boxwidth;
});