$(document).ready(function($){

    jQuery(".menu-btn").click(function(){jQuery(this).siblings(".menu").fadeToggle();});
    jQuery("li.has-dropdown").click(function(){jQuery(this).children(".dropdown-menu").fadeToggle();});
    $('.copy-btn').click(function(){
      $(this).addClass('active');
  
      setTimeout(function () { 
          $('.copy-btn').removeClass('active');
      }, 2000);
    });
  
  });
  
    $(window).on('load', function() {
      $('.loader-site').hide();
    });
  
  function copyToClipboard(element){var $temp=$("<input>");$("body").append($temp);$temp.val($(element).html()).select();document.execCommand("copy");$temp.remove();}