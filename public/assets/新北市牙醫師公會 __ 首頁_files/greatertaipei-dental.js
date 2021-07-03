$(document).ready(function() {
    "use strict";

    $("#gotop").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 800);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });

    $('.navbar__controller-item.fssm').on('click', function(e) {
        $('body').removeClass('body-fs--md');
        $('body').removeClass('body-fs--lg');
        $('.navbar__controller-item').removeClass('navbar__controller-item--active');
        $('.navbar__controller-item.fssm').addClass('navbar__controller-item--active');
    });

    $('.navbar__controller-item.fsmd').on('click', function(e) {
        $('body').removeClass('body-fs--lg');
        $('body').addClass('body-fs--md');
        $('.navbar__controller-item').removeClass('navbar__controller-item--active');
        $('.navbar__controller-item.fsmd').addClass('navbar__controller-item--active');
    });

    $('.navbar__controller-item.fslg').on('click', function(e) {
        $('body').removeClass('body-fs--md');
        $('body').addClass('body-fs--lg');
        $('.navbar__controller-item').removeClass('navbar__controller-item--active');
        $('.navbar__controller-item.fslg').addClass('navbar__controller-item--active');
    });



    //ALL PAGES-header START--->
    if ($('.header').length > 0) {

        $(".navbar__toggle").on('click', function(e) {
            // e.stopImmediatePropagation();
            if ($(this).hasClass("navbar__toggle--open") == false) { //opened
                $(this).addClass("navbar__toggle--open");
                $(".header").addClass("header--open"); //for pc
                $(".navbar__body").addClass("navbar__body--open"); //for moblie

            } else { //close
                $(this).removeClass("navbar__toggle--open");
                $(".header").removeClass("header--open"); //for pc
                $(".navbar__body").removeClass("navbar__body--open"); //for moblie
            }
        });



        //navbar__logo 視窗高度改變時。logo跟著變
        var navheader_h = $(".navbar__header").height(),
            logobox_h = $(".navbar__logo").height(),
            navbottom_h = $(".navbar__bottom").height(),
            safe_h = logobox_h + navbottom_h + 40;
        if (safe_h >= navheader_h) {
            $(".navbar__logo .navbar__logo-img").css({
                height: navheader_h - navbottom_h - 40
            });
        } else {
            $(".navbar__logo .navbar__logo-img").removeAttr("style");
        }

        //navbar>body時 可以scroll
        var navbody_h = $(".navbar__body").height(),
            navitem_h = $(".navbar__item").height(),
            navitem_qty = $(".navbar__item").length,
            navitem_total_h = navitem_h * navitem_qty;

        if (navitem_total_h >= navbody_h - 150) {
            $(".navbar__body").addClass("navbar__body--scroll");
        } else {
            $(".navbar__body").removeClass("navbar__body--scroll");
        }



        $(window).on('resize', function() {
            //navbar__logo 視窗高度改變時。logo跟著變
            var navheader_h = $(".navbar__header").height(),
                logobox_h = $(".navbar__logo").height(),
                navbottom_h = $(".navbar__bottom").height(),
                safe_h = logobox_h + navbottom_h + 40;


            if (safe_h >= navheader_h) {
                $(".navbar__logo .navbar__logo-img").css({
                    height: navheader_h - navbottom_h - 40
                });
            } else {
                $(".navbar__logo .navbar__logo-img").removeAttr("style");
            }


            //navbar>body時 可以scroll
            var navbody_h = $(".navbar__body").height(),
                navitem_h = $(".navbar__item").height(),
                navitem_qty = $(".navbar__item").length,
                navitem_total_h = navitem_h * navitem_qty;

            if (navitem_total_h >= navbody_h - 150) {
                $(".navbar__body").addClass("navbar__body--scroll");
            } else {
                $(".navbar__body").removeClass("navbar__body--scroll");
            }

        });
    } //<---(ALL-header) END




    //INDEX-slider START--->
    if ($('.indexslider').length > 0) {
        $('.indexslider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: true
        });
    } //<---(INDEX-slider) END




    //CONTACT-tabs START--->
    if ($('.indexnewstabs__nav-link').length > 0) {
        $('.indexnewstabs__nav-link').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('.indexnewstabs__nav-link').removeClass('indexnewstabs__nav-link--active');
            $('.indexnewstabs__content').removeClass('indexnewstabs__content--active');

            $(this).addClass('indexnewstabs__nav-link--active');
            $("#" + tab_id).addClass('indexnewstabs__content--active');
        })
    } //<---(CONTACT-tabs) END





    //INDEX-本會介紹slider START--->
    if ($('.indexabout-nav').length > 0) {
        $('.indexabout-contant').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            infinite: true,
            asNavFor: '.indexabout-nav'
        });

        var ia_Show = 5;
        var ia_child = $('.indexabout-nav__item').length;


        if (ia_child <= 3) {
            ia_Show = 1;
        }
        if (ia_child <= 5 && ia_child > 3) {
            ia_Show = 3;
        }

        $('.indexabout-nav').slick({
            slidesToShow: ia_Show,
            slidesToScroll: 1,
            centerPadding: '0px',
            centerMode: true,
            infinite: true,
            asNavFor: '.indexabout-contant',
            // focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        if (ia_child > 3) {

            $(".indexabout-nav .slick-current").removeClass('indexabout-nav__item--filter');


            //autoplay時
            $('.indexabout-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                $(".indexabout-nav .slick-slide").addClass('indexabout-nav__item--filter');
                $('.indexabout-nav .slick-center').next().removeClass('indexabout-nav__item--filter');
            });


            //手動 next prev
            $(".indexabout-contant .slick-prev,.indexabout-contant .slick-next").on("click", function() {
                $(".indexabout-nav .slick-active").addClass('indexabout-nav__item--filter');
                $('.indexabout-nav .slick-current').removeClass('indexabout-nav__item--filter');
            })
            //手動 swipe
            $('.indexabout-nav,.indexabout-contant').on('swipe', function(event, slick, direction) {
                $(".indexabout-nav .slick-active").addClass('indexabout-nav__item--filter');
                $('.indexabout-nav .slick-current').removeClass('indexabout-nav__item--filter');
            });

        } else if (ia_child <= 3) {
            $(".indexabout-nav__item").removeClass('indexabout-nav__item--filter');
        }




    } //<---(INDEX-本會介紹slider) END




    //INDEX-學會特色slider START--->
    if ($('.indexfeatures-block').length > 0) {
        $('.indexfeatures-block').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            // infinite: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    } //<---(INDEX-本學會特色slider) END








    //INDEX-tabs START--->
    if ($('.indexactivitytabs__nav-link').length > 0) {
        $('.indexactivitytabs__nav-link').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('.indexactivitytabs__nav-link').removeClass('indexactivitytabs__nav-link--active');
            $('.indexactivitytabs__content').removeClass('indexactivitytabs__content--active');

            $(this).addClass('indexactivitytabs__nav-link--active');
            $("#" + tab_id).addClass('indexactivitytabs__content--active');




            var tab2_Show = 8;
            var tab2_child = $("#" + tab_id + ' .indexactivitytabs__item').length;


            if (tab2_child > 0) {
                tab2_Show = 4;
            }
            if (tab2_child >= 4) {
                tab2_Show = tab2_child;
            }


            $('#' + tab_id + ' .indexactivitytabs-block').not('.slick-initialized').slick({
                slidesToShow: tab2_Show,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                dots: false,
                responsive: [{
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 3
                        }
                    }, {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });

            $('#' + tab_id + ' .indexactivitytabs-block').slick('setPosition'); // slick



        })
    } //<---(INDEX-tabs) END


    //INDEX-活動主題tab-scrollbar START--->
    if ($('.indexactivitytabs__nav').length > 0) {
        $(".indexactivitytabs__nav").mCustomScrollbar({
            axis: "x",
            theme: "minimal-dark",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    } //<---(INDEX-活動主題tab scrollbar) END


    //INDEX-活動主題slider START--->
    if ($('.indexactivitytabs-block').length > 0) {


        var tab1_Show = 8;
        var tab1_child = $('#indexactivitytabs-1 .indexactivitytabs-block .indexactivitytabs__item').length;


        if (tab1_child > 0) {
            tab1_Show = 4;
        }
        if (tab1_child > 4) {
            tab1_Show = tab1_child;
        }



        $('#indexactivitytabs-1 .indexactivitytabs-block').slick({
            slidesToShow: tab1_Show,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    } //<---(INDEX-活動主題slider) END



    //ABOUT-tabs START--->
    // if ($('.abouttabs__nav-link').length > 0) {
    //     $('.abouttabs__nav-link').click(function() {
    //         var tab_id = $(this).attr('data-tab');

    //         $('.abouttabs__nav-link').removeClass('abouttabs__nav-link--active');
    //         $('.abouttabs__content').removeClass('abouttabs__content--active');

    //         $(this).addClass('abouttabs__nav-link--active');
    //         $("#" + tab_id).addClass('abouttabs__content--active');


    //         $('.abouttabs-block').slick('setPosition'); // slick
    //     })
    // } //<---(ABOUT-tabs) END




    //ABOUT-tab-scrollbar START--->
    if ($('.abouttabs__nav').length > 0) {
        $(".abouttabs__nav").mCustomScrollbar({
            axis: "x",
            theme: "minimal-dark",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    } //<---(ABOUT-tab scrollbar) END


    //ABOUT- 理事長的話 slider START--->
    if ($('.about-content').length > 0) {


        $('.about-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true
            // asNavFor: '.about-nav'
        });
        // $('.about-nav').slick({
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     centerPadding: '0px',
        //     asNavFor: '.about-content',
        //     focusOnSelect: true,
        //     autoplay: true,
        //     autoplaySpeed: 3000,
        //     infinite: false,
        //     arrows: true,
        //     dots: false,
        //     responsive: [{
        //             breakpoint: 1200,
        //             settings: {
        //                 slidesToShow: 3
        //             }
        //         },
        //         {
        //             breakpoint: 768,
        //             settings: {
        //                 slidesToShow: 2
        //             }
        //         },
        //         {
        //             breakpoint: 480,
        //             settings: {
        //                 slidesToShow: 1
        //             }
        //         }
        //     ]
        // });
    } //<---(ABOUT-理事長的話 slider) END

    //ABOUT-map START--->
    if ($('.about-map__box').length > 0) {
        var latlng = new google.maps.LatLng(25.017336, 121.479445);
        var myOptions = {
            scrollwheel: false,
            zoom: 15,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        };
        var map = new google.maps.Map(document.getElementById("about-map"), myOptions);



        var myMarker = new google.maps.Marker({
            // position: map.getCenter(),
            position: latlng,
            // center: latlng,
            map: map,
            title: "社團法人新北市牙醫師公會"
        });
    } //<---(ABOUT-map) END


    //ABOUT-歷屆理事長芳名錄 slider START--->
    if ($('.about-directory__imgbox').length > 1) {

        var adall_qty = $(this).find('.about-directory__item').length;

        for (var i = 0; i < adall_qty; i++) {
            var temp_i = i + 1;
            $('.about-directory__item').eq(i).children('.about-directory__slider').addClass('about-directory__slider' + temp_i);

            var ad_dot = false;
            if ($('.about-directory__slider' + temp_i).children().length > 1) {
                ad_dot = true;
            }

            $('.about-directory__slider' + temp_i).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: ad_dot,
                arrows: false
            });
        }


    } //<---(ABOUT- 歷屆理事長芳名錄 slider) END



    //NEWS-最新消息 START--->
    if ($('.newstabs__nav-link').length > 0) {

        $(".newstabs__nav-search").on('click', function(e) {
            $('.newstabs__search').addClass('newstabs__search--active');
            $(this).closest('.newstabs__nav').addClass('newstabs__nav--none');
        });
        $(".newstabs__search-btn").on('click', function(e) {
            $('.newstabs__search').removeClass('newstabs__search--active');
            $('.newstabs__nav').removeClass('newstabs__nav--none');
        });


    } //<---(NEWS-newstabs__nav) END


    //NEWS-tab-scrollbar START--->
    if ($('.newstabs__nav').length > 0) {
        $(".newstabs__nav").mCustomScrollbar({
            axis: "x",
            theme: "minimal-dark",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    } //<---(NEWS-tab scrollbar) END






    //NEWSINSIDE-CKeditor setting START--->
    if ($('.newsinside-body').length > 0) {


        //iframe resize
        $(window).on("load resize", function(e) {
            var faqwidth = $(".newsinside-body").width();
            var iframewidth = $(".newsinside-body iframe").width();
            var imgwidth = $(".newsinside-body img").width();

            $(".newsinside-body iframe").each(function() {
                $(this).attr({
                    width: faqwidth,
                });
            });

            //img js seetting
            // $(".newsinside-body img").each(function() {
            //     $(this).attr({
            //         width: faqwidth,
            //         height: ""
            //     });
            // });

            $('.newsinside-body').find('a').attr('target', '_blank');

            $('.newsinside-body').find('table').wrap('<div class="newsinside-body--scroll"></div>');
            $('.newsinside-body--scroll').mCustomScrollbar({
                theme: "minimal",
                axis: 'x',
                advanced: {
                    autoExpandHorizontalScroll: true
                }
            });
        });

    } //<---(NEWSINSIDE-CKeditor setting) END



    //ABOUT-tab-scrollbar START--->
    if ($('.about-charter__body').length > 0) {
        $(".about-charter__body").mCustomScrollbar({
            axis: "y",
            theme: "minimal-dark",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    } //<---(ABOUT-tab scrollbar) END




    //NEWSINSIDE-CKeditor setting START--->
    if ($('.activityinside__item-body').length > 0) {


        //iframe resize
        $(window).on("load resize", function(e) {
            var faqwidth = $(".activityinside__item-body").width();
            var iframewidth = $(".activityinside__item-body iframe").width();
            var imgwidth = $(".activityinside__item-body img").width();

            $(".activityinside__item-body iframe").each(function() {
                $(this).attr({
                    width: faqwidth,
                });
            });

            //img js seetting
            // $(".activityinside__item-body img").each(function() {
            //     $(this).attr({
            //         width: faqwidth,
            //         height: ""
            //     });
            // });

            $('.activityinside__item-body').find('a').attr('target', '_blank');

            $('.activityinside__item-body').find('table').wrap('<div class="activityinside__item-body--scroll"></div>');
            $('.activityinside__item-body--scroll').mCustomScrollbar({
                theme: "minimal",
                axis: 'x',
                advanced: {
                    autoExpandHorizontalScroll: true
                }
            });
        });

    } //<---(NEWSINSIDE-CKeditor setting) END


    //ACTIVITYINSIDE-activityinside-bottom__nav a scroll to div----->
    $(document).ready(function() {
        $('.activityinside-bottom__nav a[href^="#"]').on('click', function(e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing');
        });
    }); //<----(ACTIVITYINSIDE- scroll) END


    //FORM----->
    if ($('.form-item').length > 0) {

        //focus cancel error msg
        $(".form-item__input").focus(function() {
            $(this).closest('.form-item').removeClass('form-item--active');
        });
        $(".form-item__select").focus(function() {
            $(this).closest('.form-item').removeClass('form-item--active');
        });
        $(".form-item__checkbox").focus(function() {
            $(this).closest('.form-item').removeClass('form-item--active');
        });
        $('input').focus(function() {
            $(this).closest('.form-item').removeClass('form-item--active');
        })

        //聯絡地址selectbox
        $('#form-city').on('change', function() {

            var city = $(this),
                region = $('#form-township');

            if (city.val() == '0') {
                region.attr('disabled', '');
                region.html('');
            } else {
                region.removeAttr('disabled');
            }

            if (city.val() == '基隆市') {
                region.html('<option value="仁愛區" selected="">仁愛區</option> <option value="信義區">信義區</option><option value="中正區">中正區</option><option value="中山區">中山區</option><option value="安樂區">安樂區</option><option value="暖暖區">暖暖區</option><option value="七堵區">七堵區</option>');
            }

            if (city.val() == '臺北市') {
                region.html('<option value="中正區" selected="">中正區</option> <option value="大同區">大同區</option><option value="中山區">中山區</option><option value="松山區">松山區</option><option value="大安區">大安區</option><option value="萬華區">萬華區</option><option value="信義區">信義區</option><option value="士林區">士林區</option><option value="北投區">北投區</option><option value="內湖區">內湖區</option><option value="南港區">南港區</option><option value="文山區">文山區</option>');
            }

            if (city.val() == '新北市') {
                region.html('<option value="萬里區" selected="">萬里區</option> <option value="金山區">金山區</option><option value="板橋區">板橋區</option><option value="汐止區">汐止區</option><option value="深坑區">深坑區</option><option value="石碇區">石碇區</option><option value="瑞芳區">瑞芳區</option><option value="平溪區">平溪區</option><option value="雙溪區">雙溪區</option><option value="貢寮區">貢寮區</option><option value="新店區">新店區</option><option value="坪林區">坪林區</option><option value="烏來區">烏來區</option><option value="永和區">永和區</option><option value="中和區">中和區</option><option value="土城區">土城區</option><option value="三峽區">三峽區</option><option value="樹林區">樹林區</option><option value="鶯歌區">鶯歌區</option><option value="三重區">三重區</option><option value="新莊區">新莊區</option><option value="泰山區">泰山區</option><option value="林口區">林口區</option><option value="蘆洲區">蘆洲區</option><option value="五股區">五股區</option><option value="八里區">八里區</option><option value="淡水區">淡水區</option><option value="三芝區">三芝區</option><option value="石門區">石門區</option>');
            }

            if (city.val() == '桃園市') {
                region.html('<option value="中壢區" selected="">中壢區</option> <option value="平鎮區">平鎮區</option><option value="龍潭區">龍潭區</option><option value="楊梅區">楊梅區</option><option value="新屋區">新屋區</option><option value="觀音區">觀音區</option><option value="桃園區">桃園區</option><option value="龜山區">龜山區</option><option value="八德區">八德區</option><option value="大溪區">大溪區</option><option value="復興區">復興區</option><option value="大園區">大園區</option><option value="蘆竹區">蘆竹區</option>');
            }

            if (city.val() == '新竹市') {
                region.html('<option value="東區" selected="">東區</option> <option value="北區">北區</option><option value="香山區">香山區</option>');
            }

            if (city.val() == '新竹縣') {
                region.html('<option value="竹北市" selected="">竹北市</option> <option value="湖口鄉">湖口鄉</option><option value="新豐鄉">新豐鄉</option><option value="新埔鎮">新埔鎮</option><option value="關西鎮">關西鎮</option><option value="芎林鄉">芎林鄉</option><option value="寶山鄉">寶山鄉</option><option value="竹東鎮">竹東鎮</option><option value="五峰鄉">五峰鄉</option><option value="橫山鄉">橫山鄉</option><option value="尖石鄉">尖石鄉</option><option value="北埔鄉">北埔鄉</option><option value="峨眉鄉">峨眉鄉</option>');
            }

            if (city.val() == '苗栗縣') {
                region.html('<option value="竹南鎮" selected="">竹南鎮</option> <option value="頭份市">頭份市</option><option value="三灣鄉">三灣鄉</option><option value="南庄鄉">南庄鄉</option><option value="獅潭鄉">獅潭鄉</option><option value="後龍鎮">後龍鎮</option><option value="通霄鎮">通霄鎮</option><option value="苑裡鎮">苑裡鎮</option><option value="苗栗市">苗栗市</option><option value="造橋鄉">造橋鄉</option><option value="頭屋鄉">頭屋鄉</option><option value="公館鄉">公館鄉</option><option value="大湖鄉">大湖鄉</option><option value="泰安鄉">泰安鄉</option><option value="銅鑼鄉">銅鑼鄉</option><option value="三義鄉">三義鄉</option><option value="西湖鄉">西湖鄉</option><option value="卓蘭鎮">卓蘭鎮</option>');
            }

            if (city.val() == '臺中市') {
                region.html('<option value="中區" selected="">中區</option> <option value="東區">東區</option><option value="南區">南區</option><option value="西區">西區</option><option value="北區">北區</option><option value="北屯區">北屯區</option><option value="西屯區">西屯區</option><option value="南屯區">南屯區</option><option value="太平區">太平區</option><option value="大里區">大里區</option><option value="霧峰區">霧峰區</option><option value="烏日區">烏日區</option><option value="豐原區">豐原區</option><option value="后里區">后里區</option><option value="石岡區">石岡區</option><option value="東勢區">東勢區</option><option value="和平區">和平區</option><option value="新社區">新社區</option><option value="潭子區">潭子區</option><option value="大雅區">大雅區</option><option value="神岡區">神岡區</option><option value="大肚區">大肚區</option><option value="沙鹿區">沙鹿區</option><option value="龍井區">龍井區</option><option value="梧棲區">梧棲區</option><option value="清水區">清水區</option><option value="大甲區">大甲區</option><option value="外埔區">外埔區</option><option value="大安區">大安區</option>');
            }

            if (city.val() == '彰化縣') {
                region.html('<option value="彰化市" selected="">彰化市</option> <option value="芬園鄉">芬園鄉</option><option value="花壇鄉">花壇鄉</option><option value="秀水鄉">秀水鄉</option><option value="鹿港鎮">鹿港鎮</option><option value="福興鄉">福興鄉</option><option value="線西鄉">線西鄉</option><option value="和美鎮">和美鎮</option><option value="伸港鄉">伸港鄉</option><option value="員林市">員林市</option><option value="社頭鄉">社頭鄉</option><option value="永靖鄉">永靖鄉</option><option value="埔心鄉">埔心鄉</option><option value="溪湖鎮">溪湖鎮</option><option value="大村鄉">大村鄉</option><option value="埔鹽鄉">埔鹽鄉</option><option value="田中鎮">田中鎮</option><option value="北斗鎮">北斗鎮</option><option value="田尾鄉">田尾鄉</option><option value="埤頭鄉">埤頭鄉</option><option value="溪州鄉">溪州鄉</option><option value="竹塘鄉">竹塘鄉</option><option value="二林鎮">二林鎮</option><option value="大城鄉">大城鄉</option><option value="芳苑鄉">芳苑鄉</option><option value="二水鄉">二水鄉</option>');
            }

            if (city.val() == '南投縣') {
                region.html('<option value="南投市" selected="">南投市</option> <option value="中寮鄉">中寮鄉</option><option value="草屯鎮">草屯鎮</option><option value="國姓鄉">國姓鄉</option><option value="埔里鎮">埔里鎮</option><option value="仁愛鄉">仁愛鄉</option><option value="名間鄉">名間鄉</option><option value="集集鎮">集集鎮</option><option value="水里鄉">水里鄉</option><option value="魚池鄉">魚池鄉</option><option value="信義鄉">信義鄉</option><option value="竹山鎮">竹山鎮</option><option value="鹿谷鄉">鹿谷鄉</option>');
            }

            if (city.val() == '雲林縣') {
                region.html('<option value="斗南鎮" selected="">斗南鎮</option> <option value="大埤鄉">大埤鄉</option><option value="虎尾鎮">虎尾鎮</option><option value="土庫鎮">土庫鎮</option><option value="褒忠鄉">褒忠鄉</option><option value="東勢鄉">東勢鄉</option><option value="臺西鄉">臺西鄉</option><option value="崙背鄉">崙背鄉</option><option value="麥寮鄉">麥寮鄉</option><option value="斗六市">斗六市</option><option value="林內鄉">林內鄉</option><option value="古坑鄉">古坑鄉</option><option value="莿桐鄉">莿桐鄉</option><option value="西螺鎮">西螺鎮</option><option value="二崙鄉">二崙鄉</option><option value="北港鎮">北港鎮</option><option value="水林鄉">水林鄉</option><option value="口湖鄉">口湖鄉</option><option value="四湖鄉">四湖鄉</option><option value="元長鄉">元長鄉</option>');
            }

            if (city.val() == '嘉義市') {
                region.html('<option value="東區" selected="">東區</option> <option value="西區">西區</option>');
            }

            if (city.val() == '嘉義縣') {
                region.html('<option value="番路鄉" selected="">番路鄉</option> <option value="梅山鄉">梅山鄉</option><option value="竹崎鄉">竹崎鄉</option><option value="阿里山鄉">阿里山鄉</option><option value="中埔鄉">中埔鄉</option><option value="大埔鄉">大埔鄉</option><option value="水上鄉">水上鄉</option><option value="鹿草鄉">鹿草鄉</option><option value="太保市">太保市</option><option value="朴子市">朴子市</option><option value="東石鄉">東石鄉</option><option value="六腳鄉">六腳鄉</option><option value="新港鄉">新港鄉</option><option value="民雄鄉">民雄鄉</option><option value="大林鎮">大林鎮</option><option value="溪口鄉">溪口鄉</option><option value="義竹鄉">義竹鄉</option><option value="布袋鎮">布袋鎮</option>');
            }

            if (city.val() == '臺南市') {
                region.html('<option value="中西區" selected="">中西區</option> <option value="東區">東區</option><option value="南區">南區</option><option value="北區">北區</option><option value="安平區">安平區</option><option value="安南區">安南區</option><option value="永康區">永康區</option><option value="歸仁區">歸仁區</option><option value="新化區">新化區</option><option value="左鎮區">左鎮區</option><option value="玉井區">玉井區</option><option value="楠西區">楠西區</option><option value="南化區">南化區</option><option value="仁德區">仁德區</option><option value="關廟區">關廟區</option><option value="龍崎區">龍崎區</option><option value="官田區">官田區</option><option value="麻豆區">麻豆區</option><option value="佳里區">佳里區</option><option value="西港區">西港區</option><option value="七股區">七股區</option><option value="將軍區">將軍區</option><option value="學甲區">學甲區</option><option value="北門區">北門區</option><option value="新營區">新營區</option><option value="後壁區">後壁區</option><option value="白河區">白河區</option><option value="東山區">東山區</option><option value="六甲區">六甲區</option><option value="下營區">下營區</option><option value="柳營區">柳營區</option><option value="鹽水區">鹽水區</option><option value="善化區">善化區</option><option value="大內區">大內區</option><option value="山上區">山上區</option><option value="新市區">新市區</option><option value="安定區">安定區</option>');
            }

            if (city.val() == '高雄市') {
                region.html('<option value="新興區" selected="">新興區</option> <option value="前金區">前金區</option><option value="苓雅區">苓雅區</option><option value="鹽埕區">鹽埕區</option><option value="鼓山區">鼓山區</option><option value="旗津區">旗津區</option><option value="前鎮區">前鎮區</option><option value="三民區">三民區</option><option value="楠梓區">楠梓區</option><option value="小港區">小港區</option><option value="左營區">左營區</option><option value="仁武區">仁武區</option><option value="大社區">大社區</option><option value="東沙群島">東沙群島</option><option value="南沙群島">南沙群島</option><option value="岡山區">岡山區</option><option value="路竹區">路竹區</option><option value="阿蓮區">阿蓮區</option><option value="田寮區">田寮區</option><option value="燕巢區">燕巢區</option><option value="橋頭區">橋頭區</option><option value="梓官區">梓官區</option><option value="彌陀區">彌陀區</option><option value="永安區">永安區</option><option value="湖內區">湖內區</option><option value="鳳山區">鳳山區</option><option value="大寮區">大寮區</option><option value="林園區">林園區</option><option value="鳥松區">鳥松區</option><option value="大樹區">大樹區</option><option value="旗山區">旗山區</option><option value="美濃區">美濃區</option><option value="六龜區">六龜區</option><option value="內門區">內門區</option><option value="杉林區">杉林區</option><option value="甲仙區">甲仙區</option><option value="桃源區">桃源區</option><option value="那瑪夏區">那瑪夏區</option><option value="茂林區">茂林區</option><option value="茄萣區">茄萣區</option>');
            }

            if (city.val() == '屏東縣') {
                region.html('<option value="屏東市" selected="">屏東市</option> <option value="三地門鄉">三地門鄉</option><option value="霧臺鄉">霧臺鄉</option><option value="瑪家鄉">瑪家鄉</option><option value="九如鄉">九如鄉</option><option value="里港鄉">里港鄉</option><option value="高樹鄉">高樹鄉</option><option value="鹽埔鄉">鹽埔鄉</option><option value="長治鄉">長治鄉</option><option value="麟洛鄉">麟洛鄉</option><option value="竹田鄉">竹田鄉</option><option value="內埔鄉">內埔鄉</option><option value="萬丹鄉">萬丹鄉</option><option value="潮州鎮">潮州鎮</option><option value="泰武鄉">泰武鄉</option><option value="來義鄉">來義鄉</option><option value="萬巒鄉">萬巒鄉</option><option value="崁頂鄉">崁頂鄉</option><option value="新埤鄉">新埤鄉</option><option value="南州鄉">南州鄉</option><option value="林邊鄉">林邊鄉</option><option value="東港鎮">東港鎮</option><option value="琉球鄉">琉球鄉</option><option value="佳冬鄉">佳冬鄉</option><option value="新園鄉">新園鄉</option><option value="枋寮鄉">枋寮鄉</option><option value="枋山鄉">枋山鄉</option><option value="春日鄉">春日鄉</option><option value="獅子鄉">獅子鄉</option><option value="車城鄉">車城鄉</option><option value="牡丹鄉">牡丹鄉</option><option value="恆春鎮">恆春鎮</option><option value="滿州鄉">滿州鄉</option>');
            }

            if (city.val() == '臺東縣') {
                region.html('<option value="臺東市" selected="">臺東市</option> <option value="綠島鄉">綠島鄉</option><option value="蘭嶼鄉">蘭嶼鄉</option><option value="延平鄉">延平鄉</option><option value="卑南鄉">卑南鄉</option><option value="鹿野鄉">鹿野鄉</option><option value="關山鎮">關山鎮</option><option value="海端鄉">海端鄉</option><option value="池上鄉">池上鄉</option><option value="東河鄉">東河鄉</option><option value="成功鎮">成功鎮</option><option value="長濱鄉">長濱鄉</option><option value="太麻里鄉">太麻里鄉</option><option value="金峰鄉">金峰鄉</option><option value="大武鄉">大武鄉</option><option value="達仁鄉">達仁鄉</option>');
            }

            if (city.val() == '花蓮縣') {
                region.html('<option value="花蓮市" selected="">花蓮市</option> <option value="新城鄉">新城鄉</option><option value="秀林鄉">秀林鄉</option><option value="吉安鄉">吉安鄉</option><option value="壽豐鄉">壽豐鄉</option><option value="鳳林鎮">鳳林鎮</option><option value="光復鄉">光復鄉</option><option value="豐濱鄉">豐濱鄉</option><option value="瑞穗鄉">瑞穗鄉</option><option value="萬榮鄉">萬榮鄉</option><option value="玉里鎮">玉里鎮</option><option value="卓溪鄉">卓溪鄉</option><option value="富里鄉">富里鄉</option>');
            }

            if (city.val() == '宜蘭縣') {
                region.html('<option value="宜蘭市" selected="">宜蘭市</option> <option value="頭城鎮">頭城鎮</option><option value="礁溪鄉">礁溪鄉</option><option value="壯圍鄉">壯圍鄉</option><option value="員山鄉">員山鄉</option><option value="羅東鎮">羅東鎮</option><option value="三星鄉">三星鄉</option><option value="大同鄉">大同鄉</option><option value="五結鄉">五結鄉</option><option value="冬山鄉">冬山鄉</option><option value="蘇澳鎮">蘇澳鎮</option><option value="南澳鄉">南澳鄉</option><option value="釣魚臺">釣魚臺</option>');
            }

            if (city.val() == '澎湖縣') {
                region.html('<option value="馬公市" selected="">馬公市</option> <option value="西嶼鄉">西嶼鄉</option><option value="望安鄉">望安鄉</option><option value="七美鄉">七美鄉</option><option value="白沙鄉">白沙鄉</option><option value="湖西鄉">湖西鄉</option>');
            }

            if (city.val() == '金門縣') {
                region.html('<option value="金沙鎮" selected="">金沙鎮</option> <option value="金湖鎮">金湖鎮</option><option value="金寧鄉">金寧鄉</option><option value="金城鎮">金城鎮</option><option value="烈嶼鄉">烈嶼鄉</option><option value="烏坵鄉">烏坵鄉</option>');
            }

            if (city.val() == '連江縣') {
                region.html('<option value="南竿鄉" selected="">南竿鄉</option> <option value="北竿鄉">北竿鄉</option><option value="莒光鄉">莒光鄉</option><option value="東引鄉">東引鄉</option>');
            }

        });
    } //<---- END




    //DOWNLOAD-nav-scrollbar START--->
    if ($('.download-nav').length > 0) {
        if (window.matchMedia('(max-width: 991px)').matches) {
            $(".download-nav").mCustomScrollbar({
                axis: "x",
                theme: "minimal-dark",
                advanced: {
                    autoExpandHorizontalScroll: true
                }
            });
        }
    }
    //<---(DOWNLOAD-download scrollbar) END


    //CONTACT-form START--->
    if ($('.contactform-item').length > 0) {

        //focus cancel error msg
        $(".contactform-item__input").focus(function() {
            $(this).closest('.contactform-item').removeClass('contactform-item--active');
        });
        $(".contactform-item__textarea").focus(function() {
            $(this).closest('.contactform-item').removeClass('contactform-item--active');
        });
    } //<---(CONTACT-form) END



    //ABOUT-map START--->
    if ( typeof(google) != 'undefined' ) {
        if ($('.contact-map').length > 0) {

            var latlng = new google.maps.LatLng(25.017336, 121.479445);
            var myOptions = {
                scrollwheel: false,
                zoom: 15,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#e9e9e9"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#dedede"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [{
                                "saturation": 36
                            },
                            {
                                "color": "#333333"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#f2f2f2"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    }
                ]
            };
            var map = new google.maps.Map(document.getElementById("contact-map"), myOptions);



            var myMarker = new google.maps.Marker({
                // position: map.getCenter(),
                position: latlng,
                // center: latlng,
                map: map,
                title: "社團法人新北市牙醫師公會"
            });
        } 
    }
    //<---(ABOUT-map) END




    //LOGIN-form START--->
    if ($('.loginform-item').length > 0) {

        //focus cancel error msg
        $(".loginform-item__input").focus(function() {
            $(this).closest('.loginform-item').removeClass('loginform-item--active');
        });
    } //<---(LOGIN-form) END


    //REGISTER-form START--->
    if ($('.register-item').length > 0) {
        //focus cancel error msg
        $(".register-item__input").focus(function() {
            $(this).closest('.register-item').removeClass('register-item--active');
        });
        $(".register-item__select").focus(function() {
            $(this).closest('.register-item').removeClass('register-item--active');
        });
    } //<---(REGISTER-form) END




    //ACTIVITPIC-tabs START--->
    if ($('.activitypic__nav-link').length > 0) {
        $('.activitypic__nav-link').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('.activitypic__nav-link').removeClass('activitypic__nav-link--active');
            $('.activitypic__content').removeClass('activitypic__content--active');

            $(this).addClass('activitypic__nav-link--active');
            $("#" + tab_id).addClass('activitypic__content--active');

            // if ($('.activitypic__item').length > 0) {
            //            $('.activitypic-block').slick('setPosition'); // slick
            //        }
        })
    } //<---(ACTIVITPIC-tabs) END




    //ACTIVITPIC-tab-scrollbar START--->
    if ($('.activitypic__nav').length > 0) {
        $(".activitypic__nav").mCustomScrollbar({
            axis: "x",
            theme: "minimal-dark",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    } //<---(ACTIVITPIC-tab scrollbar) END



    //ACTIVITPICINSIDE-slider START--->
    if ($('.activitypicinside-nav').length > 0) {
        $('.activitypicinside-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.activitypicinside-nav'
        });


        var act_Show = 7;
        var act_child = $('.activitypicinside-nav__item').length;
        var act_pd = '60px';

        if (act_child <= 1) {
            act_Show = 3;

        }
        if (act_child == 2) {
            act_Show = 2;
            act_pd = '0px';
            $('.activitypicinside-nav').css("max-width", 400);
        }
        if (act_child < 6 && act_child > 2) {
            act_Show = 3;
            $('.activitypicinside-nav').css("max-width", 650);

        }
        if (act_child < 8 && act_child > 5) {
            act_Show = 5;
            $('.activitypicinside-nav').css("max-width", 900);

        }

        $('.activitypicinside-nav').slick({
            slidesToShow: act_Show,
            slidesToScroll: 1,
            centerPadding: act_pd,
            centerMode: true,
            asNavFor: '.activitypicinside-slider',
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: '0px',
                        slidesToShow: 3
                    }
                }
            ]
        });
    } //<---(ACTIVITPICINSIDE-slider) END



});




