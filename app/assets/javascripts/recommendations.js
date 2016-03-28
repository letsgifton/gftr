var resizeListener;
function myfunction() {
  clearTimeout(resizeListener);
  resizeListener = setTimeout(function(){
    $('.savebar-push').each(function() {
      $(this).css("height", "");
      $(this).height($('.savebar').height());
    });
  });
}

$(document).ready(function(){
	$('#save-options').click(function(){
		$('#userform').show();
		$('#hello_message').hide();
	});


	$('#more-help').click(function(){
		$('#more-help').hide();
		$('#more-options').show();
	});


	$('#rerun-algorithm').click(function(){
		$('#more-options').hide();
		$('#thank-you').show();
	});

	$('#gift-concierge').click(function(){
		$('#more-options').hide();
		$('#thank-you').show();
	});	

	$('#second-opinion').click(function(){
		$('#more-options').hide();
		$('#thank-you').show();
	});	
  myfunction();
})

$(window).resize(myfunction);