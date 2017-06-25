$(document).ready(function () {
    $(document).on("scroll", onScroll);

	$('#butt a').on('click', function(){
		$('.#').stop().animate({
			'left' : $(this).position().left
		}, 400);
	});
    //Скролл по якорям
    $('#down').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('.menuUnderline').stop().animate({
				'left' : $(this).position().left
			}, 500, 'swing', console.log($(this).position().left));

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
    $('#up').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('.menuUnderline').stop().animate({
                'left' : 0
            }, 500, 'swing', console.log($(this).position().left));

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': 0 - 48
        }, 300, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    //Переключение мобильного меню
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
			$('#header').removeClass('black');
		}

	}