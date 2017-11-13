

$('.field').change(function() {
    alert(`This is from an Input Named  `+ $(this).attr('id'));
    $(this).addClass('Highlight');
});


$('#MyDiv').on('mouseenter mouseleave mouseup', function(e) {
    $(this).toggleClass('Highlight');
    $(this).css('cursor', 'pointer');
    if (e.type === 'mouseup') {
        $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
    }
});



for (var i=0;i<document.forms.length;i++) {
    var form = document.forms[i];
    form.addEventListener('submit', function(e){
        e.preventDefault();
        var results = '';


        var checkboxes = form.querySelectorAll("input[type='checkbox']");
        for(var k = 0; k < checkboxes.length; k++) {
            results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
        }


        var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
        for(var m = 0; m < radiobuttons.length; m++) {
            results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
        }

        alert(results);
    });
}














