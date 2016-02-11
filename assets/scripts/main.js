/* ========================================================================
 * DOM-based Routing
 * Based on article
 * http://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
 * by Paul Irish
 * ======================================================================== */

(function($) {

    // Use this variable to set up the common and page specific functions.
    var HTMLStarter = {
        // All pages
        'common': {
            init: function() {
                // JavaScript to be fired on all pages
            },
            finalize: function() {
                // JavaScript to be fired on all pages, after page specific JS is fired
            }
        },
        // Home page
        'home': {
            init: function() {
                // JavaScript to be fired on the home page
            }
        },
        // About us page, note the change from about-us to about_us.
        'about_us': {
            init: function() {
                // JavaScript to be fired on the about us page
            }
        }
    };

    UTIL = {

        fire : function(func, funcname, args){

            var namespace = HTMLStarter;  // indicate your obj literal namespace here

            funcname = (funcname === undefined) ? 'init' : funcname;
            if (func !== '' && namespace[func] && typeof namespace[func][funcname] == 'function'){
                namespace[func][funcname](args);
            }
        },

        loadEvents : function(){

            var bodyId = document.body.id;

            // hit up common first.
            UTIL.fire('common');

            // do all the classes too.
            $.each(document.body.className.split(/\s+/), function(i, classnm){
                UTIL.fire(classnm);
                UTIL.fire(classnm, bodyId);
            });

            UTIL.fire('common', 'finalize');
        }
    };

    // kick it all off here
    $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
