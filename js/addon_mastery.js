$(document).ready(function() {
    // Optimization: Store the references outside the event handler:
    var element = document.getElementById("nav-3");
    element.classList.toggle("open");
    var element1 = document.getElementById("nav-3-3");
    element1.classList.toggle("open");
});