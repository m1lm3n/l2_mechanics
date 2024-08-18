jQuery(document).ready(function ($) {    // Optimization: Store the references outside the event handler:
    // Optimization: Store the references outside the event handler:
    var element = document.getElementById("nav-1");
    element.classList.toggle("open");
    var element1 = document.getElementById("nav-1-1");
    element1.classList.toggle("open");

    var i;

    var coll = document.getElementsByClassName("collap1");

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = document.getElementById("collapsible-content1");
            if (content.style.maxHeight){
                content.style.maxHeight = null;
              } else {
                content.style.maxHeight = content.scrollHeight + "px";
              } 
        });
    }

    var coll = document.getElementsByClassName("collap2");

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = document.getElementById("collapsible-content2");
            if (content.style.maxHeight){
                content.style.maxHeight = null;
              } else {
                content.style.maxHeight = content.scrollHeight + "px";
              } 
        });
    }
});