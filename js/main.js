$(document).ready(function(){
    $('.toggler').click(function(){
        $(this).next('.links').slideToggle();
    })

    // order the inner in the circular
    var items = $('.circular-inner .circular-item');
    var left = 0;
    $.each(items,function(index,element){
        element.style.left=left+'%';
        left+=100;
    })
    // button of circular
    var button_indicators = $('.circular-indicators *');
    button_indicators.click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let slide_to = parseInt($(this).data('slide-to'));
        var move;
        $.each(items,function(index,element){
            if(index === slide_to){
                move = parseInt(items[index].style.left);
            }
        })
        $.each(items,function(index,element){
            let prev_left = parseInt(element.style.left);
            element.style.left = prev_left - move + '%';
        })
    })
})