//ACTIVITYINSIDE-activityinside-bottom fixed START--->
if ($('.activityinside-right').length > 0) {
    $(function() {

        (function() {
            var windowTop = $(window).scrollTop(),
                anchor = $('.activityinside-info'),
                anchorHeight = anchor.height(),
                fixedTop = anchor.offset().top;


            if (windowTop > fixedTop + anchorHeight) {
                $(".activityinside-bottom").addClass('activityinside-bottom--fixed');
            } else {
                $(".activityinside-bottom").removeClass('activityinside-bottom--fixed');
            }


        })();


        $(window).on('scroll', function() {

            var windowTop = $(window).scrollTop(),
                anchor = $('.activityinside-info'),
                anchorHeight = anchor.height(),
                fixedTop = anchor.offset().top;


            if (windowTop > fixedTop + anchorHeight) {
                $(".activityinside-bottom").addClass('activityinside-bottom--fixed');
            } else {
                $(".activityinside-bottom").removeClass('activityinside-bottom--fixed');
            }

        });

        $(window).on('resize', function() {

            var windowTop = $(window).scrollTop(),
                anchor = $('.activityinside-info'),
                anchorHeight = anchor.height(),
                fixedTop = anchor.offset().top;


            if (windowTop > fixedTop + anchorHeight) {
                $(".activityinside-bottom").addClass('activityinside-bottom--fixed');
            } else {
                $(".activityinside-bottom").removeClass('activityinside-bottom--fixed');
            }

        });

    });
} //<---- (ACTIVITYINSIDE-activityinside-bottom fixed) END








