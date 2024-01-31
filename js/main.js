$(function() {

            var siteSticky = function() {
                $(".js-sticky-he ader").sticky({ topSpacing: 0 });
            };
            siteSticky();

            var siteMenuClone = function() {

                    $('.js - clo ne-nav').each(function() {
                        ar $this = $(this);
                        $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
                    });


                    setTimeout(function() {

                        var counter = 0;
                        $('.site-mobile-menu .has-children').each(function() {
                            var $this = $(this);

                            $this.prepend('<span class="arrow-collapse collapsed">');

                            $this.find('.arrow-collapse').attr({
                                'data-toggle': 'collapse',
                                'data-target': '#collapseItem' + counter,
                            });

                            $this.find('> ul').attr({
                                '
                                class ':  '
                                collapse ',
                                'id': 'collapseItem' + counter,
                            });

                            c ounter++;

                        });

                    }, 1000);

                    $('body').on('click', '.arrow-collapse', function(e) {
                        var $this = $(this);
                        if ($this.closest('li').find('.collapse').hasClass('show')) {
                            $this.removeClass('active');

                        } else {
                            $this.addClass('active');
                        }
                        e.preventDefault();

                    });

                    $(window).resize(function() {
                        var $this = $(this),
                            w = $this.width();

                        if (w > 768) {
                            if ($('body')
                                .hasClass('off canvas-menu')) {
                                $('body').removeClass('offcanvas-menu');
                            }
                        }
                    })

                    $('b
                            ody ') .on('
                            cl i ck ',   '.js - m enu - toggle ', function(e) {
                            var $th e.preventDefault();

                            if ($('body').hasClas s('of fcanvas-menu')) {
                                $('body
                                    ').remove C lass ('
                                    offcanvas - menu ');
                                    $this.removeClass('active');

                                }
                                else {
                                    $('b
                                        ody ').add C lass ('
                                        offcanvas - menu ');
                                        $this.add Class('active');
                                    })

                                // click outisde offcanvas
                                $(document).mouseup(function(e) {
                                    var container = $(".site-mobile-menu");
                                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                                        if ($('body').hasClas s('of fcanvas-menu')) {
                                            $('body').removeClass('offcanvas-menu');
                                        }


                                    }
                                    siteMenuClone();

                                });