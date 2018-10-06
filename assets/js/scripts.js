;(function () {
    "use strict";

    var $window, $document, $body;

    $window = $(window);
    $document = $(document);
    $body = $("body");

    
    /*==============================================
     Pre loader init
     ===============================================*/
    $window.on("load", function () {
        $body.imagesLoaded(function () {
            $(".tb-preloader-wave").fadeOut();
            $("#tb-preloader").delay(200).fadeOut("slow").remove();
        });
    });

    /*==============================================
     Wow init
     ===============================================*/
    if (typeof WOW == "function")
        new WOW().init();


    $document.ready(function () {

        /*==============================================
         Retina support added
         ===============================================*/
        if (window.devicePixelRatio > 1) {
            $(".retina").imagesLoaded(function () {
                $(".retina").each(function () {
                    var src = $(this).attr("src").replace(".", "@2x.");
                    var h = $(this).height();
                    $(this).attr("src", src).css({height: h, width: "auto"});
                });
            });
        }


        /*==============================================
         Smooth scroll init
         ===============================================*/
        if (typeof smoothScroll == "object") {
            smoothScroll.init();
        }


        /*==============================================
         Menuzord init
         ===============================================*/
        $(".js-primary-navigation").menuzord();


        /*==============================================
         Onepage nav init
         ===============================================*/
        $(".op-nav li").on("click", function () {
            if ($(".showhide").is(":visible")) {
                $(".showhide").trigger("click");
            }
        });

        if ($.fn.onePageNav) {
            $(".op-nav").onePageNav({
                currentClass: "active"
            });
        }


        /*==============================================
         Sticky nav
         ===============================================*/
        function initSticky() {
            var $navbarSticky, navbarHeight, $brandLogo, centerLogoNormalHeight, centerLogoStickyHeight;
            $navbarSticky = $(".js-navbar-sticky").not(".l-navbar_s-left");
            navbarHeight = $navbarSticky.height();
            $brandLogo = $(".logo-brand");
            centerLogoNormalHeight = 100;
            centerLogoStickyHeight = 60;

            if ($navbarSticky.hasClass("l-navbar_s-center")) {
                $brandLogo.height(centerLogoNormalHeight);
            }

            $navbarSticky.sticky({
                className: "l-navbar-wrapper_has-sticky",
                wrapperClassName: "l-navbar-wrapper",
                zIndex: 10000,
                bottomSpacing: 100
            }).on("sticky-start", function() {
                if ($navbarSticky.hasClass("l-navbar_s-center")) {
                    $brandLogo.height(0);
                    setTimeout(function() {
                        $brandLogo.addClass("sticky-fix").height(centerLogoStickyHeight);
                    }, 300);
                }
            }).on("sticky-end", function () {
                $navbarSticky.parent().height(navbarHeight);
                if ($navbarSticky.hasClass("l-navbar_s-center")) {
                    $brandLogo.removeClass("sticky-fix").height(centerLogoNormalHeight);
                }
            });
        }
        initSticky();

        /*==============================================
         Flex slider init
         ===============================================*/
        $window.load(function () {
            $(".portfolio-slider").flexslider({
                animation: "slide",
                direction: "vertical",
                slideshowSpeed: 3000,
                start: function () {
                    imagesLoaded($(".portfolio"), function () {
                        setTimeout(function () {
                            $(".portfolio-filter li:eq(0) a").trigger("click");
                        }, 500);
                    });
                }
            });
        });

        $window.load(function () {
            $(".portfolio-slider-alt").flexslider({
                animation: "slide",
                direction: "horizontal",
                slideshowSpeed: 4000,
                start: function () {
                    imagesLoaded($(".portfolio"), function () {
                        setTimeout(function () {
                            $(".portfolio-filter li:eq(0) a").trigger("click");
                        }, 500);
                    });
                }
            });
        });

        $window.load(function () {
            $(".post-slider-thumb").flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
        });

        $window.load(function () {
            $(".post-slider").flexslider({
                animation: "slide"
                //slideshow: false
            });
        });

        $window.load(function () {
            $(".news-slider").flexslider({
                animation: "slide",
                slideshowSpeed: 3000
            });
        });


        /*==============================================
         Full screen banner init
         ===============================================*/
        $window.bind("resizeEnd", function () {
            $("#fullscreen-banner").height($window.height());
        });

        $window.resize(function () {
            if (this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function () {
                $(this).trigger("resizeEnd");
            }, 300);
        }).trigger("resize");


        /*==============================================
         Portfolio filterable grid init
         ===============================================*/
        /*var $portfolioGeneral = $(".portfolio:not(.portfolio-masonry)").isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows",
            filter: "*"
        });

        var $portfolioMasonry = $(".portfolio-masonry").isotope({
            itemSelector: ".portfolio-item",
            resizesContainer: false,
            layoutMode: "masonry",
            filter: "*"
        });

        if (typeof imagesLoaded == "function") {
            $portfolioGeneral.imagesLoaded().progress(function () {
                $portfolioGeneral.isotope("layout");
            });

            $portfolioMasonry.imagesLoaded().progress(function () {
                $portfolioMasonry.isotope("layout");
            });

            $portfolioGeneral.imagesLoaded().done(function() {
                setTimeout(function() {
                    $portfolioGeneral.isotope("layout");
                }, 400);
            });
            
            $portfolioMasonry.imagesLoaded().done(function() {
                setTimeout(function() {
                    $portfolioMasonry.isotope("layout");
                }, 400);
            });
        }*/

        if (typeof imagesLoaded == "function") {

            $(".portfolio:not(.portfolio-masonry)").imagesLoaded().progress(function(){
                $(".portfolio:not(.portfolio-masonry)").isotope({
                    itemSelector: ".portfolio-item",
                    layoutMode: "fitRows",
                    filter: "*"
                });
            });

            $(".portfolio-masonry").imagesLoaded().progress(function(){
                $(".portfolio-masonry").isotope({
                    itemSelector: ".portfolio-item",
                    resizesContainer: false,
                    layoutMode: "masonry",
                    filter: "*"
                });
            });
        }


        /*==============================================
         Portfolio filter nav
         ===============================================*/
        $(".portfolio-filter").on("click", "a", function (event) {
            event.preventDefault();
            var $this = $(this);
            $this.parent().addClass("active").siblings().removeClass("active");
            $this.parents(".text-center").next().isotope({filter: $this.data("filter")});
        });


        /*==============================================
         Portfolio item slider init
         ===============================================*/
        $(".portfolio-slider, .portfolio-slider-alt").each(function () { // the containers for all your galleries
            var _items = $(this).find("li > a");
            var items = [];
            for (var i = 0; i < _items.length; i++) {
                items.push({src: $(_items[i]).attr("href"), title: $(_items[i]).attr("title")});
            }
            $(this).parent().find(".action-btn").magnificPopup({
                items: items,
                type: "image",
                gallery: {
                    enabled: true
                }
            });
            $(this).parent().find(".portfolio-description").magnificPopup({
                items: items,
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });


        /*==============================================
         Portfolio popup gallery init
         ===============================================*/
        $(".portfolio-gallery").each(function () { // the containers for all your galleries
            $(this).find(".popup-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
            $(this).find(".popup-gallery2").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        });


        /*==============================================
         Progressbar init
         ===============================================*/
        var progressBar = $(".progress-bar");
        progressBar.each(function (indx) {
            $(this).data("animated", 0);
            if ($.fn.visible) {
                animateProgressbar(this);
            }
        });
        $window.on("scroll", function () {
            if ($.fn.visible) {
                progressBar.each(function () {
                    animateProgressbar(this);
                })
            }
        });

        function animateProgressbar(pb) {
            if ($(pb).data("animated") == 0) {
                if ($(pb).visible()) {
                    $(pb).css("width", $(pb).attr("aria-valuenow") + "%");
                    $(pb).data("animated", 1);
                }
            }
        }


        /*==============================================
         Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: "image"
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });


        /*==============================================
         Accordion init
         ===============================================*/
        var allPanels = $(".accordion > dd").hide();
        allPanels.first().slideDown("easeOutExpo");
        $(".accordion").each(function () {
            $(this).find("dt > a").first().addClass("active").parent().next().css({display: "block"});
        });

        $(".accordion > dt > a").click(function () {

            var current = $(this).parent().next("dd");
            $(this).parents(".accordion").find("dt > a").removeClass("active");
            $(this).addClass("active");
            $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;

        });


        /*==============================================
         Toggle init
         ===============================================*/
        var allToggles = $(".toggle > dd").hide();
        $(".toggle > dt > a").click(function () {

            if ($(this).hasClass("active")) {

                $(this).parent().next().slideUp("easeOutExpo");
                $(this).removeClass("active");

            }
            else {
                var current = $(this).parent().next("dd");
                $(this).addClass("active");
                $(this).parent().next().slideDown("easeOutExpo");
            }

            return false;
        });


        /*==============================================
         Career show/hide button
         ===============================================*/
        $(".show-detail").click(function (e) {
            $(this).next().slideToggle();
            e.preventDefault();
            $(this).css({opacity: 0})
        });

        $(".cancel-btn").click(function (e) {
            var prnt = $(this).parents(".career-details-info");
            prnt.slideToggle();
            e.preventDefault();
            $(prnt).prev().css({opacity: 1})
        });

        $(".career-details-info .apply-btn").on("click", function () {

        });


        /*==============================================
         Count to init
         ===============================================*/
        var timers = $(".timer");
        if ($.fn.countTo) {
            timers.each(function () {
                $(this).data("animated", 0);
                animateTimer(this);
            });
        }

        $window.on("scroll", function () {
            timers.each(function () {
                animateTimer(this);
            });
        });

        function animateTimer(timer) {
            if ($(timer).data("animated") == 0) {
                if ($.fn.visible && $(timer).visible()) {
                    $(timer).data("animated", 1);
                    $(timer).countTo();
                }
            }
        }


        /*==============================================
         Carousel init
         ===============================================*/
        if ($.fn.owlCarousel) {
            $("#clients-1").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 6,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });

            $("#testimonial-2").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-3").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-4").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#testimonial-5").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 1
            });

            $("#carousel-object").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1
                //pagination : false
            });

            $("#owl-slider").owlCarousel({
                autoPlay: 4000, //Set AutoPlay to 3 seconds
                items: 1,
                navigation: true,
                //pagination : false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });

            $("#img-carousel").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });

            $("#portfolio-carousel").owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation: true,
                pagination: false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

            });

            $("#portfolio-carousel-alt").owlCarousel({
                autoPlay: false, //Set AutoPlay to 3 seconds
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation: true,
                pagination: false,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        }

        $(".portfolio-with-title").addClass("portfolio");


        /*==============================================
         Typist init
         ===============================================*/
        if (typeof Typist == "function") {
            new Typist(document.querySelector(".typist-element"), {
                letterInterval: 60,
                textInterval: 3000
            });
        }


        /*==============================================
         Back to top init
         ===============================================*/
        $body.append("<a data-scroll class='lift-off js-lift-off lift-off_hide' href='#'><i class='fa fa-angle-up'></i></a>");

        var $liftOff = $(".js-lift-off");
        $window.on("scroll", function () {
            if ($window.scrollTop() > 150) {
                $liftOff.addClass("lift-off_show").removeClass("lift-off_hide");
            } else {
                $liftOff.addClass("lift-off_hide").removeClass("lift-off_show");
            }
        });


        /*==============================================
         Mailchip init
         ===============================================*/
        if ($.fn.ajaxChimp) {
            $(".mailchimp").ajaxChimp({
                /**
                 * Example mailchimp url
                 * //blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9"
                 */
                url: "paste mailchimp url"
            });
        }


        /*==============================================
         Contact form
         ===============================================*/
        initMailer();

    });

    function initMailer() {
        if (!$.fn.validator) {
            return;
        }

        $(".js-Mailer").validator().on("submit", function(e) {
            var $form     = $(this),
                $btn      = $form.find("[type='submit']"),
                $response = $("<div />", {
                    "class": "alert js-Response",
                    "style": "margin-top: 20px; display:none"
                    });

            if (!$form.data("isready")) {
                $btn.after($response);
                $form.data("isready", true);
            }

            if (e.isDefaultPrevented()) {
                return;
            }
            e.preventDefault();

            $.post(
                "mailer/mailer.php",
                $form.serialize()
            ).done(function(r) {
                var $rHolder = $form.find(".js-Response");
                if (r.success) {
                    showMailerResponse($rHolder, "Your message has been sent.");
                } else {
                    showMailerResponse($rHolder, "There is something wrong, try again!", "warning");
                }
            }).fail(function() {
                showMailerResponse($form.find(".js-Response"), "There is something wrong, try again!", "warning");
            })
        });
    }

    function showMailerResponse($holder, rMessage, rType) {
        var rClass = "alert-warning",
            aClass = "alert-success",
            SPEED  = 1000;

        rType = rType || "success";

        if (rType === "warning") {
            rClass = "alert-success",
            aClass = "alert-warning";
        }

        $holder
            .removeClass(rClass)
            .addClass(aClass)
            .text(rMessage)
            .slideDown()
            .delay(SPEED)
            .slideUp();
    }

})(jQuery);
