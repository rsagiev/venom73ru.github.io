$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //Наведение мышью
   /* $('ul li').hover(function() {
    	console.log(linePos);
		$('.menuUnderline').stop().animate({
			'left' : $(this).position().left
		}, 400);
	}, function(){
		$('.menuUnderline').stop().animate({
			'left' : linePos
		}, 400);
    });
*/
	$('#butt a').on('click', function(){
		$('.#').stop().animate({
			'left' : $(this).position().left
		}, 400);
	});
    //Скролл по якорям
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('.menuUnderline').stop().animate({
				'left' : $(this).position().left
			}, 2000, 'swing', console.log($(this).position().left));

      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 48
        }, 300, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $('.bars').click(function(){
        $('#menu').toggleClass('open');
    });
});
	//Скролл мышью
	function onScroll(event){
    	var scrollPos = $(document).scrollTop();
    	$('#menu a').each(function () {
        	var currLink = $(this);
        	var refElement = $(currLink.attr("href"));
        	if (refElement.position().top - $(window).height()/3 <= scrollPos) {
				$('.menuUnderline').stop().animate({
					'left' : $(this).position().left
				}, 400);
				linePos=$(this).position().left;
        	}
	        else{
	        }
	    });
    	if(scrollPos>0){
			$('#header').addClass('black');
		}
		else{
			console.log(scrollPos);
			$('#header').removeClass('black');
		}

	}














/*function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 60
    }, 400);
    return false;
  });
}
$('ul li').hover(function() {
		var x = $(this);
		$('.menuUnderline').stop().animate({
			'width': x.width(),
			'left' : x.position().left
		}, 400);
	}, function(){
        var x = $(this);
		$('.menuUnderline').stop().animate({
			'width': 0,
			'left' : 0
		}, 400);
    });

window.onload = function() {
	scrollMenu();
    scrollNav();
};*/