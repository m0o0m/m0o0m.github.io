$(document).ready(function(){
	$('ol, ul').prev('p').css('margin-bottom', '0'); //lists captions
});

function handleError() {
    return true;
}
window.onerror = handleError;