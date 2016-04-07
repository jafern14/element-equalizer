(function($) {
    
    var pluginName = 'equalizer',
        defaults = {
            eleGroupCount: 1,
            widthEqualizing: false,
            heightEqualizing: true,
            resizingRatio: 'auto'
        };
    
    $.fn[pluginName].defaults = defaults;
    
    $.fn[pluginName] = function( options ) {
        var opts = $.extend( {}, $.fn[pluginName].defaults, options );
        console.log(opts);
    }
    
    $(window).on('DOMContentLoaded load resize', function() {
        
    });    
      
}(window.jQuery));