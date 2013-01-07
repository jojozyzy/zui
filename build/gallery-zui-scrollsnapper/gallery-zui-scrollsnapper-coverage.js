if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js",
    code: []
};
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].code=["YUI.add('gallery-zui-scrollsnapper', function (Y, NAME) {","","/**"," * ZUI ScrollSnapper is a scrollView plugin to replace YUI3 ScrollViewPaginator plugin."," * It provides same interface and namespace, and better user interaction."," *"," * @module gallery-zui-scrollsnapper"," */","","/**"," * ScrollSnapper is a ScrollView plugin to replace YUI3 ScrollViewPaginator."," *"," * @class ScrollSnapper"," * @namespace zui"," * @extends Plugin.Base"," * @constructor"," */","var ScrollSnapper = function () {","        ScrollSnapper.superclass.constructor.apply(this, arguments);","    };","","ScrollSnapper.NAME = 'pluginScrollSnapper';","ScrollSnapper.NS = 'pages';","ScrollSnapper.ATTRS = {","    /**","     * The active page number for a paged scrollview in micro seconds","     *","     * @attribute snapDuration","     * @type {Number}","     * @default 500","     */","    snapDuration: {","        value: 500,","        validator: Y.Lang.isNumber","    },","","    /**","     * Dummy attribute to resolve yui3.8.0 scrollView bug","     *","     * @attribute axis","     * @type {Array}","     */","    axis: {","        value: []","    },","","    /**","     * CSS selector for a page inside the scrollview. The scrollview","     * will snap to the closest page.","     *","     * @attribute selector","     * @type {String}","     */","    selector: {","        value: null","    },","","    /**","     * The active page number for a paged scrollview","     *","     * @attribute index","     * @type {Number}","     * @default 0","     */","    index: {","        value: 0,","        lazyAdd: false,","        setter: function (val) {","            var T = this.get('total'),","                V = Math.max(Math.floor(val), 0);","","            if (T && (V >= T)) {","                V = T - 1;","            }","","            if (this._pages) {","                this.scrollTo(V, this.get('snapDuration'), 'ease-out');","            }","","            return V;","        }","    },","","    /**","     * The total number of pages","     *","     * @attribute total","     * @type {Number}","     * @default 0","     */","    total: {","        value: 0","    }","};","","Y.namespace('zui').ScrollSnapper = Y.extend(ScrollSnapper, Y.Plugin.Base, {","    initializer: function () {","        this._host = this.get('host');","        this._vertical = this._host._scrollsVertical;","        this._snapAttr = this._vertical ? 'offsetTop' : 'offsetLeft';","        this._snapRange = this._vertical ? 'offsetHeight' : 'offsetWidth';","        this._snapSource = this._vertical ? 'scrollY' : 'scrollX';","        this.afterHostMethod('_uiDimensionsChange', this._updateSnap);","        this.afterHostEvent('render', this._updatePages);","        this.afterHostEvent('scrollEnd', this._scrollEnded);","        this._updatePages();","    },","","    /**","     * Update current page positions when scrollView width/height changed","     *","     * @method _updateSnap","     * @protected","     */","    _updateSnap: function () {","        this.scrollTo(this.get('index'));","    },","","    /**","     * Update page positions","     *","     * @method _updatePages","     * @protected","     */","    _updatePages: function () {","        var cb = this._host.get('contentBox'),","            S = this.get('selector');","","        this._pages = S ? cb.all(S) : cb.get('children');","        this.set('total', this._pages.size());","    },","","    /**","     * internal scrollEnd event handler","     *","     * @method _scrollEnded","     * @protected","     */","    _scrollEnded: function () {","        var fl = this._host._flicking;","","        Y.later(fl ? this.get('snapDuration') : 1, this, function () {","            if (fl) {","                this._host._currentVelocity = 0;","            }","            if (this._host.get(this._snapSource) === this._lastSnap) {","                return;","            }","            this.snapTo(this.snapIndex());","        });","    },","","    /**","     * Snap to a page, same as set('index', page)","     *","     * @method snapTo","     * @param page {Number} page index, start from 0","     */","    snapTo: function (page) {","        this.set('index', page);","    },","","    /**","     * Scroll to a given page in the scrollview","     *","     * @method scrollTo","     * @param page {Number} page index, start from 0","     * @param duration {Number} The number of ms the animation should last","     * @param easing {String} The timing function to use in the animation","     */","    scrollTo: function (page, duration, easing) {","        var V = Math.max(Math.floor(page), 0),","            T = Math.max(duration, 0),","            O = this._pages.item(V),","            D = O ? O.get(this._snapAttr) : 0,","            C = this._host.get(this._snapSource);","","        if (C === D) {","            return;","        }","","        this._lastSnap = D;","","        if (this._vertical) {","            this._host.scrollTo(null, D, T, easing);","        } else {","            this._host.scrollTo(D, null, T, easing);","        }","    },","","    /**","     * Scroll to the next page in the scrollview, with animation","     *","     * @method next","     */","    next: function () {","        var index = this.get('index');","        if(index < this.get('total') - 1) {","            this.set('index', index + 1);","        }","    },","","    /**","     * Scroll to the previous page in the scrollview, with animation","     *","     * @method prev","     */","    prev: function () {","        var index = this.get('index');","        if(index > 0) {","            this.set('index', index - 1);","        }","    },","","    /**","     * Get nearest page index","     *","     * @method snapIndex","     */","    snapIndex: function () {","        var A = this._snapAttr,","            R = this._snapRange,","            C = this._host.get(this._snapSource), // + this._range,","            I, O,","            pages = this._pages,","            T = pages.size();","","        for (I=0;I<T;I++) {","            O = pages.item(I);","            if (C < O.get(A) + O.get(R) / 2) {","                return I;","            }","        }","        return null;","    }","});","","","}, '@VERSION@', {\"requires\": [\"scrollview-base\", \"plugin\"]});"];
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].lines = {"1":0,"18":0,"19":0,"22":0,"23":0,"24":0,"69":0,"72":0,"73":0,"76":0,"77":0,"80":0,"96":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"116":0,"126":0,"129":0,"130":0,"140":0,"142":0,"143":0,"144":0,"146":0,"147":0,"149":0,"160":0,"172":0,"178":0,"179":0,"182":0,"184":0,"185":0,"187":0,"197":0,"198":0,"199":0,"209":0,"210":0,"211":0,"221":0,"228":0,"229":0,"230":0,"231":0,"234":0};
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].functions = {"ScrollSnapper:18":0,"setter:68":0,"initializer:97":0,"_updateSnap:115":0,"_updatePages:125":0,"(anonymous 2):142":0,"_scrollEnded:139":0,"snapTo:159":0,"scrollTo:171":0,"next:196":0,"prev:208":0,"snapIndex:220":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].coveredLines = 53;
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].coveredFunctions = 13;
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 1);
YUI.add('gallery-zui-scrollsnapper', function (Y, NAME) {

/**
 * ZUI ScrollSnapper is a scrollView plugin to replace YUI3 ScrollViewPaginator plugin.
 * It provides same interface and namespace, and better user interaction.
 *
 * @module gallery-zui-scrollsnapper
 */

/**
 * ScrollSnapper is a ScrollView plugin to replace YUI3 ScrollViewPaginator.
 *
 * @class ScrollSnapper
 * @namespace zui
 * @extends Plugin.Base
 * @constructor
 */
_yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 18);
var ScrollSnapper = function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "ScrollSnapper", 18);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 19);
ScrollSnapper.superclass.constructor.apply(this, arguments);
    };

