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
});