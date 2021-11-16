$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.nav').toggleClass('nav-toggle');
      $('.doctor-nav').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
  
      $('.fa-bars').removeClass('fa-times');
      $('.nav').removeClass('nav-toggle');
      $('.doctor-nav').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 10){
        $('header').addClass('header-active');
        $('doctor-header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
        $('doctor-header').removeClass('header-active');
      }
  
    });  
  
  });

