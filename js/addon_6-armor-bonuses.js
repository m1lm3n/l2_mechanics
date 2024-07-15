function nav_btn_1() {
    var element = document.getElementById("nav-1");
    element.classList.toggle("open");
};

function nav_btn_2() {
    var element = document.getElementById("nav-2");
    element.classList.toggle("open");

};

function nav_btn_3() {
    var element = document.getElementById("nav-3");
    element.classList.toggle("open");
};

function nav_btn_4() {
    var element = document.getElementById("nav-4");
    element.classList.toggle("open");
};

function nav_btn_5() {
    var element = document.getElementById("nav-5");
    element.classList.toggle("open");
};

function nav_btn_1_1() {
    var element = document.getElementById("nav-1-1");
    element.classList.toggle("open");
};

function nav_btn_2_2() {
    var element = document.getElementById("nav-2-2");
    element.classList.toggle("open");

};

function nav_btn_3_3() {
    var element = document.getElementById("nav-3-3");
    element.classList.toggle("open");
};

function nav_btn_4_4() {
    var element = document.getElementById("nav-4-4");
    element.classList.toggle("open");
};

function nav_btn_5_5() {
    var element = document.getElementById("nav-5-5");
    element.classList.toggle("open");
};

function lang_btn_hide() {
    var element = document.getElementById("lang-cont");
    element.classList.toggle("hide");
};

function main_btn_hide() {
    var element = document.getElementById("main-cont");
    element.classList.toggle("hide");
};

function mob_btn_hide() {
    var element = document.getElementById("mob-cont");
    element.classList.toggle("hide");
};

function show_conf() {
    var stats = document.getElementById("confirmation-window").style.display;

    if (stats == "none") {
        document.getElementById("confirmation-window").style.display = "inline-block";
    } else {
        document.getElementById("confirmation-window").style.display = "none";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function btn_exit(element) {
    element.style.right = getRandomInt(76) + '%';
    element.style.left = getRandomInt(76) + '%';
    element.style.top = getRandomInt(76) + '%';
    element.style.bottom = getRandomInt(76) + '%';
};
var windowsize = $(window).width();

jQuery(document).ready(function ($) {
    var isLateralNavAnimating = false;

    //open/close lateral navigation
    $('.cd-nav-trigger').on('click', function (event) {
        event.preventDefault();
        //stop if nav animation is running 
        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0) {
                // $(".cd-navigation-wrapper").css("padding","0px 50% 0px 0px");
                isLateralNavAnimating = true;
            }

            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                //animation is over
                // $(".cd-navigation-wrapper").css("padding", "0px");
                isLateralNavAnimating = false;
            });
        }
        // else{
        //     $(".cd-navigation-wrapper").css("padding","0px 50% 0px 0px");
        // }
    });

});

$(document).ready(function() {
    // Optimization: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize >= 1024) {
            if($('body').hasClass('navigation-is-open')){
                $('body').toggleClass('navigation-is-open');
            }
        
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

