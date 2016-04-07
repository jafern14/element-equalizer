/*!
 * jQuery scrollwatch 0.1.0
 * https://github.com/jafern14/element-equalizer
 *
 * Copyright (c) 2016 Juan Fernandez
 *
 * Released under the MIT license:
 * https://github.com/jafern14/element-equalizer/blob/master/LICENSE
 */
(function ($) {

    var pluginName = 'equalizer',
        defaults = {
        eleGroupCount: 1,
        widthEqualizing: false,
        heightEqualizing: true,
        resizingRatio: 'auto'
    };

    $.fn[pluginName].defaults = defaults;

    $.fn[pluginName] = function (options) {
        var opts = $.extend({}, $.fn[pluginName].defaults, options);
        console.log(opts);
    };

    $(window).on('DOMContentLoaded load resize', function () {});
})(window.jQuery);
//# sourceMappingURL=jquery-element-equalizer.js.map
