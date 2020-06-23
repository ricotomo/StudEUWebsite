$(document).ready(function() {
    let $body = $('body');

    $body.click(() => {
        $body.removeClass('show-nav');
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '<button class="slick-prev button">&#10094;</button>',
        nextArrow: '<button class="slick-next button">&#10095;</button>'
    });

    $('#header-nav').click((e) => {
        e.stopPropagation();
    });
    
    $('#header-nav-open').click((e) => {
        e.stopPropagation();
        $body.addClass('show-nav');
    });

    $('#header-nav-close').click(() => {
        $body.removeClass('show-nav');
    });

    $('.button-parent').click(() => {
        $('.tabs').removeClass('student').addClass('parent');
    });
    $('.button-student').click(() => {
        $('.tabs').removeClass('parent').addClass('student');
    });

    $('#form').submit((e) => {
        e.preventDefault();
        // Form Submit Handler
    });
});