

$(document).ready(function(){

	var navClicked, marqueeWidth, distanceToMove, newPhotoPosition, newCaption;
	//Generate Photo Lineup
	$('img.marquee_panel_photo').each(function(index){
		var photoWidth = $('.marquee_container').width();
		var photoPosition = index* photoWidth;
		$('.marquee_photos').append('<img class="marquee_photo" style="left:' + photoWidth + '"src="'+ $(this).attr('src') +'" alt="'+ $(this).attr('alt') +'" width="'+ photoWidth +'" height="350" />');
		$('.marquee_photos').css('width', photoPosition + photoWidth);

	});
	
	//Generate Navigation Links
	$('.marquee_panels .marquee_panel').each(function(index){
		$('.marquee_nav').append('<a class="marquee_nav_item"></a>');
		
	});

	navClicked = 0;
	marqueeWidth = $('.marquee_container').width();
	distanceToMove = marqueeWidth * (-1);
	newPhotoPosition = navClicked * distanceToMove + 'px';
	newCaption = $('.marquee_panel_caption').get(navClicked);
	$('.marquee_nav a.marquee_nav_item').eq(navClicked).addClass('selected');
	
	$('.marquee_photos').animate({left: newPhotoPosition}, 1000);
	$('.marquee_caption').animate({top: '340px'}, 500, function(){
		var newHTML= $(newCaption).html();
		$('.marquee_caption_content').fadeOut(250);
		$('.marquee_caption_content').html(newHTML);
		setCaption();
		$('.marquee_caption_content').fadeIn('slow');

	});
	
	//Set up Navigation Links
	$('.marquee_nav a.marquee_nav_item').click(function(){
		$('.marquee_nav a.marquee_nav_item').removeClass('selected');
		$(this).addClass('selected');
		
		navClicked = $(this).index();
		marqueeWidth = $('.marquee_container').width();
		distanceToMove = marqueeWidth * (-1);
		newPhotoPosition = navClicked * distanceToMove + 'px';
		newCaption = $('.marquee_panel_caption').get(navClicked);
		
		$('.marquee_photos').animate({left: newPhotoPosition}, 1000);
		$('.marquee_caption').animate({top: '340px'}, 500, function(){
			var newHTML= $(newCaption).html();
			$('.marquee_caption_content').fadeOut(250);
			$('.marquee_caption_content').html(newHTML);
			setCaption();
			$('.marquee_caption_content').fadeIn('slow');
		});
	});
	
	//Previous and Next Controls
	$('#prev').click(function(){
		
		if(navClicked == 0){
			navClicked = $('.marquee_nav a').length - 1;
		}else{
			navClicked--;
		};
			$('.marquee_nav a.marquee_nav_item').removeClass('selected');
			$('.marquee_nav a.marquee_nav_item').eq(navClicked).addClass('selected');
			marqueeWidth = $('.marquee_container').width();
			distanceToMove = marqueeWidth * (-1);
			newPhotoPosition = navClicked * distanceToMove + 'px';
			newCaption = $('.marquee_panel_caption').get(navClicked);
		

		$('.marquee_photos').animate({left: newPhotoPosition}, 1000);
		$('.marquee_caption').animate({top: '340px'}, 500, function(){
			var newHTML= $(newCaption).html();
			$('.marquee_caption_content').fadeOut(250);
			$('.marquee_caption_content').html(newHTML);
			setCaption();
			$('.marquee_caption_content').fadeIn('slow');
		});
	});

	$('#next').click(function(){
		if(navClicked == $('.marquee_nav a').length - 1){
			navClicked = 0;
		}else{
			navClicked++;
		};

		$('.marquee_nav a.marquee_nav_item').removeClass('selected');
		$('.marquee_nav a.marquee_nav_item').eq(navClicked).addClass('selected');		marqueeWidth = $('.marquee_container').width();
		distanceToMove = marqueeWidth * (-1);
		newPhotoPosition = navClicked * distanceToMove + 'px';
		newCaption = $('.marquee_panel_caption').get(navClicked);
		
		$('.marquee_photos').animate({left: newPhotoPosition}, 1000);
		$('.marquee_caption').animate({top: '340px'}, 500, function(){
			var newHTML= $(newCaption).html();
			$('.marquee_caption_content').fadeOut(250);
			$('.marquee_caption_content').html(newHTML);
			setCaption();
			$('.marquee_caption_content').fadeIn('slow');
		});
	});

});

function setCaption(){
	var captionHeight = $('.marquee_caption').height();
	var marqueeHeight = $('.marquee_container').height();
	var newCaptionHeight = marqueeHeight - captionHeight - 0;
	$('.marquee_caption').delay(100).animate({top: newCaptionHeight}, 500);
}


