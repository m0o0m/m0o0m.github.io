$(document).ready(function(){
	modalBox();
	gallery();
	$('ol, ul').prev('p').css('margin-bottom', '0'); //lists captions
});

// Alternatives: http://flowplayer.org/tools/overlay/ и http://colorpowered.com/colorbox/
function modalBox() {
    $('a[rel*="extra"]').click(function (e) {

        //Cancel the link behavior
        e.preventDefault();

        //Create modal box container and overlay
        if ($('#modal_box').length == 0) {
            $('body').append('<div id="modal_box" class="section"></div><div id="overlay"></div>');
        }
        var href = $(this).attr('href');

        //Create figcaption text
        if ($(this).attr('title')) {
            var title = $(this).attr('title');
        } else {
            var title = ':-)';
        }

        //Check href to separate html and pics
        if ($(this).is('a[href$=.png], a[href$=.jpg], a[href$=.gif], a[href$=.gif]')) {

            //Create figure, figcaption and open image in modal box
            $('#modal_box').append('<div class="single figure"><div class="figcaption">' + title + '<button class="close">Закрыть</button></div><img src="' + href + '" alt="" /></div>');
            $.getScript('/a/_projects/reklama-vliftah32/js/modal-box.js');
            $('#modal_box').fadeIn('300');
            $('#overlay').fadeIn('300');
        } else {

            //Load HTML in modal box
            $('#modal_box').load(href, function () {
                $.getScript('/a/_projects/reklama-vliftah32/js/modal-box.js');
            });
            $('#modal_box').fadeIn('300');
            $('#overlay').fadeIn('300');
        }
        $(document).keydown(function (e) {
            if (e.keyCode == 27) {
                $('#modal_box').fadeOut('fast');
                $('#overlay').fadeOut('fast');
                $('#modal_box').empty();
            }
        });
    });
}

function gallery() {
    $('a[rel*="gallery"]').click(function (e) {

        //Cancel the link behavior
        e.preventDefault();

        var href = $(this).attr('href');

        //Create figcaption text
        if ($(this).attr('title')) {
            var title = $(this).attr('title');
        } else {
            var title = '';
        }

		var figure = $(this).parents('.gallery').children('figure');
		var figcaption = $(this).parents('.gallery').children('figcaption');
		figure.empty();
		figcaption.empty();
		figure.append('<img src="' + href + '" alt="" />');
		figcaption.append(title);
    });
}