_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 22);
ScrollSnapper.NAME = 'pluginScrollSnapper';
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 23);
ScrollSnapper.NS = 'pages';
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 24);
ScrollSnapper.ATTRS = {
    /**
     * The active page number for a paged scrollview in micro seconds
     *
     * @attribute snapDuration
     * @type {Number}
     * @default 500
     */
    snapDuration: {
        value: 500,
        validator: Y.Lang.isNumber
    },

    /**
     * Dummy attribute to resolve yui3.8.0 scrollView bug
     *
     * @attribute axis
     * @type {Array}
     */
    axis: {
        value: []
    },

    /**
     * CSS selector for a page inside the scrollview. The scrollview
     * will snap to the closest page.
     *
     * @attribute selector
     * @type {String}
     */
    selector: {
        value: null
    },

    /**
     * The active page number for a paged scrollview
     *
     * @attribute index
     * @type {Number}
     * @default 0
     */
    index: {
        value: 0,
        lazyAdd: false,
        setter: function (val) {
            _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "setter", 68);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 69);
var T = this.get('total'),
                V = Math.max(Math.floor(val), 0);

            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 72);
if (T && (V >= T)) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 73);
V = T - 1;
            }

            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 76);
if (this._pages) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 77);
this.scrollTo(V, this.get('snapDuration'), 'ease-out');
            }

            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 80);
