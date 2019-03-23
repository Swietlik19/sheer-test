//= ../node_modules/jquery/dist/jquery.min.js

$(document).ready(function() {

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
