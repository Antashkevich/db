$(document).ready(function(){
  $('.spoiler-small').click(function(){
		$('.subMenu').show();
      $('.spoiler-body').show('normal');
 
   $(this).hide();
   
   return false;
   });
   $('.spoiler').click(function(){
		$('.subMenu').hide('normal');
      $('.spoiler-body').hide('normal');
   $('.spoiler-small').show();
   
   return false;
   });
  
  $('.body').click (function(){
		$('.spoiler-body').show();
		$('.subMenu').hide();
      $('.spoiler-small').show('normal');
  })
  
  $(window).resize(function(){
  	$('.spoiler-body').attr('style','');
  	$('.subMenu').attr('style','');
  	$('.spoiler-small').attr('style','');
});


$("body").click(function(){
 if ($('.spoiler').is(':visible')) {

     $('.subMenu').hide('normal');
        $('.spoiler-body').hide('normal');
        $('.spoiler-small').show();
   }
   });
  
});