
$(document).ready(function () {
    'use strict';
    $("html").niceScroll();

    var scroll = new SmoothScroll('a[href*="#"]',{
        speed:300
    });
});