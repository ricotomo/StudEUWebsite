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
        $body.removeClass('show-nav');
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

function prefillPhone(){
   document.getElementById('form-phone').innerHTML = "123456789";
    
}

$('#explore-service-link').click( function() { 
    document.getElementById("form-message").value = "test";
    document.getElementById('form-phone').value = "123456789";
    return false; 
} );

// function to change the 5 reasons for studying in Euorpe depending on how the toggle switch is set (parent or student)
function changeText() {
    
    var checkBox = document.getElementById("mySwitch");
    
    if (checkBox.checked == true){
        document.getElementById("reason1").innerHTML = "<b>Culture</b> - By studying in Europe you'll get to truly experience first hand the epic history, delicious food, awestriking art and everything which makes Europe special. It's different but also familiar.";
        document.getElementById("reason2").innerHTML = "<b>Travel</b> -Take advantage of Europes excellent public transport and budget airlines to cruise the canals of Venice, admire the art of the Louvre, have a beer at Oktoberfest, or whatever else is on your bucket list!";
        document.getElementById("reason3").innerHTML = "<b>Education Style</b> - In European universities you usually don't get homework and there are no quizes. How does that sound?! Classes are smaller and familiar leading to lifelong friendships between classmates ";
        document.getElementById("reason4").innerHTML = "<b> Partying</b> - Europe's drinking laws are much less restrictive than in the USA. Clubs and bars are open to anyone 18+ (even 16 in many countries).";
        document.getElementById("reason5").innerHTML = "<b>Independence</b> - European universities don't baby their students. If you're 18 you're an adult. That means no RA's, shared dorms, meal plans, attendance, etc - of course this come with much more responsibility."; 
    } else {
        document.getElementById("reason1").innerHTML = "<b>Fast</b> - A bachelor's degree in Europe only takes 3 years, and is internationally recognized. Get a head start on a career.";
        document.getElementById("reason2").innerHTML = "<b>Competitive Boost</b> - Europe offers excellent academic and career opportunities. Becuase of a shrinking and aging population Europe is in need of foreigners. This gives you an extra boost in getting prestigious positions.";
        document.getElementById("reason3").innerHTML = "<b>Value</b> - European university is much cheaper than in the USA. In many countries there is no tuition fee. The cost of living is also cheaper (with a few exceptions in Scandanavia).";
        document.getElementById("reason4").innerHTML = "<b>Diversity</b> - Expose your child to a diversity of culture. Experiencing new languages, places, and people is garaunteed to broaden horizons.";
        document.getElementById("reason5").innerHTML = "<b>Language</b> - Learning to speak a second language can open a world of new possibilites.";
    }
  }

function showMessage(){
    document.getElementById("sent-message").innerHTML = "Thanks, your message has been sent!";
    setTimeout(unshowMessage, 1000);
     }

function unshowMessage(){
    document.getElementById("sent-message").innerHTML = "";
}
     
function blog(){
    console.log(x);

     if (x.matches) {
         MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@philippsandner","postsPerLine":1,"limit":3,"picture":"small","fields":["author","publishAt"],"ratio":"landscape"}});
         
     } else {
         MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@philippsandner","postsPerLine":3,"limit":3,"picture":"small","fields":["author","publishAt"],"ratio":"landscape"}});
     }
    }
    
    var x = window.matchMedia("(max-width: 720px)");
    
    blog(x);
    x.addListener(blog);

    function submitToAPI(e) {
        console.log("start-submit");
        e.preventDefault();
        var URL = "https://8yq7hi2oli.execute-api.us-east-2.amazonaws.com/Alpha/contact";
 
             /**var Namere = /[A-Za-z]{1}[A-Za-z]/;
             if (!Namere.test($("#form-name").val())) {
                          alert ("Name can not less than 2 char");
                 return;
             }
             var mobilere = /[0-9]{10}/;
             if (!mobilere.test($("#form-phone").val())) {
                 alert ("Please enter valid mobile number");
                 return;
             }
             if ($("#form-email").val()=="") {
                 alert ("Please enter your email id");
                 return;
             }
 
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
          url : "https://8yq7hi2oli.execute-api.us-east-2.amazonaws.com/Alpha/contact",
          dataType: "json",
          crossDomain: "true",
          contentType: "application/json; charset=utf-8",
          data: JSON.stringify(data),
 
          
          success: function () {
            // clear form and show a success message
            document.getElementById("sent-message").innerHTML = "Thanks, your message has been sent!";
            setTimeout(unshowMessage, 1000);
            document.getElementById("form").reset();
            location.reload();
          },
          error: function () {
            // show an error message
            document.getElementById("sent-message").innerHTML = "Oops there was a problem. Try again or get in touch by email!";
            setTimeout(unshowMessage, 4000);
          }});
      }

/**https://8yq7hi2oli.execute-api.us-east-2.amazonaws.com/Alpha */

 /**function medium(x) {
    if (x.matches) { // If media query matches
        document.getElementById("reason1").innerHTML = <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
        <script>MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@philippsandner","postsPerLine":3,"limit":3,"picture":"small","fields":["author","publishAt"],"ratio":"landscape"}})</script>;
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 720px)")
  medium(x) // Call listener function at run time
  x.addListener(medium) // Attach listener function on state changes

**/
  /**https://websitebeaver.com/how-to-make-an-interactive-and-responsive-svg-map-of-us-states-capitals#styling-the-states
  $("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();
   */
  
    /** 
    $('.element').mousefollow({
                            
        html:'<p>any html content here</p>'
      
      });
    */
    /** 
    https://freestyleacademy.rocks/Digital_Media/examples/index.php?f=Mouse_Following_Div_On_Hover 

      var boxHovered, boxNumber, selector, targetedBox, adjustX, adjustY;
      $(".popup").hide();//This hides all the pop-ups when page loads
      $(".box").hover(function(){//This executes when you hover ON the box
           boxHovered = $(this).attr("id");//Gets the id of the box such as "box1", "box2"
           targetedBox = "#" + boxHovered;//creates a value of "#box1", "#box2", etc for future use
           boxNumber = boxHovered.substr(3,5);//extracts the # from the id, such as 1, 2, 3
           selector = "#popup"+boxNumber;//creates a value of "#popup1", "#popup2", etc for future use
           $(selector).show();//This reveals the popup inside the hovered box
           moveBox();//This calls on the function below to execute
      },function(){//This executes when you hover OFF the box
           $(selector).hide();//This hides the popup inside the hovered box
      });
      function moveBox(){
          $(targetedBox).bind('mousemove',function(event){//Executes when the mouse MOVES
              adjustX = $(this).find(".popup").outerWidth(true);//gets the width of the targeted popup
              adjustY = $(this).find(".popup").outerHeight(true);//gets the height of the targeted popup
              if(targetedBox == "#box1") {//example of moving popup relative to mouse
                  adjustX = $(this).find(".popup").outerWidth(true)-12;//creates a more unique value
                  adjustY = $(this).find(".popup").outerHeight(true)-12;
              }
              //event.pageY or evet.pageX = the mouse position relative to the top left of the targeted box
              var my = event.pageY-$(this).offset().top-adjustY;//my = mouse y position with some adjustment relateive to top of box
              var mx = event.pageX-$(this).offset().left-adjustX; //mx = mouse x position with some adjustment relateive to left of box
              $(selector).css({//set the selected popup box coordinates near the mouse as the mouse moves
                  "left":mx,
                  "top":my
              });
          });
  */

