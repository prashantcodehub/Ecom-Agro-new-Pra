


$(document).ready(function () {
    // "use strict";

    var menuActive = false;
    var header = $('.header');
    setHeader();
    initCustomDropdown();
    initPageMenu();

    function setHeader() {

        if (window.innerWidth > 991 && menuActive) {
            closeMenu();
        }
    }

    function initCustomDropdown() {
        if ($('.custom_dropdown_placeholder').length && $('.custom_list').length) {
            var placeholder = $('.custom_dropdown_placeholder');
            var list = $('.custom_list');
        }

        placeholder.on('click', function (ev) {
            if (list.hasClass('active')) {
                list.removeClass('active');
            }
            else {
                list.addClass('active');
            }

            $(document).one('click', function closeForm(e) {
                if ($(e.target).hasClass('clc')) {
                    $(document).one('click', closeForm);
                }
                else {
                    list.removeClass('active');
                }
            });

        });

        $('.custom_list a').on('click', function (ev) {
            ev.preventDefault();
            var index = $(this).parent().index();

            placeholder.text($(this).text()).css('opacity', '1');

            if (list.hasClass('active')) {
                list.removeClass('active');
            }
            else {
                list.addClass('active');
            }
        });


        $('select').on('change', function (e) {
            placeholder.text(this.value);

            $(this).animate({ width: placeholder.width() + 'px' });
        });
    }

    /* 
    
    4. Init Page Menu
    
    */

    function initPageMenu() {
        if ($('.page_menu').length && $('.page_menu_content').length) {
            var menu = $('.page_menu');
            var menuContent = $('.page_menu_content');
            var menuTrigger = $('.menu_trigger');

            //Open / close page menu
            menuTrigger.on('click', function () {
                if (!menuActive) {
                    openMenu();
                }
                else {
                    closeMenu();
                }
            });

            //Handle page menu
            if ($('.page_menu_item').length) {
                var items = $('.page_menu_item');
                items.each(function () {
                    var item = $(this);
                    if (item.hasClass("has-children")) {
                        item.on('click', function (evt) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            var subItem = item.find('> ul');
                            if (subItem.hasClass('active')) {
                                subItem.toggleClass('active');
                                TweenMax.to(subItem, 0.3, { height: 0 });
                            }
                            else {
                                subItem.toggleClass('active');
                                TweenMax.set(subItem, { height: "auto" });
                                TweenMax.from(subItem, 0.3, { height: 0 });
                            }
                        });
                    }
                });
            }
        }
    }

    function openMenu() {
        var menu = $('.page_menu');
        var menuContent = $('.page_menu_content');
        TweenMax.set(menuContent, { height: "auto" });
        TweenMax.from(menuContent, 0.3, { height: 0 });
        menuActive = true;
    }

    function closeMenu() {
        var menu = $('.page_menu');
        var menuContent = $('.page_menu_content');
        TweenMax.to(menuContent, 0.3, { height: 0 });
        menuActive = false;
    }


});
    

     
    {/* <script src="
        https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
        "> */}



        (function ($) {
            $.fn.menumaker = function (options) {
                var cssmenu = $(this),
                    settings = $.extend({
                        format: "dropdown",
                        sticky: false
                    }, options);
                return this.each(function () {
                    $(this).find(".button").on('click', function () {
                        $(this).toggleClass('menu-opened');
                        var mainmenu = $(this).next('ul');
                        if (mainmenu.hasClass('open')) {
                            mainmenu.slideToggle().removeClass('open');
                        } else {
                            mainmenu.slideToggle().addClass('open');
                            if (settings.format === "dropdown") {
                                mainmenu.find('ul').show();
                            }
                        }
                    });
                    cssmenu.find('li ul').parent().addClass('has-sub');
                    multiTg = function () {
                        cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                        cssmenu.find('.submenu-button').on('click', function () {
                            $(this).toggleClass('submenu-opened');
                            if ($(this).siblings('ul').hasClass('open')) {
                                $(this).siblings('ul').removeClass('open').slideToggle();
                            } else {
                                $(this).siblings('ul').addClass('open').slideToggle();
                            }
                        });
                    };
                    if (settings.format === 'multitoggle') multiTg();
                    else cssmenu.addClass('dropdown');
                    if (settings.sticky === true) cssmenu.css('position', 'fixed');
                    resizeFix = function () {
                        var mediasize = 1000;
                        if ($(window).width() > mediasize) {
                            cssmenu.find('ul').show();
                        }
                        if ($(window).width() <= mediasize) {
                            cssmenu.find('ul').hide().removeClass('open');
                        }
                    };
                    resizeFix();
                    return $(window).on('resize', resizeFix);
                });
            };
        })(jQuery);

(function ($) {
    $(document).ready(function () {
        $("#cssmenu").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);





// Get the button
let mybutton = document.getElementById("myBtn12");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}