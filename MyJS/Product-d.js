// let featuedImg = document.getElementById('featured-image');
// let smallImgs = document.getElementsByClassName('small-Img');

// smallImgs[0].addEventListener('click', () => {
//     featuedImg.src = smallImgs[0].src;
//     smallImgs[0].classList.add('sm-card')
//     smallImgs[1].classList.remove('sm-card')
//     smallImgs[2].classList.remove('sm-card')
//     smallImgs[3].classList.remove('sm-card')
//     smallImgs[4].classList.remove('sm-card')
// })
// smallImgs[1].addEventListener('click', () => {
//     featuedImg.src = smallImgs[1].src;
//     smallImgs[0].classList.remove('sm-card')
//     smallImgs[1].classList.add('sm-card')
//     smallImgs[2].classList.remove('sm-card')
//     smallImgs[3].classList.remove('sm-card')
//     smallImgs[4].classList.remove('sm-card')
// })
// smallImgs[2].addEventListener('click', () => {
//     featuedImg.src = smallImgs[2].src;
//     smallImgs[0].classList.remove('sm-card')
//     smallImgs[1].classList.remove('sm-card')
//     smallImgs[2].classList.add('sm-card')
//     smallImgs[3].classList.remove('sm-card')
//     smallImgs[4].classList.remove('sm-card')
// })
// smallImgs[3].addEventListener('click', () => {
//     featuedImg.src = smallImgs[3].src;
//     smallImgs[0].classList.remove('sm-card')
//     smallImgs[1].classList.remove('sm-card')
//     smallImgs[2].classList.remove('sm-card')
//     smallImgs[3].classList.add('sm-card')
//     smallImgs[4].classList.remove('sm-card')
// })
// smallImgs[4].addEventListener('click', () => {
//     featuedImg.src = smallImgs[4].src;
//     smallImgs[0].classList.remove('sm-card')
//     smallImgs[1].classList.remove('sm-card')
//     smallImgs[2].classList.remove('sm-card')
//     smallImgs[3].classList.remove('sm-card')
//     smallImgs[4].classList.add('sm-card')
// })









;
(function($) {
    $.fn.picZoomer = function(options) {
        var opts = $.extend({}, $.fn.picZoomer.defaults, options),
            $this = this,
            $picBD = $('<div class="picZoomer-pic-wp"></div>').css({ 'width': opts.picWidth + 'px', 'height': opts.picHeight + 'px' }).appendTo($this),
            $pic = $this.children('img').addClass('picZoomer-pic').appendTo($picBD),
            $cursor = $('<div class="picZoomer-cursor"><i class="f-is picZoomCursor-ico"></i></div>').appendTo($picBD),
            cursorSizeHalf = { w: $cursor.width() / 2, h: $cursor.height() / 2 },
            $zoomWP = $('<div class="picZoomer-zoom-wp"><img src="" alt="" class="picZoomer-zoom-pic"></div>').appendTo($this),
            $zoomPic = $zoomWP.find('.picZoomer-zoom-pic'),
            picBDOffset = { x: $picBD.offset().left, y: $picBD.offset().top };


        opts.zoomWidth = opts.zoomWidth || opts.picWidth;
        opts.zoomHeight = opts.zoomHeight || opts.picHeight;
        var zoomWPSizeHalf = { w: opts.zoomWidth / 2, h: opts.zoomHeight / 2 };

       
        $zoomWP.css({ 'width': opts.zoomWidth + 'px', 'height': opts.zoomHeight + 'px' });
        $zoomWP.css(opts.zoomerPosition || { top: 0, left: opts.picWidth + 300 + 'px' });
        
        $zoomPic.css({ 'width': opts.picWidth * opts.scale + 'px', 'height': opts.picHeight * opts.scale + 'px' });

       
        $picBD.on('mouseenter', function(event) {
            $cursor.show();
            $zoomWP.show();
            $zoomPic.attr('src', $pic.attr('src'))
        }).on('mouseleave', function(event) {
            $cursor.hide();
            $zoomWP.hide();
        }).on('mousemove', function(event) {    
            var x = event.pageX - picBDOffset.x,
                y = event.pageY - picBDOffset.y;

            $cursor.css({ 'left': x - cursorSizeHalf.w + 'px', 'top': y - cursorSizeHalf.h + 'px' });
            $zoomPic.css({ 'left': -(x * opts.scale - zoomWPSizeHalf.w +50 + "px") + 'px', 'top': -(y * opts.scale - zoomWPSizeHalf.h) + 'px' });

        });
        return $this;

    };
    $.fn.picZoomer.defaults = {
        picHeight: 460,
        scale: 3.5,
        zoomerPosition: { top: '0', left: '380px' },

        zoomWidth: 500,
        zoomHeight: 490
    };
})(jQuery);



$(document).ready(function() {
    $('.picZoomer').picZoomer();
    $('.piclist li').on('click', function(event) {
        var $pic = $(this).find('img');
        $('.picZoomer-pic').attr('src', $pic.attr('src'));
    });

    var owl = $('#recent_post');
    owl.owlCarousel({
        margin: 20,
        dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
            1200: {
                items: 4
            }
        }
    });

    $('.decrease_').click(function() {
        decreaseValue(this);
    });
    $('.increase_').click(function() {
        increaseValue(this);
    });

    function increaseValue(_this) {
        var value = parseInt($(_this).siblings('input#number').val(), 10);
        value = isNaN(value) ? 0 : value;
        value++;
        $(_this).siblings('input#number').val(value);
    }

    function decreaseValue(_this) {
        var value = parseInt($(_this).siblings('input#number').val(), 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        $(_this).siblings('input#number').val(value);
    }
});