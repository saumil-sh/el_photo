/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
;
(function (b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}), a;
    $.throttle = a = function (e, f, j, i) {
        var h, d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c
        }
        function g() {
            var o = this, m = +new Date() - d, n = arguments;

            function l() {
                d = +new Date();
                j.apply(o, n)
            }

            function k() {
                h = c
            }

            if (i && !h) {
                l()
            }
            h && clearTimeout(h);
            if (i === c && m > e) {
                l()
            } else {
                if (f !== true) {
                    h = setTimeout(i ? k : l, i === c ? e - m : e)
                }
            }
        }

        if ($.guid) {
            g.guid = j.guid = j.guid || $.guid++
        }
        return g
    };
    $.debounce = function (d, e, f) {
        return f === c ? a(d, e, false) : a(d, f, e !== false)
    }
})(this);

/*
 * BreakPoint
 * By: Hasin Hayder
 * License: MIT License
 * Date: 23rd August, 2013
 */

;
(function ($) {
    'use strict';
    var defaults = {
        breakpoints: {
            default: {
                min: 1000,
                max: 9999,
                load: false
            }
        }
    }
    var opts;
    $.BreakPoint = function (options) {
        opts = $.extend(defaults, options);
        $(window).resize($.debounce(250, false, function (e) {
            $.fn.bpCallBack();
        }));
        $.fn.bpCallBack(); //for first time window load
    }

    $.fn.bpCallBack = function () {
        var w = $(window).width();
        for (var i in opts.breakpoints) {
            var bp = opts.breakpoints[i];
            var min = bp.min;
            var max = bp.max;
            var callback = bp.callback;
            if (min == undefined) min = 0;
            if (max == undefined) max = 9999;
            // console.log(min+":"+max+":"+w);
            if (w >= min && w <= max) {
                bp.callback();
            }
        }
    }

})(jQuery);
