
// hover effect on portfolio images ////
$(document).ready(function () {
    $('#gallery img').each(function () {
        var newPhoto = new Image();
        newPhoto.src = 'images/2dbcd89fbf36202ca4d2625ea4829fe7.jpeg';
        var oldSrc = $(this).attr('src');
        $(this).hover(
            function () {
                $(this).attr('src', newPhoto.src);
                $(this).css('opacity', '0.7')
            },
            function () {
                $(this).attr('src', oldSrc);
                $(this).css('opacity', '1')
            }); //end hover        
    })
}); // end ready

// scroll effect code ////
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 700, 'swing', function () {
        window.location.hash = target;
    });
});
