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

function lang_btn_hide() {
    var element = document.getElementById("lang-cont");
    element.classList.toggle("hide");
};

function main_btn_hide() {
    var element = document.getElementById("main-cont");
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

    console.log('Event triggered');
};