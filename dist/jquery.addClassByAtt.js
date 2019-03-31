(function ($) { 
    //jquery plugin to add classes to elements depending on the value of certain attribute
    $.fn.addClassByAtt = function (options) {
        var settings = $.extend({
            options: [{'class':'', 'minVal': 0, 'maxVal': 1 },{'class': '', 'minVal':1, 'maxVal': 2}], 'attribute': 'title'
        }, options),
            currentClass = '',
            currentVal = 0;
        
        return this.each(function () {
            currentVal = $(this).attr(settings.attribute);
            $.each(settings.options, function( key, val ) {
                if (currentVal >= val.minVal && currentVal <= val.maxVal) {
                    currentClass = val.class;
                }
            });
            $(this).addClass(currentClass); 
        });
    };
}(jQuery));