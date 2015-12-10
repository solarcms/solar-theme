/*!
 * *************************************
 *    Solar Content Management System 
 * *************************************
 * 
 */
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by n0m4dz on 11/9/15.
	 */

	//SCSS
	__webpack_require__(9);

	//SCRIPTS
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * Created by n0m4dz on 11/12/15.
	 */

	/**
	 * 0.1.0
	 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
	 *
	 */
	var uiLoad = uiLoad || {};

	(function ($, $document, uiLoad) {
	    "use strict";

	    var loaded = [],
	        promise = false,
	        deferred = $.Deferred();

	    /**
	     * Chain loads the given sources
	     * @param srcs array, script or css
	     * @returns {*} Promise that will be resolved once the sources has been loaded.
	     */
	    uiLoad.load = function (srcs) {
	        srcs = $.isArray(srcs) ? srcs : srcs.split(/\s+/);
	        if (!promise) {
	            promise = deferred.promise();
	        }

	        $.each(srcs, function (index, src) {
	            promise = promise.then(function () {
	                return src.indexOf('.css') >= 0 ? loadCSS(src) : loadScript(src);
	            });
	        });
	        deferred.resolve();
	        return promise;
	    };

	    /**
	     * Dynamically loads the given script
	     * @param src The url of the script to load dynamically
	     * @returns {*} Promise that will be resolved once the script has been loaded.
	     */
	    var loadScript = function (src) {
	        if (loaded[src]) return loaded[src].promise();

	        var deferred = $.Deferred();
	        var script = $document.createElement('script');
	        script.src = src;
	        script.onload = function (e) {
	            deferred.resolve(e);
	        };
	        script.onerror = function (e) {
	            deferred.reject(e);
	        };
	        $document.body.appendChild(script);
	        loaded[src] = deferred;

	        return deferred.promise();
	    };

	    /**
	     * Dynamically loads the given CSS file
	     * @param href The url of the CSS to load dynamically
	     * @returns {*} Promise that will be resolved once the CSS file has been loaded.
	     */
	    var loadCSS = function (href) {
	        if (loaded[href]) return loaded[href].promise();

	        var deferred = $.Deferred();
	        var style = $document.createElement('link');
	        style.rel = 'stylesheet';
	        style.type = 'text/css';
	        style.href = href;
	        style.onload = function (e) {
	            deferred.resolve(e);
	        };
	        style.onerror = function (e) {
	            deferred.reject(e);
	        };
	        $document.head.appendChild(style);
	        loaded[href] = deferred;

	        return deferred.promise();
	    };
	})(jQuery, document, uiLoad);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * Created by n0m4dz on 11/12/15.
	 */
	+(function ($) {

	    $(function () {

	        // nav
	        $(document).on('click', '[ui-nav] a', function (e) {
	            var $this = $(e.target),
	                $active;
	            $this.is('a') || ($this = $this.closest('a'));

	            $active = $this.parent().siblings(".active");
	            $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);

	            $this.parent().hasClass('active') && $this.next().slideUp(200) || $this.next().slideDown(200);
	            $this.parent().toggleClass('active');

	            $this.next().is('ul') && e.preventDefault();
	        });
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * Created by n0m4dz on 11/12/15.
	 */
	+(function ($) {
	    $(function () {
	        $(document).on('click', '[ui-toggle-class]', function (e) {
	            e.preventDefault();
	            var $this = $(e.target);
	            $this.attr('ui-toggle-class') || ($this = $this.closest('[ui-toggle-class]'));
	            var classes = $this.attr('ui-toggle-class').split(','),
	                targets = $this.attr('target') && $this.attr('target').split(',') || Array($this),
	                key = 0;
	            $.each(classes, function (index, value) {
	                var target = targets[targets.length && key];
	                $(target).toggleClass(classes[index]);
	                key++;
	            });
	            $this.toggleClass('active');
	        });
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * Created by n0m4dz on 11/12/15.
	 */
	+(function ($) {
	    $(function () {
	        $(document).on('blur', 'input, textarea', function (e) {
	            $(this).val() ? $(this).addClass('has-value') : $(this).removeClass('has-value');
	        });
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/**
	 * Created by n0m4dz on 11/12/15.
	 */
	+(function ($) {
	    $(function () {
	        Waves.attach('.btn');
	        Waves.attach('[md-ink-ripple]');
	        Waves.init();
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Created by n0m4dz on 11/12/15.
	 */
	//+function ($) {
	//    $(function () {
	//        // Checks for ie
	//        var isIE = !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
	//        isIE && $('html').addClass('ie');
	//
	//        // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
	//        var ua = window['navigator']['userAgent'] || window['navigator']['vendor'] || window['opera'];
	//        (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua) && $('html').addClass('smart');
	//
	//    });
	//}(jQuery);

/***/ }
]);