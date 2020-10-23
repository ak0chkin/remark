$(document).ready(function() {
    var owl = $("#owl-demo");
    owl.owlCarousel({
        items : 3,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1440:{
                items:3,
            }
        }
    });

    // Custom Navigation Events
    $(".prev").click(function(){
        owl.trigger('prev.owl.carousel');
    })
    $(".next").click(function(){
        owl.trigger('next.owl.carousel');
    })
});

