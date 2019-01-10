var button = document.querySelector(".link-button-search");
var wnd = document.querySelector(".window-search");
button.addEventListener("click", function (evt) {
evt.preventDefault();
wnd.classList.toggle("window-open");
});
