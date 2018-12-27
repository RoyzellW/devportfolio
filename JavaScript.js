
/* animate smooth scrolling sections */
$("nav div ul li a").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});


/* animate smooth scrolling sections */
$("#btn1").on('click', function(e) {
    e = document.getElementById("#btn1");
    if (e.value === "View More") {
        e.value = "View Less";
        return e;
    }
    else {
        e.value = "View More";
        return e;
    }
});

