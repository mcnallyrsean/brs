var one = document.querySelector("#sky1");
var two = document.querySelector("#sky2");
var three = document.querySelector("#sky3");

document.querySelector("#nav1").addEventListener("click", function() {
  one.setAttribute("visible", true);
  two.setAttribute("visible", false);
  three.setAttribute("visible", false);
});

document.querySelector("#nav2").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", true);
  three.setAttribute("visible", false);
});

document.querySelector("#nav3").addEventListener("click", function() {
  one.setAttribute("visible", false);
  two.setAttribute("visible", false);
  three.setAttribute("visible", true);
});
