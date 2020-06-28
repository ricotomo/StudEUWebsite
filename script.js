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

// function to change the 5 reasons for studying in Euorpe depending on how the toggle switch is set (parent or student)
function changeText() {
    
    var checkBox = document.getElementById("mySwitch");
    
    if (checkBox.checked == true){
        document.getElementById("reason1").innerHTML = "New text 1!";
        document.getElementById("reason2").innerHTML = "New text 2!";
        document.getElementById("reason3").innerHTML = "New text 3!";
        document.getElementById("reason4").innerHTML = "New text 4!";
        document.getElementById("reason5").innerHTML = "New text 5!"; 
    } else {
        document.getElementById("reason1").innerHTML = "hello world 1";
        document.getElementById("reason2").innerHTML = "hello world 2";
        document.getElementById("reason3").innerHTML = "hello world 3";
        document.getElementById("reason4").innerHTML = "hello world 4";
        document.getElementById("reason5").innerHTML = "hello world 5";
    }
  }
  