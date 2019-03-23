//= ../node_modules/jquery/dist/jquery.min.js

$(document).ready(function() {

  /* Плавный переход к якорю */
  $(function(){
    $('a[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      return false;
    });
  });

  $('.burger').click(function(){
    $('.nav__list').toggleClass('nav__list--enabled');
    $(this).toggleClass('burger--close');
  });

  $('.phone__link').click(function(){
    $('.request').removeClass('request--disabled');
  });

  $('.close').click(function(){
    $('.request').addClass('request--disabled');
  });

});
