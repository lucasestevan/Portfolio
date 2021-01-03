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


    // script de animção para texto
    var typed = new Typed(".typing", {
        strings: ["Programar", "Filmes", "Futebol", "Carros"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    var typed = new Typed(".typing-2", {
        strings: ["Programar", "Filmes", "Futebol", "Carros"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});