return V;
        }
    },

    /**
     * The total number of pages
     *
     * @attribute total
     * @type {Number}
     * @default 0
     */
    total: {
        value: 0
    }
};

_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 96);
Y.namespace('zui').ScrollSnapper = Y.extend(ScrollSnapper, Y.Plugin.Base, {
    initializer: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "initializer", 97);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 98);
this._host = this.get('host');
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 99);
this._vertical = this._host._scrollsVertical;
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 100);
this._snapAttr = this._vertical ? 'offsetTop' : 'offsetLeft';
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 101);
this._snapRange = this._vertical ? 'offsetHeight' : 'offsetWidth';
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 102);
this._snapSource = this._vertical ? 'scrollY' : 'scrollX';
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 103);
this.afterHostMethod('_uiDimensionsChange', this._updateSnap);
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 104);
this.afterHostEvent('render', this._updatePages);
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 105);
this.afterHostEvent('scrollEnd', this._scrollEnded);
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 106);
this._updatePages();
    },

    /**
     * Update current page positions when scrollView width/height changed
     *
     * @method _updateSnap
     * @protected
     */
    _updateSnap: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "_updateSnap", 115);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 116);
this.scrollTo(this.get('index'));
    },

    /**
     * Update page positions
     *
     * @method _updatePages
     * @protected
     */
    _updatePages: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "_updatePages", 125);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 126);
var cb = this._host.get('contentBox'),
            S = this.get('selector');

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 129);
this._pages = S ? cb.all(S) : cb.get('children');
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 130);
this.set('total', this._pages.size());
    },

    /**
     * internal scrollEnd event handler
     *
     * @method _scrollEnded
     * @protected
     */
    _scrollEnded: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "_scrollEnded", 139);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 140);
var fl = this._host._flicking;

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 142);
Y.later(fl ? this.get('snapDuration') : 1, this, function () {
            _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "(anonymous 2)", 142);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 143);
if (fl) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 144);
this._host._currentVelocity = 0;
            }
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 146);
if (this._host.get(this._snapSource) === this._lastSnap) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 147);
return;
            }
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 149);
this.snapTo(this.snapIndex());
        });
    },

    /**
     * Snap to a page, same as set('index', page)
     *
     * @method snapTo
     * @param page {Number} page index, start from 0
     */
    snapTo: function (page) {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "snapTo", 159);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 160);
this.set('index', page);
    },

    /**
     * Scroll to a given page in the scrollview
     *
     * @method scrollTo
     * @param page {Number} page index, start from 0
     * @param duration {Number} The number of ms the animation should last
     * @param easing {String} The timing function to use in the animation
     */
    scrollTo: function (page, duration, easing) {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "scrollTo", 171);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 172);
var V = Math.max(Math.floor(page), 0),
            T = Math.max(duration, 0),
            O = this._pages.item(V),
            D = O ? O.get(this._snapAttr) : 0,
            C = this._host.get(this._snapSource);

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 178);
if (C === D) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 179);
return;
        }

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 182);
this._lastSnap = D;

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 184);
if (this._vertical) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 185);
this._host.scrollTo(null, D, T, easing);
        } else {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 187);
this._host.scrollTo(D, null, T, easing);
        }
    },

    /**
     * Scroll to the next page in the scrollview, with animation
     *
     * @method next
     */
    next: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "next", 196);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 197);
var index = this.get('index');
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 198);
if(index < this.get('total') - 1) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 199);
this.set('index', index + 1);
        }
    },

    /**
     * Scroll to the previous page in the scrollview, with animation
     *
     * @method prev
     */
    prev: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "prev", 208);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 209);
var index = this.get('index');
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 210);
if(index > 0) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 211);
this.set('index', index - 1);
        }
    },

    /**
     * Get nearest page index
     *
     * @method snapIndex
     */
    snapIndex: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "snapIndex", 220);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 221);
var A = this._snapAttr,
            R = this._snapRange,
            C = this._host.get(this._snapSource), // + this._range,
            I, O,
            pages = this._pages,
            T = pages.size();

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 228);
for (I=0;I<T;I++) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 229);
O = pages.item(I);
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 230);
if (C < O.get(A) + O.get(R) / 2) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 231);
return I;
            }
        }
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 234);
return null;
    }
});


}, '@VERSION@', {"requires": ["scrollview-base", "plugin"]});