//FORM-check START--->
$('.form-item__checkbox').on('click', function() {
    var form_accpet = $('#form-accpet:checked').length;
    $('.form-item').eq(7).removeClass('form-item--active');

});

$('#submitBtn').on('click', function() {

    var form_name = $('[name="form-name"]').val(),
        form_id = $('[name="form-id"]').val(),
        form_year = $('[name="form-year"]').val(),
        form_month = $('[name="form-month"]').val(),
        form_date = $('[name="form-date"]').val(),
        phone = $('[name="form-tel"]').val(),
        email = $('[name="form-email"]').val(),
        form_city = $('[name="form-city"]').val(),
        form_township = $('[name="form-township"]').val(),
        form_add = $('[name="form-add"]').val();

    var final = 1;
    if (form_name.length < 1) {
        $('.form-item').eq(0).addClass('form-item--active');
        if(final==1) final = 0;
    }
    if (form_id.length < 1) {
        $('.form-item').eq(1).addClass('form-item--active');
        if(final==1) final = 0;
    }
    if (form_year == '0' || form_month == '0' || form_date == '0') {
        $('.form-item').eq(2).addClass('form-item--active');
        if(final==1) final = 0;
    }
    if (isNaN(phone) || phone.length < 7) {
        $('.form-item').eq(3).addClass('form-item--active');
        if(final==1) final = 0;
    }
    // if (isNaN(email) || email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) == -1) {
    //     $('.form-item').eq(4).addClass('form-item--active');
    //     if(final==1) final = 0;
    // }

    if(email == ''){
        $('.form-item').eq(4).addClass('form-item--active');
        if(final==1) final = 0;
    }

    if (form_city == '0' || form_township.length < 1 || form_add.length < 1) {
        $('.form-item').eq(5).addClass('form-item--active');
        if(final==1) final = 0;
    }

    if(final==1) {
        $('#form2').submit();
    }

}); //<---- (FORM-check) END







