
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
