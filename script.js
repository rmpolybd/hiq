$(".box") .click (function () {
    $ (".box") .removeClass ("active");
    $ (this) .addClass ("active");
});

$(window).scroll(function() {

    if ($(this).scrollTop() > 190){  
        $('#nav').addClass("fixed");
    }
    else{
        $('#nav').removeClass("fixed");
    }
});