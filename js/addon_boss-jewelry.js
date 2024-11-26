$(document).ready(function() {
    // Optimization: Store the references outside the event handler:
    var element = document.getElementById("nav-1");
    element.classList.toggle("open");
    var element1 = document.getElementById("nav-1-1");
    element1.classList.toggle("open");
});