//LOGIN-form START--->
$('#loginform-submitBtn').on('click', function() {
    var loginform_account = $('[name="account"]').val(),
        loginform_password = $('[name="password"]').val();
    var final = 1;
    if (loginform_account.length < 1) {
        $('.loginform-item').eq(0).addClass('loginform-item--active');
        if(final==1) final = 0;
    }
    if (loginform_password.length < 1) {
        $('.loginform-item').eq(1).addClass('loginform-item--active');
        if(final==1) final = 0;
    }


    if(final==1){
        $('#form4').submit();
    }

}); //<---(LOGIN-form) END


//REGISTER-form START--->
if ($('#register-password').length > 0) {
    $('#register-password').keyup(function() {

        if ($(this).val().length > 0) {
            $('.register-item__status').addClass('register-item__status--active');
        } else {
            $('.register-item__status').removeClass('register-item__status--active');
        }
        passwordGrade($(this).val());
    });

    function passwordGrade(pwd) {
        var score = 0;
        var regexArr = ['[0-9]', '[a-z]', '[A-Z]', '[\\W_]'];
        var repeatCount = 0;
        var prevChar = '';

        //check length
        var len = pwd.length;
        score += len > 18 ? 18 : len;

        //check type
        for (var i = 0, num = regexArr.length; i < num; i++) { if (eval('/' + regexArr[i] + '/').test(pwd)) score += 4; }

        //bonus point
        for (var i = 0, num = regexArr.length; i < num; i++) {
            if (pwd.match(eval('/' + regexArr[i] + '/g')) && pwd.match(eval('/' + regexArr[i] + '/g')).length >= 2) score += 2;
            if (pwd.match(eval('/' + regexArr[i] + '/g')) && pwd.match(eval('/' + regexArr[i] + '/g')).length >= 5) score += 2;
        }

        //deduction
        for (var i = 0, num = pwd.length; i < num; i++) {
            if (pwd.charAt(i) == prevChar) repeatCount++;
            else prevChar = pwd.charAt(i);
        }
        score -= repeatCount * 1;


        if (len < 1 || score == 0) { //無輸入任何
            $('.register-item__status').removeClass('register-item__status--strong');
            $('.register-item__status').removeClass('register-item__status--medium');
            $('.register-item__status').removeClass('register-item__status--weak');
        }

        if (score < 10 && score > 0) { //弱
            $('.register-item__status').removeClass('register-item__status--strong');
            $('.register-item__status').removeClass('register-item__status--medium');
            $('.register-item__status').addClass('register-item__status--weak');
        } else if (score >= 10 && score <= 30) { //中
            $('.register-item__status').removeClass('register-item__status--strong');
            $('.register-item__status').removeClass('register-item__status--weak');
            $('.register-item__status').addClass('register-item__status--medium');
        } else if (score > 30) { //強
            $('.register-item__status').removeClass('register-item__status--medium');
            $('.register-item__status').removeClass('register-item__status--weak');
            $('.register-item__status').addClass('register-item__status--strong');
        }

    }
} //<---(REGISTER-form) END


//REGISTER-form START--->
$('#register-submitBtn').on('click', function() { //submit
    var register_email = $('[name="register-email"]').val(),
        register_name = $('[name="register-name"]').val(),
        register_id = $('[name="register-id"]').val(),
        register_year = $('[name="register-year"]').val(),
        register_month = $('[name="register-month"]').val(),
        register_date = $('[name="register-date"]').val(),
        register_phone = $('[name="register-tel"]').val(),
        register_city = $('[name="register-city"]').val(),
        register_township = $('[name="register-township"]').val(),
        register_add = $('[name="register-add"]').val(),
        register_password = $('[name="register-password"]').val(),
        register_password2 = $('[name="register-password2"]').val();

    var final = 1;

    if (register_email=='' || register_email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) == -1) {
        $('.register-item').eq(0).addClass('register-item--active');
        if(final==1) final = 0;
    }
    if (register_name.length < 1) {
        $('.register-item').eq(1).addClass('register-item--active');
        if(final==1) final = 0;
    }

    if (register_id.length < 1) {
        $('.register-item').eq(2).find('.register-item__msg').text('請輸入身分證字號');
        $('.register-item').eq(2).addClass('register-item--active');
        if(final==1) final = 0;
    } else if (register_id.search(/^[A-Z]{1}[1-2]{1}[0-9]{8}$/) == -1) {
        $('.register-item').eq(2).find('.register-item__msg').text('身分證字號格式錯誤');
        $('.register-item').eq(2).addClass('register-item--active');
        if(final==1) final = 0;
    }


    if (register_year == '0' || register_month == '0' || register_date == '0') {
        $('.register-item').eq(3).addClass('register-item--active');
        if(final==1) final = 0;
    }
    if (isNaN(register_phone) || register_phone.length < 7) {
        $('.register-item').eq(4).addClass('register-item--active');
        if(final==1) final = 0;
    }

    if (register_city == '0' || register_township.length < 1 || register_add.length < 1) {
        $('.register-item').eq(5).addClass('register-item--active');
        if(final==1) final = 0;
    }

    if ($('.register-item__status').hasClass('register-item__status--weak') == true) {
        $('.register-item').eq(6).addClass('register-item--active');
        if(final==1) final = 0;
    }

    if ( register_password == '' ) {
        $('.register-item').eq(6).addClass('register-item--active');
        if(final==1) final = 0;
    } else if ( register_password2 == '' ) {
        $('.register-item').eq(7).addClass('register-item--active');
        if(final==1) final = 0;
    }
    if ( register_password != '' && register_password2 != '' ) {
        if (register_password2 != register_password) {
            $('.register-item').eq(7).addClass('register-item--active');
            if(final==1) final = 0;
        }        
    } else {
        if(final==1) final = 0;
    }

    if(final == 1){
        $('#form2').submit();
    }else{
        return false;
    }

});




