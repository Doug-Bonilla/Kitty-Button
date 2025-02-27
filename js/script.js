var button = document.querySelector(".show-cat");
//console.log(button.outerHTML)
var cat = document.querySelector(".cat");
//console.log(cat.outerHTML)
button.addEventListener("click", function () {
  cat.classList.add("show");
});
