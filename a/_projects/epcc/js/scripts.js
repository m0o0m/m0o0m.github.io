$(document).ready(function(){
	$('A P:last-child, UL.headings LI').addClass('go');
	$('H1+ P').addClass('lead');
	$('.issue LI:first-child, .col:first-child, #sidebar ARTICLE:first-child, .box IMG:first-child, .oo2_box IMG:first-child, NAV#sidebar H1:first-child, .archive LI:first-child').addClass('first');
	$('.issue UL').append('<li class="ico"></li>');
	$('ARTICLE.video IMG, .thumbnails FIGURE IMG').wrap('<div class="tbn" />');
	$('ARTICLE.video DIV.tbn, .thumbnails FIGURE DIV.tbn').append('<span class="png">Смотреть</span>');
});