$('#register-clearBtn').on('click', function() { //reset
    $('.register-item__status').removeClass('register-item__status--strong');
    $('.register-item__status').removeClass('register-item__status--medium');
    $('.register-item__status').removeClass('register-item__status--weak');
    $('.register-item__status').removeClass('register-item__status--active');
    $('.register-item input,.register-item select').val('');
});


//聯絡地址selectbox
$('#register-city').on('change', function() {

    var city = $(this),
        region = $('#register-township');

    if (city.val() == '0') {
        region.attr('disabled', '');
        region.html('');
    } else {
        region.removeAttr('disabled');
    }

    if (city.val() == '基隆市') {
        region.html('<option value="仁愛區" selected="">仁愛區</option> <option value="信義區">信義區</option><option value="中正區">中正區</option><option value="中山區">中山區</option><option value="安樂區">安樂區</option><option value="暖暖區">暖暖區</option><option value="七堵區">七堵區</option>');
    }

    if (city.val() == '臺北市') {
        region.html('<option value="中正區" selected="">中正區</option> <option value="大同區">大同區</option><option value="中山區">中山區</option><option value="松山區">松山區</option><option value="大安區">大安區</option><option value="萬華區">萬華區</option><option value="信義區">信義區</option><option value="士林區">士林區</option><option value="北投區">北投區</option><option value="內湖區">內湖區</option><option value="南港區">南港區</option><option value="文山區">文山區</option>');
    }

    if (city.val() == '新北市') {
        region.html('<option value="萬里區" selected="">萬里區</option> <option value="金山區">金山區</option><option value="板橋區">板橋區</option><option value="汐止區">汐止區</option><option value="深坑區">深坑區</option><option value="石碇區">石碇區</option><option value="瑞芳區">瑞芳區</option><option value="平溪區">平溪區</option><option value="雙溪區">雙溪區</option><option value="貢寮區">貢寮區</option><option value="新店區">新店區</option><option value="坪林區">坪林區</option><option value="烏來區">烏來區</option><option value="永和區">永和區</option><option value="中和區">中和區</option><option value="土城區">土城區</option><option value="三峽區">三峽區</option><option value="樹林區">樹林區</option><option value="鶯歌區">鶯歌區</option><option value="三重區">三重區</option><option value="新莊區">新莊區</option><option value="泰山區">泰山區</option><option value="林口區">林口區</option><option value="蘆洲區">蘆洲區</option><option value="五股區">五股區</option><option value="八里區">八里區</option><option value="淡水區">淡水區</option><option value="三芝區">三芝區</option><option value="石門區">石門區</option>');
    }

    if (city.val() == '桃園市') {
        region.html('<option value="中壢區" selected="">中壢區</option> <option value="平鎮區">平鎮區</option><option value="龍潭區">龍潭區</option><option value="楊梅區">楊梅區</option><option value="新屋區">新屋區</option><option value="觀音區">觀音區</option><option value="桃園區">桃園區</option><option value="龜山區">龜山區</option><option value="八德區">八德區</option><option value="大溪區">大溪區</option><option value="復興區">復興區</option><option value="大園區">大園區</option><option value="蘆竹區">蘆竹區</option>');
    }

    if (city.val() == '新竹市') {
        region.html('<option value="東區" selected="">東區</option> <option value="北區">北區</option><option value="香山區">香山區</option>');
    }

    if (city.val() == '新竹縣') {
        region.html('<option value="竹北市" selected="">竹北市</option> <option value="湖口鄉">湖口鄉</option><option value="新豐鄉">新豐鄉</option><option value="新埔鎮">新埔鎮</option><option value="關西鎮">關西鎮</option><option value="芎林鄉">芎林鄉</option><option value="寶山鄉">寶山鄉</option><option value="竹東鎮">竹東鎮</option><option value="五峰鄉">五峰鄉</option><option value="橫山鄉">橫山鄉</option><option value="尖石鄉">尖石鄉</option><option value="北埔鄉">北埔鄉</option><option value="峨眉鄉">峨眉鄉</option>');
    }

    if (city.val() == '苗栗縣') {
        region.html('<option value="竹南鎮" selected="">竹南鎮</option> <option value="頭份市">頭份市</option><option value="三灣鄉">三灣鄉</option><option value="南庄鄉">南庄鄉</option><option value="獅潭鄉">獅潭鄉</option><option value="後龍鎮">後龍鎮</option><option value="通霄鎮">通霄鎮</option><option value="苑裡鎮">苑裡鎮</option><option value="苗栗市">苗栗市</option><option value="造橋鄉">造橋鄉</option><option value="頭屋鄉">頭屋鄉</option><option value="公館鄉">公館鄉</option><option value="大湖鄉">大湖鄉</option><option value="泰安鄉">泰安鄉</option><option value="銅鑼鄉">銅鑼鄉</option><option value="三義鄉">三義鄉</option><option value="西湖鄉">西湖鄉</option><option value="卓蘭鎮">卓蘭鎮</option>');
    }

    if (city.val() == '臺中市') {
        region.html('<option value="中區" selected="">中區</option> <option value="東區">東區</option><option value="南區">南區</option><option value="西區">西區</option><option value="北區">北區</option><option value="北屯區">北屯區</option><option value="西屯區">西屯區</option><option value="南屯區">南屯區</option><option value="太平區">太平區</option><option value="大里區">大里區</option><option value="霧峰區">霧峰區</option><option value="烏日區">烏日區</option><option value="豐原區">豐原區</option><option value="后里區">后里區</option><option value="石岡區">石岡區</option><option value="東勢區">東勢區</option><option value="和平區">和平區</option><option value="新社區">新社區</option><option value="潭子區">潭子區</option><option value="大雅區">大雅區</option><option value="神岡區">神岡區</option><option value="大肚區">大肚區</option><option value="沙鹿區">沙鹿區</option><option value="龍井區">龍井區</option><option value="梧棲區">梧棲區</option><option value="清水區">清水區</option><option value="大甲區">大甲區</option><option value="外埔區">外埔區</option><option value="大安區">大安區</option>');
    }

    if (city.val() == '彰化縣') {
        region.html('<option value="彰化市" selected="">彰化市</option> <option value="芬園鄉">芬園鄉</option><option value="花壇鄉">花壇鄉</option><option value="秀水鄉">秀水鄉</option><option value="鹿港鎮">鹿港鎮</option><option value="福興鄉">福興鄉</option><option value="線西鄉">線西鄉</option><option value="和美鎮">和美鎮</option><option value="伸港鄉">伸港鄉</option><option value="員林市">員林市</option><option value="社頭鄉">社頭鄉</option><option value="永靖鄉">永靖鄉</option><option value="埔心鄉">埔心鄉</option><option value="溪湖鎮">溪湖鎮</option><option value="大村鄉">大村鄉</option><option value="埔鹽鄉">埔鹽鄉</option><option value="田中鎮">田中鎮</option><option value="北斗鎮">北斗鎮</option><option value="田尾鄉">田尾鄉</option><option value="埤頭鄉">埤頭鄉</option><option value="溪州鄉">溪州鄉</option><option value="竹塘鄉">竹塘鄉</option><option value="二林鎮">二林鎮</option><option value="大城鄉">大城鄉</option><option value="芳苑鄉">芳苑鄉</option><option value="二水鄉">二水鄉</option>');
    }

    if (city.val() == '南投縣') {
        region.html('<option value="南投市" selected="">南投市</option> <option value="中寮鄉">中寮鄉</option><option value="草屯鎮">草屯鎮</option><option value="國姓鄉">國姓鄉</option><option value="埔里鎮">埔里鎮</option><option value="仁愛鄉">仁愛鄉</option><option value="名間鄉">名間鄉</option><option value="集集鎮">集集鎮</option><option value="水里鄉">水里鄉</option><option value="魚池鄉">魚池鄉</option><option value="信義鄉">信義鄉</option><option value="竹山鎮">竹山鎮</option><option value="鹿谷鄉">鹿谷鄉</option>');
    }

    if (city.val() == '雲林縣') {
        region.html('<option value="斗南鎮" selected="">斗南鎮</option> <option value="大埤鄉">大埤鄉</option><option value="虎尾鎮">虎尾鎮</option><option value="土庫鎮">土庫鎮</option><option value="褒忠鄉">褒忠鄉</option><option value="東勢鄉">東勢鄉</option><option value="臺西鄉">臺西鄉</option><option value="崙背鄉">崙背鄉</option><option value="麥寮鄉">麥寮鄉</option><option value="斗六市">斗六市</option><option value="林內鄉">林內鄉</option><option value="古坑鄉">古坑鄉</option><option value="莿桐鄉">莿桐鄉</option><option value="西螺鎮">西螺鎮</option><option value="二崙鄉">二崙鄉</option><option value="北港鎮">北港鎮</option><option value="水林鄉">水林鄉</option><option value="口湖鄉">口湖鄉</option><option value="四湖鄉">四湖鄉</option><option value="元長鄉">元長鄉</option>');
    }

    if (city.val() == '嘉義市') {
        region.html('<option value="東區" selected="">東區</option> <option value="西區">西區</option>');
    }

    if (city.val() == '嘉義縣') {
        region.html('<option value="番路鄉" selected="">番路鄉</option> <option value="梅山鄉">梅山鄉</option><option value="竹崎鄉">竹崎鄉</option><option value="阿里山鄉">阿里山鄉</option><option value="中埔鄉">中埔鄉</option><option value="大埔鄉">大埔鄉</option><option value="水上鄉">水上鄉</option><option value="鹿草鄉">鹿草鄉</option><option value="太保市">太保市</option><option value="朴子市">朴子市</option><option value="東石鄉">東石鄉</option><option value="六腳鄉">六腳鄉</option><option value="新港鄉">新港鄉</option><option value="民雄鄉">民雄鄉</option><option value="大林鎮">大林鎮</option><option value="溪口鄉">溪口鄉</option><option value="義竹鄉">義竹鄉</option><option value="布袋鎮">布袋鎮</option>');
    }

    if (city.val() == '臺南市') {
        region.html('<option value="中西區" selected="">中西區</option> <option value="東區">東區</option><option value="南區">南區</option><option value="北區">北區</option><option value="安平區">安平區</option><option value="安南區">安南區</option><option value="永康區">永康區</option><option value="歸仁區">歸仁區</option><option value="新化區">新化區</option><option value="左鎮區">左鎮區</option><option value="玉井區">玉井區</option><option value="楠西區">楠西區</option><option value="南化區">南化區</option><option value="仁德區">仁德區</option><option value="關廟區">關廟區</option><option value="龍崎區">龍崎區</option><option value="官田區">官田區</option><option value="麻豆區">麻豆區</option><option value="佳里區">佳里區</option><option value="西港區">西港區</option><option value="七股區">七股區</option><option value="將軍區">將軍區</option><option value="學甲區">學甲區</option><option value="北門區">北門區</option><option value="新營區">新營區</option><option value="後壁區">後壁區</option><option value="白河區">白河區</option><option value="東山區">東山區</option><option value="六甲區">六甲區</option><option value="下營區">下營區</option><option value="柳營區">柳營區</option><option value="鹽水區">鹽水區</option><option value="善化區">善化區</option><option value="大內區">大內區</option><option value="山上區">山上區</option><option value="新市區">新市區</option><option value="安定區">安定區</option>');
    }

    if (city.val() == '高雄市') {
        region.html('<option value="新興區" selected="">新興區</option> <option value="前金區">前金區</option><option value="苓雅區">苓雅區</option><option value="鹽埕區">鹽埕區</option><option value="鼓山區">鼓山區</option><option value="旗津區">旗津區</option><option value="前鎮區">前鎮區</option><option value="三民區">三民區</option><option value="楠梓區">楠梓區</option><option value="小港區">小港區</option><option value="左營區">左營區</option><option value="仁武區">仁武區</option><option value="大社區">大社區</option><option value="東沙群島">東沙群島</option><option value="南沙群島">南沙群島</option><option value="岡山區">岡山區</option><option value="路竹區">路竹區</option><option value="阿蓮區">阿蓮區</option><option value="田寮區">田寮區</option><option value="燕巢區">燕巢區</option><option value="橋頭區">橋頭區</option><option value="梓官區">梓官區</option><option value="彌陀區">彌陀區</option><option value="永安區">永安區</option><option value="湖內區">湖內區</option><option value="鳳山區">鳳山區</option><option value="大寮區">大寮區</option><option value="林園區">林園區</option><option value="鳥松區">鳥松區</option><option value="大樹區">大樹區</option><option value="旗山區">旗山區</option><option value="美濃區">美濃區</option><option value="六龜區">六龜區</option><option value="內門區">內門區</option><option value="杉林區">杉林區</option><option value="甲仙區">甲仙區</option><option value="桃源區">桃源區</option><option value="那瑪夏區">那瑪夏區</option><option value="茂林區">茂林區</option><option value="茄萣區">茄萣區</option>');
    }

    if (city.val() == '屏東縣') {
        region.html('<option value="屏東市" selected="">屏東市</option> <option value="三地門鄉">三地門鄉</option><option value="霧臺鄉">霧臺鄉</option><option value="瑪家鄉">瑪家鄉</option><option value="九如鄉">九如鄉</option><option value="里港鄉">里港鄉</option><option value="高樹鄉">高樹鄉</option><option value="鹽埔鄉">鹽埔鄉</option><option value="長治鄉">長治鄉</option><option value="麟洛鄉">麟洛鄉</option><option value="竹田鄉">竹田鄉</option><option value="內埔鄉">內埔鄉</option><option value="萬丹鄉">萬丹鄉</option><option value="潮州鎮">潮州鎮</option><option value="泰武鄉">泰武鄉</option><option value="來義鄉">來義鄉</option><option value="萬巒鄉">萬巒鄉</option><option value="崁頂鄉">崁頂鄉</option><option value="新埤鄉">新埤鄉</option><option value="南州鄉">南州鄉</option><option value="林邊鄉">林邊鄉</option><option value="東港鎮">東港鎮</option><option value="琉球鄉">琉球鄉</option><option value="佳冬鄉">佳冬鄉</option><option value="新園鄉">新園鄉</option><option value="枋寮鄉">枋寮鄉</option><option value="枋山鄉">枋山鄉</option><option value="春日鄉">春日鄉</option><option value="獅子鄉">獅子鄉</option><option value="車城鄉">車城鄉</option><option value="牡丹鄉">牡丹鄉</option><option value="恆春鎮">恆春鎮</option><option value="滿州鄉">滿州鄉</option>');
    }

    if (city.val() == '臺東縣') {
        region.html('<option value="臺東市" selected="">臺東市</option> <option value="綠島鄉">綠島鄉</option><option value="蘭嶼鄉">蘭嶼鄉</option><option value="延平鄉">延平鄉</option><option value="卑南鄉">卑南鄉</option><option value="鹿野鄉">鹿野鄉</option><option value="關山鎮">關山鎮</option><option value="海端鄉">海端鄉</option><option value="池上鄉">池上鄉</option><option value="東河鄉">東河鄉</option><option value="成功鎮">成功鎮</option><option value="長濱鄉">長濱鄉</option><option value="太麻里鄉">太麻里鄉</option><option value="金峰鄉">金峰鄉</option><option value="大武鄉">大武鄉</option><option value="達仁鄉">達仁鄉</option>');
    }

    if (city.val() == '花蓮縣') {
        region.html('<option value="花蓮市" selected="">花蓮市</option> <option value="新城鄉">新城鄉</option><option value="秀林鄉">秀林鄉</option><option value="吉安鄉">吉安鄉</option><option value="壽豐鄉">壽豐鄉</option><option value="鳳林鎮">鳳林鎮</option><option value="光復鄉">光復鄉</option><option value="豐濱鄉">豐濱鄉</option><option value="瑞穗鄉">瑞穗鄉</option><option value="萬榮鄉">萬榮鄉</option><option value="玉里鎮">玉里鎮</option><option value="卓溪鄉">卓溪鄉</option><option value="富里鄉">富里鄉</option>');
    }

    if (city.val() == '宜蘭縣') {
        region.html('<option value="宜蘭市" selected="">宜蘭市</option> <option value="頭城鎮">頭城鎮</option><option value="礁溪鄉">礁溪鄉</option><option value="壯圍鄉">壯圍鄉</option><option value="員山鄉">員山鄉</option><option value="羅東鎮">羅東鎮</option><option value="三星鄉">三星鄉</option><option value="大同鄉">大同鄉</option><option value="五結鄉">五結鄉</option><option value="冬山鄉">冬山鄉</option><option value="蘇澳鎮">蘇澳鎮</option><option value="南澳鄉">南澳鄉</option><option value="釣魚臺">釣魚臺</option>');
    }

    if (city.val() == '澎湖縣') {
        region.html('<option value="馬公市" selected="">馬公市</option> <option value="西嶼鄉">西嶼鄉</option><option value="望安鄉">望安鄉</option><option value="七美鄉">七美鄉</option><option value="白沙鄉">白沙鄉</option><option value="湖西鄉">湖西鄉</option>');
    }

    if (city.val() == '金門縣') {
        region.html('<option value="金沙鎮" selected="">金沙鎮</option> <option value="金湖鎮">金湖鎮</option><option value="金寧鄉">金寧鄉</option><option value="金城鎮">金城鎮</option><option value="烈嶼鄉">烈嶼鄉</option><option value="烏坵鄉">烏坵鄉</option>');
    }

    if (city.val() == '連江縣') {
        region.html('<option value="南竿鄉" selected="">南竿鄉</option> <option value="北竿鄉">北竿鄉</option><option value="莒光鄉">莒光鄉</option><option value="東引鄉">東引鄉</option>');
    }

});
//<---(REGISTER-form) END



