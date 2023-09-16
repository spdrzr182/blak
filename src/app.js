/*

Tinkering around with a fixed nav bar, and changing it based on scroll


*/

$(document).ready(function(){
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 122) {
          $('body').addClass('header-fixed');
      } else {
          $('body').removeClass('header-fixed');
      }
      // change the style of the navbar when the user scrolls into the next zone.
      // get the distance of the 2nd section from the top of the page - height of header.
      var topOffset = $('#demosection2').offset().top;
      var topOffset2 = $('#demosection3').offset().top; 
      var headerHeight = $('#topnav').height();
      var transitionPoint = topOffset - headerHeight;
      var transitionPoint2 = topOffset2 - headerHeight;
      if (scrollTop > transitionPoint) {
        $('#topnav').addClass('alt-header');
      } else if (topOffset2 > transitionPoint2) {
          $('#topnav').removeClass('alt-header');
      }
      else {
        $('#topnav').removeClass('alt-header');
      }
    });
  });



document.addEventListener("DOMContentLoaded", function(event) { 

    function navSlide() {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-items");
        const navLinks = document.querySelectorAll(".nav-items li");
        
        burger.addEventListener("click", () => {
            //Toggle Nav
            nav.classList.toggle("nav-active");
            document.body.classList.toggle('no-scroll')
            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ""
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            //Burger Animation
            burger.classList.toggle("toggle");
        });
        
    }
    
    navSlide();
    
    });