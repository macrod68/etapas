// Preloader
$(window).on('load', function() {
  function hidePreloader() {
      if (!$("body").hasClass("loadJson")) {
        setTimeout(function() {
          $('.spinner-wrapper').fadeOut(500);
        }, 500);
      }
  }
  hidePreloader();
});
// / Preloader /

$(document).ready(function(){

  // Loading Json indicator /
  $('.loading').before('<div class="text-center loadingIndicator style="height: 100px"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="32" stroke-width="8" stroke="#1d3f72" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform></circle>');
  // / Loading Json indicator /

  resize();
  
  /* $(".addClassHover").mouseenter(function () { 
    $(this).addClass("hover")
  });
  $(".addClassHover").mouseleave(function () { 
    $(this).removeClass("hover")
  }); */

});

// Responsive navbar in base allo scrolling
window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          $('body').addClass('navbarSlim');
      }     
      else if (document.body.scrollTop < 100 && $(window).width() > 980 || document.documentElement.scrollTop > 160 && $(window).width() > 980) {
          $('body').removeClass('navbarSlim phone');
      }
      if (document.documentElement.scrollTop > 500) {
        $('#paginaTopIco').addClass("on");   
      }
      else {
        $('#paginaTopIco').removeClass("on");
      }
};

function resize (){
  if ($(window).width() < 980 && $(window).width() > 1024){
    $('body').addClass('navbarSlim');
    $('body').removeClass('phone').removeClass('tablet');
  }
  else if ($(window).width() <= 1024 && $(window).width() >= 768){
    $('body').addClass('tablet').removeClass('phone');
  }
  else if ($(window).width() < 768){
    $('body').addClass('navbarSlim phone').removeClass('tablet');
  }
  else {
    $('body').removeClass('tablet').removeClass('phone');
  }
}    

$(window).resize(function(){
  resize();
});
 // / Responsive navbar in base allo scrolling

// ScrollTo animato
 $('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.not('[href="#collapse"]') // elementi su  cui non deve avere effetto
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 30 /* aggiungi margine header: es top - 30 */
      }, 1000,
      function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      }), {easing:'out'};
    }
  }
});
// / ScrollTo animato

/*
 * Bootstrap Cookie Alert by Wruczek
 * https://github.com/Wruczek/Bootstrap-Cookie-Alert
 * Released under MIT license
 */
(function () {
  "use strict";

  var cookieAlert = document.querySelector(".cookiealert");
  var acceptCookies = document.querySelector(".acceptcookies");

  if (!cookieAlert) {
     return;
  }

  cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

  // Show the alert if we cant find the "acceptCookies" cookie
  if (!getCookie("acceptCookies")) {
      cookieAlert.classList.add("show");
  }

  // When clicking on the agree button, create a 1 year
  // cookie to remember user's choice and close the banner
  acceptCookies.addEventListener("click", function () {
      setCookie("acceptCookies", true, 365);
      cookieAlert.classList.remove("show");

      // dispatch the accept event
      window.dispatchEvent(new Event("cookieAlertAccept"))
  });

  // Cookie functions from w3schools
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
})();