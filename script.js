var li = document.getElementsByTagName("li");
var jump = document.getElementsByClassName("jump");
var value = false;

function fire() {
  value = !value;
  if (value == true) {
    for (let i = 0; i <= li.length; i++) {
      li[i].style.top = "-30px";
      li[0].classList.add("jump");
      li[0].style.animationDelay = "0.4s";

      li[1].classList.add("jump");
      li[1].style.animationDelay = "0.3s";

      li[2].classList.add("jump");
      li[2].style.animationDelay = "0.2s";

      li[3].classList.add("jump");
      li[3].style.animationDelay = "0.3s";

      li[4].classList.add("jump");
      li[4].style.animationDelay = "0.4s";
    }
  } else {
    for (let i = 0; i <= li.length; i++) {
      li[i].style.top = "-700px";
      li[i].classList.remove("jump");
    }
  }
}
