$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('blur');
        }
        else {
            $('.navbar').removeClass('blur');
        }

    });

    // toggle navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    // Typing Animation Script
    var typed = new Typed(".typing", {
        strings: ["Listen Music", "Develop", "Watch Anime"],
        typedSpeed: 90,
        backSpeed: 60,
        loop: true
    })
});

function myFunction(x) {
    x.classList.toggle("change");
}
