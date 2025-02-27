var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");
//console.log(cat.outerHTML)
button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    //console.log("yes");
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disapper");
  } else {
    //console.log("no");
    cat.classList.add("show");
    button.innerText = "Shoo, Cat!!";
    button.classList.remove("disapper");
  }
});
