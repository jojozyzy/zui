Patch: 3.7.3 scrollbar js error in IE7
======================================

Summary
-------

This help you to fix js error in IE 6/7/8 when you create a scrollView with axis attribute and widget size = content size.

Description
-----------

Check more details here: https://github.com/yui/yui3/pull/449

This patch can be used in yui 3.7.3, 3.8.0, 3.8.1

Code Sample
-----------

<script>
// Always include this patch
YUI({gallery: 'gallery-2013.02.13-21-08'}).use('patch-373-scrollbar-ie7', function (Y) {
    // Make the scrollView more happy in IE7/8 by require this.
});


// Or, only require this patch for IE 6/7/8
YUI({
    gallery: 'gallery-2013.02.13-21-08',
    groups: {
        'patches': {
            base: 'http://yui.yahooapis.com/gallery-2013.02.13-21-08/build/',
            modules: {
                'gallery-patch-373-scrollbar-ie7': {
                    condition: {
                        trigger: 'scrollview-scrollbars',
                        test: function () {
                            var IE = navigator.userAgent.match(/MSIE (\d+)/);
                            return IE && (IE[1] < 9);
                        }
                    }
                }
            }
        }
   }
}).use('patch-373-scrollbar-ie7', function (Y) {
    // Make the scrollView more happy in IE7/8 by require this.
});
</script>
