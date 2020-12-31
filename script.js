$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 10) {
            $('.navbar').addClass("sticky");
            $('.navbar').addClass("sticky2");
        } else {
            $('.navbar').removeClass("sticky");
            $('.navbar').removeClass("sticky2");
        }
    })

    // script do navbar menu

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});