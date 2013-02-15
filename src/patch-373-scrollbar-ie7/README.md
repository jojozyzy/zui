Patch: 3.7.3 scrollbar js error in IE7
======================================

Summary
-------

This help you to fix js error in IE7/IE8 when you create a scrollView with axis attribute and widget size = content size.

Description
-----------

Check more details here: https://github.com/yui/yui3/pull/449

This patch can be used in yui 3.7.3, 3.8.0, 3.8.1

Code Sample
-----------

<script>
YUI({gallery: 'gallery-2013.02.13-21-08'}).use('patch-373-scrollbar-ie7', function (Y) {
    // Make the scrollView more happy by require this.
});
</script>
