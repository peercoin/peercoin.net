$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 800) {
        $("nav.stick").addClass("show");
    }
    else {
        $("nav.stick").removeClass("show");
    }
});

$("span.menu-trigger").click(function(){
    $("nav.mobile-only").toggleClass("show");
    $("header nav.mobile-only li.nav-item").removeClass("clicked");
});

$("span.menu-close").click(function(){
    $("nav.mobile-only").removeClass("show");
});

$("li#language").click(function(){
    $("section#language").toggleClass("show");
    $("nav.mobile-only").removeClass("show");
});

$("section#language button").click(function(){
    $("section#language").removeClass("show");
});

$("section#language .lang").click(function(){
    $("section#language").removeClass("show");
});

$("header nav.mobile-only li.nav-item").click(function(){
    $("header nav.mobile-only li.nav-item").removeClass("clicked");
    $(this).toggleClass("clicked");
});

var loader = document.getElementById("loader-wrapper");

window.addEventListener('load', function(){
    loader.style.display = 'none';
})



