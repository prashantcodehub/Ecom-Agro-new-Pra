$(document).ready(function () {
    $(".testimonial .indicators li").click(function () {
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");
        targetElement.eq(i).addClass('active');
        targetElement.not(targetElement[i]).removeClass('active');
    });
    $(".testimonial .tabs li").click(function () {
        var targetElement = $(".testimonial .tabs li");
        targetElement.addClass('active');
        targetElement.not($(this)).removeClass('active');
    });
});
$(document).ready(function () {
    $(".slider .swiper-pagination span").each(function (i) {
        $(this).text(i + 1).prepend("0");
    });
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});



function ProductD(){
     location.window = '/Product-d.html'
}