//CERTIFICATION-form START--->
$('#certification-submitBtn').on('click', function() { //submit
    var certification_no = $('[name="certification-no"]').val();

    if (certification_no.length < 1) {
        $('.certification-item').eq(0).addClass('certification-item--active');
    }else{
        $('#form3').submit();
    }

});
$(".certification-item__input").focus(function() {
    $(this).closest('.certification-item').removeClass('certification-item--active');
});
//<---(CERTIFICATION-form) END



//FORGET-form START--->
$('#forget-submitBtn').on('click', function() { //submit
    var forget_email = $('[name="account"]').val();

    if (forget_email.length < 1) {
        $('.forget-item').eq(0).addClass('forget-item--active');
        $('.forget-item').eq(0).find('.forget-item__msg').text('請輸入E-MAIL帳號');
        event.preventDefault();
    } else if (forget_email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) == -1) {
        $('.forget-item').eq(0).find('.forget-item__msg').text('請填寫正確的E-MAIL帳號');
        $('.forget-item').eq(0).addClass('forget-item--active');
        event.preventDefault();
    }else{
        // event.preventDefault();
    }

});
$(".forget-item__input").focus(function() {
    $(this).closest('.forget-item').removeClass('forget-item--active');
});
//<---(FORGET-form) END


//MODIFY-form START--->
$('#modify-submitBtn').on('click', function() { //submit
    var modify_name = $('[name="modify-name"]').val(),
        modify_id = $('[name="modify-id"]').val(),
        modify_year = $('[name="modify-year"]').val(),
        modify_month = $('[name="modify-month"]').val(),
        modify_date = $('[name="modify-date"]').val(),
        modify_phone = $('[name="modify-tel"]').val(),
        modify_city = $('[name="modify-city"]').val(),
        modify_township = $('[name="modify-township"]').val(),
        modify_add = $('[name="modify-add"]').val(),
        modify_password = $('[name="modify-password"]').val(),
        modify_password2 = $('[name="modify-password2"]').val();

    var final = 1;
    if (modify_name.length < 1) {
        $('.modify-item').eq(0).addClass('modify-item--active');
        if(final == 1) final = 0;
    }
    if (modify_id.length < 1) {
        $('.modify-item').eq(1).find('.modify-item__msg').text('請輸入身分證字號');
        $('.modify-item').eq(1).addClass('modify-item--active');
        if(final == 1) final = 0;
    } else if (modify_id.search(/^[A-Z]{1}[1-2]{1}[0-9]{8}$/) == -1) {
        $('.modify-item').eq(1).find('.modify-item__msg').text('身分證字號格式錯誤');
        $('.modify-item').eq(1).addClass('modify-item--active');
        if(final == 1) final = 0;
    }
    if (modify_year == '0' || modify_month == '0' || modify_date == '0') {
        $('.modify-item').eq(2).addClass('modify-item--active');
        if(final == 1) final = 0;
    }
    if (isNaN(modify_phone) || modify_phone.length < 7) {
        $('.modify-item').eq(3).addClass('modify-item--active');
        if(final == 1) final = 0;
    }

    if (modify_city == '0' || modify_township.length < 1 || modify_add.length < 1) {
        $('.modify-item').eq(4).addClass('modify-item--active');
        if(final == 1) final = 0;
    }

    if(final == 1){
        $('#form2').submit();
    }

});
$(".modify-item__input").focus(function() {
    $(this).closest('.modify-item').removeClass('modify-item--active');
});
$(".modify-item__select").focus(function() {
    $(this).closest('.modify-item').removeClass('modify-item--active');
});

