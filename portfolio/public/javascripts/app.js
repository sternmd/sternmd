var $document = $(document),
		windowHeight = $(window).height(),
		windowWidth = $(window).width();

$(document).scroll(function() {
	  if ($document.scrollTop() >= (windowHeight * 0.8)) {
		// user scrolled 50 pixels or more;
		// do stuff
		$(".navi_fade").fadeIn(700);
	  }
	  else {
		 $(".navi_fade").fadeOut(300);
	  }
});

$(window).scroll(function() {

 if ($(this).scrollTop()>400)
  {
     $('.work_link').fadeOut();
     $('.about_link').fadeOut();
     $('.contact_link').fadeOut();
  }
 else
  {
    $('.work_link').fadeIn();
    $('.about_link').fadeIn();
    $('.contact_link').fadeIn();
  }
});

$(document).ready(function() {
	$(".scroll").click(function(event){
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
	});
});
