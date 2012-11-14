//Clean up AJAX rudiments 
$('#modal_box title, #modal_box meta').remove();

//Lists captions
$('ol, ul').prev('p').css('margin-bottom', '0');

//Close modal box
$('#modal_box').click(function (e) {
    if ($(e.target).is('#modal_box *')) {
        return;
    }
    $('#modal_box').fadeOut('fast');
    $('#overlay').fadeOut('fast');
    $('#modal_box').empty();
});

$('#modal_box .close').click(function (e) {
    //Cancel the link behavior
    e.preventDefault();
    $('#modal_box').fadeOut('fast');
    $('#overlay').fadeOut('fast');
    $('#modal_box').empty();
});

//Tabs in modal box
$('#modal_box header .tabs, #modal_box .header .tabs').tabs('#modal_box .pane', {
    effect: 'fade',
    onBeforeClick: function (event, i) {
        // get the pane to be opened
        var pane = this.getPanes().eq(i);
        // only load once. remove the if ( ... ){ } clause if you want the page to be loaded every time
        if (pane.is(':empty')) {
            // load it with a page specified in the tab's href attribute
            pane.load(this.getTabs().eq(i).attr('href'));
        }
    }
});