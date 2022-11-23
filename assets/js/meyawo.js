

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// const loader = document.querySelector(".inpokan");
// const home = document.getElementById("home");

// setTimeout(function() {
// 	loader.style.display = "none";
//     home.style.removeProperty('overflow-y');
// }, 2500);
// gsap.to(".inpokan", { opacity: 0, duration: 1.6, delay: .5 })
