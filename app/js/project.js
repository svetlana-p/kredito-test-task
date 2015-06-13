$(document).ready(function(){
    // Toggle mobile menu visibility
    $('#menu-mobile').click(function(){
        $(this).next($('.menu')).toggleClass('menu-active');
    });

    // Function to initialize slider
    $('#slider').slick({
        fade: true,
        speed: 1500,
        appendArrows: $('.slider-nav')
    });

    // Range sliders
    $('.range').rangeslider({
        polyfill: false
    });

    // Change value of range slider by clicking on plus/minus buttons
    $('.calc-minus').click(function(){
        var $element = $(this).next().children('.range'),
            currentValue = +$element.val(),
            step = +$element.attr('data-step');
        $element.val(currentValue - step).change();
    });

    $('.calc-plus').click(function(){
        var $element = $(this).prev().children('.range'),
            currentValue = +$element.val(),
            step = +$element.attr('data-step');
        $element.val(currentValue + step).change();
    });

    // Set height for benefit items
    setElementHeight($('.benefits-list-item-inside'), $('.benefits-list-item'));

    $(window).on('delayed-resize', function(){
        setElementHeight($('.benefits-list-item-inside'), $('.benefits-list-item'));
    });

    // Function to set calculate max height of the set of elements
    function calcMaxHeight($selector){
        var maxElementHeight = 0;
        $selector.each(function(){
            maxElementHeight = Math.max(maxElementHeight, $(this).height());
        });
        return maxElementHeight;
    };

    function setElementHeight($selector, $wrapper){
        var maxElementHeight = calcMaxHeight($selector);
       // console.log(maxElementHeight);
        $wrapper.height(maxElementHeight);
    };

    // Generic, efficient window resize handler
    var resizeTimer;
    $(window).resize(function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $(window).trigger('delayed-resize', e);
        }, 250);
    });
});