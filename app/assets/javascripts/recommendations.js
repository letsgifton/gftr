//var resizeListener;

//function myfunction() {
//    clearTimeout(resizeListener);
//    resizeListener = setTimeout(function() {
//        $('.savebar-push').each(function() {
//            $(this).css("height", "");
//            $(this).height($('.savebar').height());
//        });
//    });
//}

//$(window).resize(myfunction);


///RANDOM ORDER SMOKESCREEN DIVS
var random;
random = function() {
  var maindiv = $("#shuffleinfo");
    var divs = maindiv.children();
    while (divs.length) {
        maindiv.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

$(function() {
    //COUNTS NUMBER OF SAVED GIFT IDEAS
    $('input[type="checkbox"]').click(function() {

        var ideasCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
      //conept test guys 1-5
        if (ideasCount > 0) {      
          $('#ideasCounter').text(ideasCount);
          $('#option1').css("display", "inherit");
          $('#option2').css("display", "none");
          if (ideasCount == 1) {
             $('#ideasPlural').text(" idea.");
          } else {
             $('#ideasPlural').text(" ideas.");
          }
        } else {
          $('#option1').css("display", "none");
          $('#option2').css("display", "inherit");
        }
      //conecpt test guys 5+  
        if (ideasCount > 0) {
            $('#savecounter').css("display", "inherit");
            if (ideasCount == 1) {
                $('#save-options').text("Save "+ideasCount+" Idea");
            } else {
                $('#save-options').text("Save "+ideasCount+" Ideas");
            }
        } else {
            $('#savecounter').css("display", "none");
        }
      $(this).closest('form').submit();
    });
  
    //GIFT ACTIONS SECTION TOGGLE
    
    //concept test guys 1-5
    $('#yes-idea-1').click(function() {
        $('#yesinforow1').slideToggle(200);
        $('#maybeinforow1:visible').slideToggle(200);
    });
    $('#yes-idea-2').click(function() {
        $('#yesinforow2').slideToggle(200);
        $('#maybeinforow2:visible').slideToggle(200);
    })
    $('#yes-idea-3').click(function() {
        $('#yesinforow3').slideToggle(200);
        $('#maybeinforow3:visible').slideToggle(200);
    })
    
    //concept test guys 5+
    $('#maybe-idea-1').click(function() {
        $('#maybeinforow1').slideToggle(200);
        $('#yesinforow1:visible').slideToggle(200);
    });
   $('#maybe-idea-2').click(function() {
        $('#maybeinforow2').slideToggle(200);
        $('#yesinforow2:visible').slideToggle(200);
    });
   $('#maybe-idea-3').click(function() {
        $('#maybeinforow3').slideToggle(200);
        $('#yesinforow3:visible').slideToggle(200);
    });

    //GOOGLE ANALYTICS IDEA PAGE
    function sendAnalytics(eventCategory, eventAction) {
        ga('send', 'event', eventCategory, eventAction);
    };

    //IDEA ACTIONS GOOGLE ANALYTICS
    $('#yes-idea-1').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'yes-1');
    });

    $('#maybe-idea-1').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-1');
    });
    $('#maybe-idea-1-join').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-1-join');
    });
    $('#save-idea-1').on("click", function(event) {
        sendAnalytics('IdeaActions', 'save-1');
    });
    $('#yes-idea-2').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'yes-2');
    });
    $('#maybe-idea-2').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-2');
    });
    $('#maybe-idea-2-join').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-2-join');
    });
    $('#save-idea-2').on("click", function(event) {
        sendAnalytics('IdeaActions', 'save-2');
    });
    $('#yes-idea-3').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'yes-3');
    });
    $('#maybe-idea-3').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-3');
    });
    $('#maybe-idea-3-join').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('IdeaActions', 'maybe-3-join');
    });
    $('#save-idea-3').on("click", function(event) {
        sendAnalytics('IdeaActions', 'save-3');
    });

    //PANIC BUTTON
    $('#click-panic').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Help', 'clickPanic');
    });

    //VISITOR CHOOSES TO SAVE IDEAS
    $('#save-options').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('Save', 'saveIdeas');
    });


    //MORE INFO PAGE

    $('#rerun-algorithm').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('clickPanic', 'rerunAlgorithm');
    });

    $('#gift-concierge').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('clickPanic', 'giftConcierge');
    });

    $('#three-pictures').on("click", function(event) {
        event.preventDefault();
        sendAnalytics('clickPanic', 'threePictures');
    });
  
    //Show and Hide Small Stories
  for (i=0; i<4; i++) {
    for (j=0; j<5; j++) {
      $('#showstory'+i+'-'+j).on("click", function(event) {
        $(this).siblings().toggle();
        $(this).children('.hidediv').toggle();
        $(this).children('.showdiv').toggle();
        window.dispatchEvent(new Event('resize'));
      });
    };
  };

});

//CALL RANDOM ORDER FUNCTION
$(document).ready(random);
$(document).on('page:load', random);