$(window).scroll(function() {
    $('.js-fancy-heading').each(function() {
        if( $(this).visible(true) ) {  
            $(this).addClass('lines-added')
        }        
    });
});