/*!
 * StickyHeader Jquery Plugin v1.0.0
 *
 * Copyright 2016, Christopher Díaz Pantoja http://christopher.mx
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-04T15:27Z
 */

;(function($){
    $.fn.stickyHeader = function(options){
        var header = this;
        var header_height = 0;
        var header_stickied = false;
        var pluginname = "stickyHeader";
        var screen_width = $(window).width();
        var screen_height = $(window).height();
        var sticky_class = {
    	    'z-index': 9999,
    	    'position': 'fixed'
        };
        var settings = $.extend({
            maxwidth: 0,
            'class': ''
        }, options);

        if($(this).length > 0){
            if((typeof settings.maxwidth) === 'number'){
                if(screen_width > settings.maxwidth){
                    $(window).scroll(adjustHeader);
                    adjustHeader();
                }
            }
            else{
                throw new Error(pluginname + ": maxwidth must be a number or zero");
            }
        }
        else{
            throw new Error(pluginname + ": No element found");
        }

        function adjustHeader(){
            header_height = $(header).height();
            var top = window.pageXOffset ? window.pageXOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
            var final_height = screen_height - header_height;
    		if(top > header_height){
    			addStyle();
    		}
    		else{
    			removeStyle();
    		}
        }

        function addStyle(){
            $('body').css('padding-top', header_height + 'px');
            if(settings.class){
                $(header).addClass(settings.class);
            }
            $(header).css(sticky_class);

            if(!header_stickied){
                $(header).css('top', '-' + header_height + 'px');
                $(header).animate({top: 0}, 400);
            }
            header_stickied = true;
        }

        function removeStyle(){
            if(settings.class){
                $(header).removeClass(settings.class);
            }
            $(header).css({'position':'static'});
            $('body').css('padding-top', '0');
            header_stickied = false;
        }


    };
}(jQuery));
