var element = document.getElementById("myInput");
element.value = "hello";
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    alert("Input contains: ".concat(element.value));
});
