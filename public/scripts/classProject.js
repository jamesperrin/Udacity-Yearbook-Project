//Put your JavaScript code in this file
//master

$(document).ready(function () {

  //*************************************************************
  //	Navigation related
  //*************************************************************
  if (window.location.href.indexOf("index.html") > -1) {
      SetActiveNavMenu('a[href="index.html"]');
  }

  if (window.location.href.indexOf("yearbook.html") > -1) {
      SetActiveNavMenu('a[href="yearbook.html"]');
  }

  if (window.location.href.indexOf("resources.html") > -1) {
      SetActiveNavMenu('a[href="resources.html"]');
  }

  if (window.location.href.indexOf("geolocation.html") > -1) {
      SetActiveNavMenu('a[href="geolocation.html"]');
  }

  if (window.location.href.indexOf("cssart.html") > -1) {
    SetActiveNavMenu('a[href="cssart.html"]');
  }

  if (window.location.href.indexOf("about.html") > -1) {
      SetActiveNavMenu('a[href="about.html"]');
  }

  //*************************************************************
  //	Sets Active Navigation Menu
  //*************************************************************
  function SetActiveNavMenu(navSelector) {
      $('.navbar-nav li a').removeClass('active').remove('span.sr-only');
      $(navSelector).addClass('active').append('<span class="sr-only">(current)</span>');
  }

  //*************************************************************
  //	Return to top feature
  // @see: https://codepen.io/rdallaire/pen/apoyx
  //*************************************************************
  // ===== Scroll to Top ==== 
  $(window).scroll(function (e) {
      e.preventDefault();
      if ($(this).scrollTop() >= 25) { // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200); // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200); // Else fade out the arrow
      }
  });

  $('#return-to-top').on('click', function () { // When arrow is clicked
      $('body,html').animate({
          scrollTop: 0 // Scroll to top of body
      }, 500);
  });
});
//master