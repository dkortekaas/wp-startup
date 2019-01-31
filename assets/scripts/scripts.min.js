
$(function () {
    $("body").removeClass("preload");
    $('.js-load-siteNav').siteNav();

});


+ function ($) {
    'use strict';

    // PUBLIC CLASS DEFINITION
    // ================================
    var menuOpen = false;

    var SiteNav = function (element, settings) {
        this.$siteNav = $(element);
        this.settings = $.extend({}, SiteNav.DEFAULTS, settings);

        this.initialize();
    }

    SiteNav.DEFAULTS = {
        activeClass: 'active',
        menuOpen: false,
        hamburger: ".hamburger"
    }

    SiteNav.prototype.initialize = function () {
        this.$siteNav.on('click', '.hamburger', $.proxy(this.__onLinkHamburger, this));
        this.$siteNav.on('click', '.site-nav__sub-menu-toggle', $.proxy(this.__onSubMenuToggle, this));
        this.$siteNav.on('click', '.site-nav__sub-menu-toggle-reverse', $.proxy(this.__onSubMenuToggleReverse, this));
        this.$siteNav.on('click', 'a', $.proxy(this.__onLinkClick, this));
    }

    SiteNav.prototype.__onLinkHamburger = function (e) {
        $.toggleNavigation(this, e.currentTarget);
    }

    SiteNav.prototype.__onSubMenuToggle = function (e) {
        $(e.currentTarget).prev(".site-nav__sub-menu").toggleClass("site-nav__sub-menu--active");

        // get all the elements that have overflow-y: scroll and set a class to disable scroll
        var parentsUntil = $(e.currentTarget).parentsUntil(".site-nav");
        parentsUntil.filter(".site-nav__overflow").addClass("site-nav__no-overflow");
    }

    SiteNav.prototype.__onSubMenuToggleReverse = function (e) {
        $(e.currentTarget).closest(".site-nav__sub-menu").toggleClass("site-nav__sub-menu--active");
        $(e.currentTarget).closest(".site-nav__no-overflow").removeClass("site-nav__no-overflow");
    }

    SiteNav.prototype.__onLinkClick = function (e) {
        
    }
    
    $.toggleNavigation = function (e) {
        e.settings.menuOpen = !e.settings.menuOpen;

        if (e.settings.menuOpen) {
            $(e.settings.hamburger).addClass("is-active");
            $(e.$siteNav).addClass("site-nav--active");
            // scrollock: jquery.scrollLock.js
            $.scrollLock(true);
        } else {
            $(e.settings.hamburger).removeClass("is-active");
            $(e.$siteNav).removeClass("site-nav--active");
            // scrollock: jquery.scrollLock.js
            $.scrollLock(false);
        }
    }

    // PLUGIN DEFINITION
    // ==========================


    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('siteNav');
            var options = $.extend({}, SiteNav.DEFAULTS, $this.data(), typeof option === 'object' && option);

            if (!data) $this.data('siteNav', (data = new SiteNav(this, options)));
            if (typeof option === 'string') {
                var methode = data[option];
                if (methode !== null) {
                    methode();
                }
            }
        });
    }

    var old = $.fn.siteNav;

    $.fn.siteNav = Plugin;
    $.fn.siteNav.Constructor = SiteNav;

    // COLLAPSE NO CONFLICT
    $.fn.siteNav.noConflict = function () {
        $.fn.siteNav = old;
        return this;
    }

}(jQuery);

// source: https://gist.github.com/barneycarroll/6550066
// Useful for when a blocking user experience is needed
// (in my case, didn't want people unwittingly loosing their place by scrolling while a modal required their attention): 
// $.scrollLock() locks the body in place, preventing scroll until it is unlocked.

//// Locks the page if it's currently unlocked
//$.scrollLock();

//// ...or vice versa
//$.scrollLock();

//// Locks the page
//$.scrollLock(true);

//// Unlocks the page
//$.scrollLock(false);

$.scrollLock = (function scrollLockClosure() {
    'use strict';

    var $html      = $('html'),
        // State: unlocked by default
        locked     = false,
        // State: scroll to revert to
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        },
        // State: styles to revert to
        prevStyles = {},
        lockStyles = {
            'overflow-y' : 'scroll',
            'position'   : 'fixed',
            'width'      : '100%'
        };

    // Instantiate cache in case someone tries to unlock before locking
    saveStyles();

    // Save context's inline styles in cache
    function saveStyles() {
        var styleAttr = $html.attr( 'style' ),
            styleStrs = [],
            styleHash = {};

        if( !styleAttr ){
            return;
        }

        styleStrs = styleAttr.split( /;\s/ );

        $.each( styleStrs, function serializeStyleProp( styleString ){
            if( !styleString ) {
                return;
            }

            var keyValue = styleString.split( /\s:\s/ );

            if( keyValue.length < 2 ) {
                return;
            }

            styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
        } );

        $.extend( prevStyles, styleHash );
    }

    function lock() {
        var appliedLock = {};

        // Duplicate execution will break DOM statefulness
        if( locked ) {
            return;
        }

        // Save scroll state...
        prevScroll = {
            scrollLeft : $( window ).scrollLeft(),
            scrollTop  : $( window ).scrollTop()
        };

        // ...and styles
        saveStyles();

        // Compose our applied CSS
        $.extend( appliedLock, lockStyles, {
            // And apply scroll state as styles
            'left' : - prevScroll.scrollLeft + 'px',
            'top'  : - prevScroll.scrollTop  + 'px'
        } );

        // Then lock styles...
        $html.css( appliedLock );

        // ...and scroll state
        $( window )
            .scrollLeft( 0 )
            .scrollTop( 0 );

        locked = true;
    }

    function unlock() {
        // Duplicate execution will break DOM statefulness
        if( !locked ) {
            return;
        }

        // Revert styles
        $html.attr( 'style', $( '<x>' ).css( prevStyles ).attr( 'style' ) || '' );

        // Revert scroll values
        $( window )
            .scrollLeft( prevScroll.scrollLeft )
            .scrollTop(  prevScroll.scrollTop );

        locked = false;
    }

    return function scrollLock( on ) {
        // If an argument is passed, lock or unlock depending on truthiness
        if( arguments.length ) {
            if( on ) {
                lock();
            }
            else {
                unlock();
            }
        }
        // Otherwise, toggle
        else {
            if( locked ){
                unlock();
            }
            else {
                lock();
            }
        }
    };
}() );