$(document).ready(function() {
    let $body = $('body');

    $body.click(() => {
        $body.removeClass('show-nav');
    });
// remove?
    $('.slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '<button class="slick-prev button">&#10094;</button>',
        nextArrow: '<button class="slick-next button">&#10095;</button>'
    });
// function to get slide in side menu on mobile
    $('#header-nav').click((e) => {
        e.stopPropagation();
        $body.removeClass('show-nav');
    });
    
    $('#header-nav-open').click((e) => {
        e.stopPropagation();
        $body.addClass('show-nav');
    });

    $('#header-nav-close').click(() => {
        $body.removeClass('show-nav');
    });
// remove?
    $('.button-parent').click(() => {
        $('.tabs').removeClass('student').addClass('parent');
    });
    $('.button-student').click(() => {
        $('.tabs').removeClass('parent').addClass('student');
    });

    $('#form').submit((e) => {
        e.preventDefault();
        
        // Form Submit Handler- remove?
    });
});

// function to prefill the contact form if someone clicks on a particular service
function prefillMessage(x){
    if (x === 'explore'){
        document.getElementById("form-message").value = "I would like to find out more about what educational opportunities exist for me in Europe. Please get in touch!";  
    } else if (x === 'apply') {
        document.getElementById("form-message").value = "I want to study in Europe, and I've already found the perfect program! I want your help to get accepted. Please get in touch!";
    } else if (x === 'relocate'){
        document.getElementById("form-message").value = "I found the perfect study program in Europe, and have been accepted. I'm really excited to go! Now I need help planning my move. Please get in touch! ";
    } else {
        document.getElementById("form-message").value = "I am interested in your services. Please get in touch!";
    }
}




// function to change the 5 reasons for studying in Euorpe depending on how the toggle switch is set (parent or student)
function changeText() {
    
    var checkBox = document.getElementById("mySwitch");
    
    if (checkBox.checked == true){
        // reasons for students
        document.getElementById("reason1").innerHTML = "<b>Culture</b> - By studying in Europe you'll get to truly experience first hand the epic history, delicious food, awestriking art and everything which makes Europe special. It's different but also familiar.";
        document.getElementById("reason2").innerHTML = "<b>Travel</b> -Take advantage of Europes excellent public transport and budget airlines to cruise the canals of Venice, admire the art of the Louvre, have a beer at Oktoberfest, or whatever else is on your bucket list!";
        document.getElementById("reason3").innerHTML = "<b>Education Style</b> - In European universities you usually don't get homework and there are no quizes. How does that sound?! Classes are smaller and familiar leading to lifelong friendships between classmates ";
        document.getElementById("reason4").innerHTML = "<b>Social Life</b> - Europe's laws are much less restrictive than in the USA regarding partying. Clubs and bars are open to anyone 18+ (even 16 in many countries).";
        document.getElementById("reason5").innerHTML = "<b>Independence</b> - European universities don't baby their students. If you're 18 you're an adult. That means no RA's, shared dorms, meal plans, attendance, etc - of course this come with much more responsibility."; 
        document.getElementById("blog-more-info").href = "https://medium.com/studeu/5-great-reasons-to-study-abroad-in-europe-full-time-3672f0b883f9"
    } else {
        // reasons for parents
        document.getElementById("reason1").innerHTML = "<b>Fast</b> - A bachelor's degree in Europe only takes 3 years, and is internationally recognized. Get a head start on a career.";
        document.getElementById("reason2").innerHTML = "<b>Competitive Boost</b> - Europe offers excellent academic and career opportunities. Because of a shrinking and aging population Europe is welcoming to foreigners. This gives you an extra boost in getting prestigious positions.";
        document.getElementById("reason3").innerHTML = "<b>Excellent Value</b> - European university is much cheaper than in the USA. In many countries there is no tuition fee. The cost of living is also cheaper (with a few exceptions in Scandanavia).";
        document.getElementById("reason4").innerHTML = "<b>Diversity</b> - Give your child the chance to experience the diversity of cultures in Europe! Experiencing new languages, places, and people is garaunteed to broaden horizons.";
        document.getElementById("reason5").innerHTML = "<b>Language</b> - Learning to speak a second language can open a world of new possibilites.";
        document.getElementById("blog-more-info").href = "https://medium.com/studeu/5-great-reasons-for-your-child-to-study-full-time-in-europe-bbf892aeb6a6"
    }
  }


// function to let people know if the contact form has been submitted or not
function showMessage(){
    document.getElementById("sent-message").innerHTML = "Thanks, your message has been sent!";
    setTimeout(unshowMessage, 1000);
     }

function unshowMessage(){
    document.getElementById("sent-message").innerHTML = "";
}

// function to load blog articles form medium in horizontal or vertical layout based on media size 
function blog(){
    console.log(x);

     if (x.matches) {
         MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/studeu/","postsPerLine":1,"limit":3,"picture":"small","fields":["author","publishAt"],"ratio":"landscape"}});
         
     } else {
         MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/studeu/","postsPerLine":3,"limit":3,"picture":"small","fields":["author","publishAt"],"ratio":"landscape"}});
     }
    }
    
    var x = window.matchMedia("(max-width: 720px)");
    
    blog(x);
    x.addListener(blog);

    // function to submit contact form to AWS API and send mail to StudEU via Lamda function
    function submitToAPI(e) {
        console.log("start-submit");
        e.preventDefault();
        var URL = "https://endpoint.studeu.net/contact";
 
             var name_check = /[A-Za-z]{1}[A-Za-z]/;
             if (!name_check.test($("#form-name").val())) {
                          document.getElementById("sent-message").innerHTML = "Please check your entries!";
                          $("#form-name").css("box-shadow", "0 0 5px red");
                 return;
             }
             /** 
             var phone_check = /[+0-9]{1,14}/;
             if (!phone_check.test($("#form-phone").val())) {
                document.getElementById("sent-message").innerHTML = "Please check your entries!";
                $("#form-phone").css("box-shadow", "0 0 5px red");
                 return;
             }
             }
                /** 
             var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
             if (!reeamil.test($("#email-input").val())) {
                 alert ("Please enter valid email address");
                 return;
             } **/
 
        var name = $("#form-name").val();
        var phone = $("#form-phone").val();
        var email = $("#form-email").val();
        var desc = $("#form-message").val();
        var data = {
           name : name,
           phone : phone,
           email : email,
           desc : desc
         };
 
        $.ajax({
          type: "POST",
          url : "https://endpoint.studeu.net/contact",
          dataType: "json",
          crossDomain: "true",
          contentType: "application/json; charset=utf-8",
          data: JSON.stringify(data),
 
          
          success: function () {
            // clear form and show a success message
            document.getElementById("sent-message").innerHTML = "Thanks, your message has been sent!";
            setTimeout(unshowMessage, 6000);
            document.getElementById("form").reset();
            location.reload();
          },
          error: function () {
            // show an error message
            console.log(Error.prototype.message + "my error");
            document.getElementById("sent-message").innerHTML = "Oops there was a problem. Try again or get in touch by email!";
            setTimeout(unshowMessage, 4000);
          }});
      }

      // Scroll to a certain element
      function scrollToElement(x){
        var elmnt = document.getElementById(x);
        /**var element = document.getElementById(x);
        var headerOffset = 40;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });**/
        elmnt.offsetTop += 1000;
        elmnt.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        })
    };

    /**callback function for recaptcha
    function ccb(response) {
        $(‘:input[type="submit"]’).prop('disabled', false);
     } **/


