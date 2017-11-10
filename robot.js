

$('#contactForm').change(function() {
    alert(`This is from an Input Named  `+ $(this).attr('id'));
    $(this).addClass('Highlight');
});


$('#MyDiv').on('mouseenter mouseleave mouseup', function(e) {
    $(this).toggleClass('Highlight');
    $(this).css('cursor', 'pointer');
    if (e.type == 'mouseup') {
        $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
    }
});















