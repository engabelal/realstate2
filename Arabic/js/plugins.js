//resize carousal screen view

$(function () {

        'use strict';
        var winh = $(window).height(),
            upperh = $('.before-nav').innerHeight(),
            searchh =$('.search').innerHeight(),
            navh = $('.main-nav').innerHeight();
//        if (screen.width >= 600) {
            $('.carousel').height(winh - (upperh + navh+ searchh));
//        }
    })
    //------------------