//聯絡地址selectbox
$('#modify-city').on('change', function() {

    var city = $(this),
        region = $('#modify-township');

    if (city.val() == '0') {
        region.attr('disabled', '');
        region.html('');
    } else {
        region.removeAttr('disabled');
    }

    if (city.val() == '基隆市') {
        region.html('<option value="仁愛區" selected="">仁愛區</option> <option value="信義區">信義區</option><option value="中正區">中正區</option><option value="中山區">中山區</option><option value="安樂區">安樂區</option><option value="暖暖區">暖暖區</option><option value="七堵區">七堵區</option>');
    }

    if (city.val() == '臺北市') {
        region.html('<option value="中正區" selected="">中正區</option> <option value="大同區">大同區</option><option value="中山區">中山區</option><option value="松山區">松山區</option><option value="大安區">大安區</option><option value="萬華區">萬華區</option><option value="信義區">信義區</option><option value="士林區">士林區</option><option value="北投區">北投區</option><option value="內湖區">內湖區</option><option value="南港區">南港區</option><option value="文山區">文山區</option>');
    }

    if (city.val() == '新北市') {
        region.html('<option value="萬里區" selected="">萬里區</option> <option value="金山區">金山區</option><option value="板橋區">板橋區</option><option value="汐止區">汐止區</option><option value="深坑區">深坑區</option><option value="石碇區">石碇區</option><option value="瑞芳區">瑞芳區</option><option value="平溪區">平溪區</option><option value="雙溪區">雙溪區</option><option value="貢寮區">貢寮區</option><option value="新店區">新店區</option><option value="坪林區">坪林區</option><option value="烏來區">烏來區</option><option value="永和區">永和區</option><option value="中和區">中和區</option><option value="土城區">土城區</option><option value="三峽區">三峽區</option><option value="樹林區">樹林區</option><option value="鶯歌區">鶯歌區</option><option value="三重區">三重區</option><option value="新莊區">新莊區</option><option value="泰山區">泰山區</option><option value="林口區">林口區</option><option value="蘆洲區">蘆洲區</option><option value="五股區">五股區</option><option value="八里區">八里區</option><option value="淡水區">淡水區</option><option value="三芝區">三芝區</option><option value="石門區">石門區</option>');
    }

    if (city.val() == '桃園市') {
        region.html('<option value="中壢區" selected="">中壢區</option> <option value="平鎮區">平鎮區</option><option value="龍潭區">龍潭區</option><option value="楊梅區">楊梅區</option><option value="新屋區">新屋區</option><option value="觀音區">觀音區</option><option value="桃園區">桃園區</option><option value="龜山區">龜山區</option><option value="八德區">八德區</option><option value="大溪區">大溪區</option><option value="復興區">復興區</option><option value="大園區">大園區</option><option value="蘆竹區">蘆竹區</option>');
    }

    if (city.val() == '新竹市') {
        region.html('<option value="東區" selected="">東區</option> <option value="北區">北區</option><option value="香山區">香山區</option>');
    }

    if (city.val() == '新竹縣') {
        region.html('<option value="竹北市" selected="">竹北市</option> <option value="湖口鄉">湖口鄉</option><option value="新豐鄉">新豐鄉</option><option value="新埔鎮">新埔鎮</option><option value="關西鎮">關西鎮</option><option value="芎林鄉">芎林鄉</option><option value="寶山鄉">寶山鄉</option><option value="竹東鎮">竹東鎮</option><option value="五峰鄉">五峰鄉</option><option value="橫山鄉">橫山鄉</option><option value="尖石鄉">尖石鄉</option><option value="北埔鄉">北埔鄉</option><option value="峨眉鄉">峨眉鄉</option>');
    }

    if (city.val() == '苗栗縣') {
        region.html('<option value="竹南鎮" selected="">竹南鎮</option> <option value="頭份市">頭份市</option><option value="三灣鄉">三灣鄉</option><option value="南庄鄉">南庄鄉</option><option value="獅潭鄉">獅潭鄉</option><option value="後龍鎮">後龍鎮</option><option value="通霄鎮">通霄鎮</option><option value="苑裡鎮">苑裡鎮</option><option value="苗栗市">苗栗市</option><option value="造橋鄉">造橋鄉</option><option value="頭屋鄉">頭屋鄉</option><option value="公館鄉">公館鄉</option><option value="大湖鄉">大湖鄉</option><option value="泰安鄉">泰安鄉</option><option value="銅鑼鄉">銅鑼鄉</option><option value="三義鄉">三義鄉</option><option value="西湖鄉">西湖鄉</option><option value="卓蘭鎮">卓蘭鎮</option>');
    }

    if (city.val() == '臺中市') {
        region.html('<option value="中區" selected="">中區</option> <option value="東區">東區</option><option value="南區">南區</option><option value="西區">西區</option><option value="北區">北區</option><option value="北屯區">北屯區</option><option value="西屯區">西屯區</option><option value="南屯區">南屯區</option><option value="太平區">太平區</option><option value="大里區">大里區</option><option value="霧峰區">霧峰區</option><option value="烏日區">烏日區</option><option value="豐原區">豐原區</option><option value="后里區">后里區</option><option value="石岡區">石岡區</option><option value="東勢區">東勢區</option><option value="和平區">和平區</option><option value="新社區">新社區</option><option value="潭子區">潭子區</option><option value="大雅區">大雅區</option><option value="神岡區">神岡區</option><option value="大肚區">大肚區</option><option value="沙鹿區">沙鹿區</option><option value="龍井區">龍井區</option><option value="梧棲區">梧棲區</option><option value="清水區">清水區</option><option value="大甲區">大甲區</option><option value="外埔區">外埔區</option><option value="大安區">大安區</option>');
    }

    if (city.val() == '彰化縣') {
        region.html('<option value="彰化市" selected="">彰化市</option> <option value="芬園鄉">芬園鄉</option><option value="花壇鄉">花壇鄉</option><option value="秀水鄉">秀水鄉</option><option value="鹿港鎮">鹿港鎮</option><option value="福興鄉">福興鄉</option><option value="線西鄉">線西鄉</option><option value="和美鎮">和美鎮</option><option value="伸港鄉">伸港鄉</option><option value="員林市">員林市</option><option value="社頭鄉">社頭鄉</option><option value="永靖鄉">永靖鄉</option><option value="埔心鄉">埔心鄉</option><option value="溪湖鎮">溪湖鎮</option><option value="大村鄉">大村鄉</option><option value="埔鹽鄉">埔鹽鄉</option><option value="田中鎮">田中鎮</option><option value="北斗鎮">北斗鎮</option><option value="田尾鄉">田尾鄉</option><option value="埤頭鄉">埤頭鄉</option><option value="溪州鄉">溪州鄉</option><option value="竹塘鄉">竹塘鄉</option><option value="二林鎮">二林鎮</option><option value="大城鄉">大城鄉</option><option value="芳苑鄉">芳苑鄉</option><option value="二水鄉">二水鄉</option>');
    }

    if (city.val() == '南投縣') {
        region.html('<option value="南投市" selected="">南投市</option> <option value="中寮鄉">中寮鄉</option><option value="草屯鎮">草屯鎮</option><option value="國姓鄉">國姓鄉</option><option value="埔里鎮">埔里鎮</option><option value="仁愛鄉">仁愛鄉</option><option value="名間鄉">名間鄉</option><option value="集集鎮">集集鎮</option><option value="水里鄉">水里鄉</option><option value="魚池鄉">魚池鄉</option><option value="信義鄉">信義鄉</option><option value="竹山鎮">竹山鎮</option><option value="鹿谷鄉">鹿谷鄉</option>');
    }

    if (city.val() == '雲林縣') {
        region.html('<option value="斗南鎮" selected="">斗南鎮</option> <option value="大埤鄉">大埤鄉</option><option value="虎尾鎮">虎尾鎮</option><option value="土庫鎮">土庫鎮</option><option value="褒忠鄉">褒忠鄉</option><option value="東勢鄉">東勢鄉</option><option value="臺西鄉">臺西鄉</option><option value="崙背鄉">崙背鄉</option><option value="麥寮鄉">麥寮鄉</option><option value="斗六市">斗六市</option><option value="林內鄉">林內鄉</option><option value="古坑鄉">古坑鄉</option><option value="莿桐鄉">莿桐鄉</option><option value="西螺鎮">西螺鎮</option><option value="二崙鄉">二崙鄉</option><option value="北港鎮">北港鎮</option><option value="水林鄉">水林鄉</option><option value="口湖鄉">口湖鄉</option><option value="四湖鄉">四湖鄉</option><option value="元長鄉">元長鄉</option>');
    }

    if (city.val() == '嘉義市') {
        region.html('<option value="東區" selected="">東區</option> <option value="西區">西區</option>');
    }

    if (city.val() == '嘉義縣') {
        region.html('<option value="番路鄉" selected="">番路鄉</option> <option value="梅山鄉">梅山鄉</option><option value="竹崎鄉">竹崎鄉</option><option value="阿里山鄉">阿里山鄉</option><option value="中埔鄉">中埔鄉</option><option value="大埔鄉">大埔鄉</option><option value="水上鄉">水上鄉</option><option value="鹿草鄉">鹿草鄉</option><option value="太保市">太保市</option><option value="朴子市">朴子市</option><option value="東石鄉">東石鄉</option><option value="六腳鄉">六腳鄉</option><option value="新港鄉">新港鄉</option><option value="民雄鄉">民雄鄉</option><option value="大林鎮">大林鎮</option><option value="溪口鄉">溪口鄉</option><option value="義竹鄉">義竹鄉</option><option value="布袋鎮">布袋鎮</option>');
    }

    if (city.val() == '臺南市') {
        region.html('<option value="中西區" selected="">中西區</option> <option value="東區">東區</option><option value="南區">南區</option><option value="北區">北區</option><option value="安平區">安平區</option><option value="安南區">安南區</option><option value="永康區">永康區</option><option value="歸仁區">歸仁區</option><option value="新化區">新化區</option><option value="左鎮區">左鎮區</option><option value="玉井區">玉井區</option><option value="楠西區">楠西區</option><option value="南化區">南化區</option><option value="仁德區">仁德區</option><option value="關廟區">關廟區</option><option value="龍崎區">龍崎區</option><option value="官田區">官田區</option><option value="麻豆區">麻豆區</option><option value="佳里區">佳里區</option><option value="西港區">西港區</option><option value="七股區">七股區</option><option value="將軍區">將軍區</option><option value="學甲區">學甲區</option><option value="北門區">北門區</option><option value="新營區">新營區</option><option value="後壁區">後壁區</option><option value="白河區">白河區</option><option value="東山區">東山區</option><option value="六甲區">六甲區</option><option value="下營區">下營區</option><option value="柳營區">柳營區</option><option value="鹽水區">鹽水區</option><option value="善化區">善化區</option><option value="大內區">大內區</option><option value="山上區">山上區</option><option value="新市區">新市區</option><option value="安定區">安定區</option>');
    }

    if (city.val() == '高雄市') {
        region.html('<option value="新興區" selected="">新興區</option> <option value="前金區">前金區</option><option value="苓雅區">苓雅區</option><option value="鹽埕區">鹽埕區</option><option value="鼓山區">鼓山區</option><option value="旗津區">旗津區</option><option value="前鎮區">前鎮區</option><option value="三民區">三民區</option><option value="楠梓區">楠梓區</option><option value="小港區">小港區</option><option value="左營區">左營區</option><option value="仁武區">仁武區</option><option value="大社區">大社區</option><option value="東沙群島">東沙群島</option><option value="南沙群島">南沙群島</option><option value="岡山區">岡山區</option><option value="路竹區">路竹區</option><option value="阿蓮區">阿蓮區</option><option value="田寮區">田寮區</option><option value="燕巢區">燕巢區</option><option value="橋頭區">橋頭區</option><option value="梓官區">梓官區</option><option value="彌陀區">彌陀區</option><option value="永安區">永安區</option><option value="湖內區">湖內區</option><option value="鳳山區">鳳山區</option><option value="大寮區">大寮區</option><option value="林園區">林園區</option><option value="鳥松區">鳥松區</option><option value="大樹區">大樹區</option><option value="旗山區">旗山區</option><option value="美濃區">美濃區</option><option value="六龜區">六龜區</option><option value="內門區">內門區</option><option value="杉林區">杉林區</option><option value="甲仙區">甲仙區</option><option value="桃源區">桃源區</option><option value="那瑪夏區">那瑪夏區</option><option value="茂林區">茂林區</option><option value="茄萣區">茄萣區</option>');
    }

    if (city.val() == '屏東縣') {
        region.html('<option value="屏東市" selected="">屏東市</option> <option value="三地門鄉">三地門鄉</option><option value="霧臺鄉">霧臺鄉</option><option value="瑪家鄉">瑪家鄉</option><option value="九如鄉">九如鄉</option><option value="里港鄉">里港鄉</option><option value="高樹鄉">高樹鄉</option><option value="鹽埔鄉">鹽埔鄉</option><option value="長治鄉">長治鄉</option><option value="麟洛鄉">麟洛鄉</option><option value="竹田鄉">竹田鄉</option><option value="內埔鄉">內埔鄉</option><option value="萬丹鄉">萬丹鄉</option><option value="潮州鎮">潮州鎮</option><option value="泰武鄉">泰武鄉</option><option value="來義鄉">來義鄉</option><option value="萬巒鄉">萬巒鄉</option><option value="崁頂鄉">崁頂鄉</option><option value="新埤鄉">新埤鄉</option><option value="南州鄉">南州鄉</option><option value="林邊鄉">林邊鄉</option><option value="東港鎮">東港鎮</option><option value="琉球鄉">琉球鄉</option><option value="佳冬鄉">佳冬鄉</option><option value="新園鄉">新園鄉</option><option value="枋寮鄉">枋寮鄉</option><option value="枋山鄉">枋山鄉</option><option value="春日鄉">春日鄉</option><option value="獅子鄉">獅子鄉</option><option value="車城鄉">車城鄉</option><option value="牡丹鄉">牡丹鄉</option><option value="恆春鎮">恆春鎮</option><option value="滿州鄉">滿州鄉</option>');
    }

    if (city.val() == '臺東縣') {
        region.html('<option value="臺東市" selected="">臺東市</option> <option value="綠島鄉">綠島鄉</option><option value="蘭嶼鄉">蘭嶼鄉</option><option value="延平鄉">延平鄉</option><option value="卑南鄉">卑南鄉</option><option value="鹿野鄉">鹿野鄉</option><option value="關山鎮">關山鎮</option><option value="海端鄉">海端鄉</option><option value="池上鄉">池上鄉</option><option value="東河鄉">東河鄉</option><option value="成功鎮">成功鎮</option><option value="長濱鄉">長濱鄉</option><option value="太麻里鄉">太麻里鄉</option><option value="金峰鄉">金峰鄉</option><option value="大武鄉">大武鄉</option><option value="達仁鄉">達仁鄉</option>');
    }

    if (city.val() == '花蓮縣') {
        region.html('<option value="花蓮市" selected="">花蓮市</option> <option value="新城鄉">新城鄉</option><option value="秀林鄉">秀林鄉</option><option value="吉安鄉">吉安鄉</option><option value="壽豐鄉">壽豐鄉</option><option value="鳳林鎮">鳳林鎮</option><option value="光復鄉">光復鄉</option><option value="豐濱鄉">豐濱鄉</option><option value="瑞穗鄉">瑞穗鄉</option><option value="萬榮鄉">萬榮鄉</option><option value="玉里鎮">玉里鎮</option><option value="卓溪鄉">卓溪鄉</option><option value="富里鄉">富里鄉</option>');
    }

    if (city.val() == '宜蘭縣') {
        region.html('<option value="宜蘭市" selected="">宜蘭市</option> <option value="頭城鎮">頭城鎮</option><option value="礁溪鄉">礁溪鄉</option><option value="壯圍鄉">壯圍鄉</option><option value="員山鄉">員山鄉</option><option value="羅東鎮">羅東鎮</option><option value="三星鄉">三星鄉</option><option value="大同鄉">大同鄉</option><option value="五結鄉">五結鄉</option><option value="冬山鄉">冬山鄉</option><option value="蘇澳鎮">蘇澳鎮</option><option value="南澳鄉">南澳鄉</option><option value="釣魚臺">釣魚臺</option>');
    }

    if (city.val() == '澎湖縣') {
        region.html('<option value="馬公市" selected="">馬公市</option> <option value="西嶼鄉">西嶼鄉</option><option value="望安鄉">望安鄉</option><option value="七美鄉">七美鄉</option><option value="白沙鄉">白沙鄉</option><option value="湖西鄉">湖西鄉</option>');
    }

    if (city.val() == '金門縣') {
        region.html('<option value="金沙鎮" selected="">金沙鎮</option> <option value="金湖鎮">金湖鎮</option><option value="金寧鄉">金寧鄉</option><option value="金城鎮">金城鎮</option><option value="烈嶼鄉">烈嶼鄉</option><option value="烏坵鄉">烏坵鄉</option>');
    }

    if (city.val() == '連江縣') {
        region.html('<option value="南竿鄉" selected="">南竿鄉</option> <option value="北竿鄉">北竿鄉</option><option value="莒光鄉">莒光鄉</option><option value="東引鄉">東引鄉</option>');
    }

});

