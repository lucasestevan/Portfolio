$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 10) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
    })

    // script do navbar menu

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});