//<---(MODIFY-form) END



//MODIFYPW-form START--->
if ($('#modifypw-pwnew1').length > 0) {
    $('#modifypw-pwnew1').keyup(function() {

        if ($(this).val().length > 0) {
            $('.modifypw-item__status').addClass('modifypw-item__status--active');
        } else {
            $('.modifypw-item__status').removeClass('modifypw-item__status--active');
        }
        passwordGrade($(this).val());
    });

    function passwordGrade(pwd) {
        var score = 0;
        var regexArr = ['[0-9]', '[a-z]', '[A-Z]', '[\\W_]'];
        var repeatCount = 0;
        var prevChar = '';

        //check length
        var len = pwd.length;
        score += len > 18 ? 18 : len;

        //check type
        for (var i = 0, num = regexArr.length; i < num; i++) { if (eval('/' + regexArr[i] + '/').test(pwd)) score += 4; }

        //bonus point
        for (var i = 0, num = regexArr.length; i < num; i++) {
            if (pwd.match(eval('/' + regexArr[i] + '/g')) && pwd.match(eval('/' + regexArr[i] + '/g')).length >= 2) score += 2;
            if (pwd.match(eval('/' + regexArr[i] + '/g')) && pwd.match(eval('/' + regexArr[i] + '/g')).length >= 5) score += 2;
        }

        //deduction
        for (var i = 0, num = pwd.length; i < num; i++) {
            if (pwd.charAt(i) == prevChar) repeatCount++;
            else prevChar = pwd.charAt(i);
        }
        score -= repeatCount * 1;


        if (len < 1 || score == 0) { //無輸入任何
            $('.modifypw-item__status').removeClass('modifypw-item__status--strong');
            $('.modifypw-item__status').removeClass('modifypw-item__status--medium');
            $('.modifypw-item__status').removeClass('modifypw-item__status--weak');
        }

        if (score < 10 && score > 0) { //弱
            $('.modifypw-item__status').removeClass('modifypw-item__status--strong');
            $('.modifypw-item__status').removeClass('modifypw-item__status--medium');
            $('.modifypw-item__status').addClass('modifypw-item__status--weak');
        } else if (score >= 10 && score <= 30) { //中
            $('.modifypw-item__status').removeClass('modifypw-item__status--strong');
            $('.modifypw-item__status').removeClass('modifypw-item__status--weak');
            $('.modifypw-item__status').addClass('modifypw-item__status--medium');
        } else if (score > 30) { //強
            $('.modifypw-item__status').removeClass('modifypw-item__status--medium');
            $('.modifypw-item__status').removeClass('modifypw-item__status--weak');
            $('.modifypw-item__status').addClass('modifypw-item__status--strong');
        }

    }

    $('#modifypw-submitBtn').on('click', function() { //submit
        var modifypw_pwnew1 = $('[name="modifypw-pwnew1"]').val(),
            modifypw_pwnew2 = $('[name="modifypw-pwnew2"]').val();


        var final = 1;
        
        if (modifypw_pwnew1.length < 1) {
            $('.modifypw-item').eq(0).addClass('modifypw-item--active');
            $('.modifypw-item').eq(0).find('.modifypw-item__msg').text('請輸入新密碼');
            if(final == 1) final = 0;
        } else if (modifypw_pwnew1.length < 6 || modifypw_pwnew1.length > 12) {
            $('.modifypw-item').eq(0).addClass('modifypw-item--active');
            $('.modifypw-item').eq(0).find('.modifypw-item__msg').text('密碼必須6至12碼');
            if(final == 1) final = 0;
        }
        if (modifypw_pwnew2.length < 1 || modifypw_pwnew2 != modifypw_pwnew1) {
            $('.modifypw-item').eq(1).addClass('modifypw-item--active');
            if(final == 1) final = 0;
        }



        if ($('.modifypw-item__status').hasClass('modifypw-item__status--weak') == true) {
            $('.modifypw-item').eq(0).addClass('modifypw-item--active');
            $('.modifypw-item').eq(0).find('.modifypw-item__msg').text('您的密碼太簡單了');
            if(final == 1) final = 0;
        }

       

        if(final == 1){
            $('#form2').submit();
        }
    });


    $(".modifypw-item__input").focus(function() {
        $(this).closest('.modifypw-item').removeClass('modifypw-item--active');
    });

} //<---(MODIFYPW-form) END


//ACTIVITYINSIDE-activityinside-right sticky START--->
// if ($('.activityinside-right').length > 0) {
//     $(function() {

//         (function() {
//             var windowTop = $(window).scrollTop() + 30,
//                 anchorParent = $('.activityinside-right'),
//                 anchor = $('.activityinside-info'),
//                 anchorHeight = anchor.height(),
//                 fixedTop = anchorParent.offset().top,
//                 fixedBottom = anchorParent.offset().top + anchorParent.height() - anchorHeight;

//             if (windowTop < fixedTop) {
//                 if (anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.removeClass('activityinside-info--fixed');
//                 }
//             }

//             if (windowTop >= fixedTop && windowTop < fixedBottom) {
//                 if (anchor.hasClass('activityinside-info--bottom')) {
//                     anchor.removeClass('activityinside-info--bottom');
//                 }
//                 if (!anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.addClass('activityinside-info--fixed');
//                 }
//             }

//             if (windowTop+70 > fixedBottom) {
//                 if (anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.removeClass('activityinside-info--fixed');
//                 }
//                 if (!anchor.hasClass('activityinside-info--bottom')) {
//                     anchor.addClass('activityinside-info--bottom');
//                 }
//             }
//         })();


//         $(window).on('scroll', function() {

//             var windowTop = $(window).scrollTop() + 30,
//                 anchorParent = $('.activityinside-right'),
//                 anchor = $('.activityinside-info'),
//                 anchorHeight = anchor.height(),
//                 fixedTop = anchorParent.offset().top,
//                 fixedBottom = anchorParent.offset().top + anchorParent.height() - anchorHeight;

//             if (windowTop < fixedTop) {
//                 if (anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.removeClass('activityinside-info--fixed');
//                 }
//             }

//             if (windowTop >= fixedTop && windowTop < fixedBottom) {
//                 if (anchor.hasClass('activityinside-info--bottom')) {
//                     anchor.removeClass('activityinside-info--bottom');
//                 }
//                 if (!anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.addClass('activityinside-info--fixed');
//                 }
//             }

//             if (windowTop+70 > fixedBottom) {
//                 if (anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.removeClass('activityinside-info--fixed');
//                 }
//                 if (!anchor.hasClass('activityinside-info--bottom')) {
//                     anchor.addClass('activityinside-info--bottom');
//                 }
//             }

//         });

//         $(window).on('resize', function() {

//             var windowTop = $(window).scrollTop() + 30,
//                 anchorParent = $('.activityinside-right'),
//                 anchor = $('.activityinside-info'),
//                 anchorHeight = anchor.height(),
//                 fixedTop = anchorParent.offset().top,
//                 fixedBottom = anchorParent.offset().top + anchorParent.height() - anchorHeight;

//             if (windowTop < fixedTop) {
//                 if (anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.removeClass('activityinside-info--fixed');
//                 }
//             }

//             if (windowTop >= fixedTop && windowTop < fixedBottom) {
//                 if (anchor.hasClass('activityinside-info--bottom')) {
//                     anchor.removeClass('activityinside-info--bottom');
//                 }
//                 if (!anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.addClass('activityinside-info--fixed');
//                 }
//             }

//             if (windowTop+70 > fixedBottom) {
//                 if (anchor.hasClass('activityinside-info--fixed')) {
//                     anchor.removeClass('activityinside-info--fixed');
//                 }
//                 if (!anchor.hasClass('activityinside-info--bottom')) {
//                     anchor.addClass('activityinside-info--bottom');
//                 }
//             }

//         });

//     });
// } //<---- (FORM-activityinside-right) END