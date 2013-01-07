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
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].code=["YUI.add('gallery-zui-scrollsnapper', function (Y, NAME) {","","/**"," * ZUI ScrollSnapper is a scrollView plugin to replace YUI3 ScrollViewPaginator plugin."," * It provides same interface and namespace, and better user interaction."," *"," * @module gallery-zui-scrollsnapper"," */","","/**"," * ScrollSnapper is a ScrollView plugin to replace YUI3 ScrollViewPaginator."," *"," * @class ScrollSnapper"," * @namespace zui"," * @extends Plugin.Base"," * @constructor"," */","var ScrollSnapper = function () {","        ScrollSnapper.superclass.constructor.apply(this, arguments);","    };","","ScrollSnapper.NAME = 'pluginScrollSnapper';","ScrollSnapper.NS = 'pages';","ScrollSnapper.ATTRS = {","    /**","     * The active page number for a paged scrollview in micro seconds","     *","     * @attribute snapDuration","     * @type {Number}","     * @default 500","     */","    snapDuration: {","        value: 500,","        validator: Y.Lang.isNumber","    },","","    /**","     * Dummy attribute to resolve yui3.8.0 scrollView bug","     *","     * @attribute axis","     * @type {Array}","     */","    axis: {","        value: []","    },","","    /**","     * CSS selector for a page inside the scrollview. The scrollview","     * will snap to the closest page. If selector is null, all direct","     * children are pages","     *","     * @attribute selector","     * @type {String}","     * @default null","     */","    selector: {","        value: null","    },","","    /**","     * The active page number for a paged scrollview","     *","     * @attribute index","     * @type {Number}","     * @default 0","     */","    index: {","        value: 0,","        lazyAdd: false,","        setter: function (val) {","            var T = this.get('total'),","                V = Math.max(Math.floor(val), 0);","","            if (T && (V >= T)) {","                V = T - 1;","            }","","            if (this._pages) {","                this.scrollTo(V, this.get('snapDuration'), 'ease-out');","            }","","            return V;","        }","    },","","    /**","     * The total number of pages","     *","     * @attribute total","     * @type {Number}","     * @default 0","     */","    total: {","        value: 0","    }","};","","Y.namespace('zui').ScrollSnapper = Y.extend(ScrollSnapper, Y.Plugin.Base, {","    initializer: function () {","        this._host = this.get('host');","        this._vertical = this._host._cAxis.y;","        this._snapAttr = this._vertical ? 'offsetTop' : 'offsetLeft';","        this._snapRange = this._vertical ? 'offsetHeight' : 'offsetWidth';","        this._snapSource = this._vertical ? 'scrollY' : 'scrollX';","        this.afterHostMethod('_uiDimensionsChange', this._updateSnap);","        this.afterHostEvent('render', this._updatePages);","        this.afterHostEvent('scrollEnd', this._scrollEnded);","        this._updatePages();","    },","","    /**","     * Update current page positions when scrollView width/height changed","     *","     * @method _updateSnap","     * @protected","     */","    _updateSnap: function () {","        this.scrollTo(this.get('index'));","    },","","    /**","     * Update page positions","     *","     * @method _updatePages","     * @protected","     */","    _updatePages: function () {","        var cb = this._host.get('contentBox'),","            S = this.get('selector');","","        this._pages = S ? cb.all(S) : cb.get('children');","        this.set('total', this._pages.size());","    },","","    /**","     * internal scrollEnd event handler","     *","     * @method _scrollEnded","     * @protected","     */","    _scrollEnded: function () {","        var fl = this._host._flicking;","","        Y.later(fl ? this.get('snapDuration') : 1, this, function () {","            if (fl) {","                this._host._currentVelocity = 0;","            }","            if (this._host.get(this._snapSource) === this._lastSnap) {","                return;","            }","            this.snapTo(this.snapIndex());","        });","    },","","    /**","     * Snap to a page, same as set('index', page)","     *","     * @method snapTo","     * @param page {Number} page index, start from 0","     * @chainable","     */","    snapTo: function (page) {","        return this.set('index', page);","    },","","    /**","     * Scroll to a given page in the scrollview","     *","     * @method scrollTo","     * @param page {Number} page index, start from 0","     * @param duration {Number} The number of ms the animation should last","     * @param easing {String} The timing function to use in the animation","     * @chainable","     */","    scrollTo: function (page, duration, easing) {","        var V = Math.max(Math.floor(page), 0),","            T = Math.max(duration, 0),","            O = this._pages.item(V),","            D = O ? O.get(this._snapAttr) : 0,","            C = this._host.get(this._snapSource);","","        if (C === D) {","            return;","        }","","        this._lastSnap = D;","","        if (this._vertical) {","            this._host.scrollTo(null, D, T, easing);","        } else {","            this._host.scrollTo(D, null, T, easing);","        }","","        return this;","    },","","    /**","     * Scroll to the next page in the scrollview, with animation","     *","     * @method next","     * @chainable","     */","    next: function () {","        var index = this.get('index');","        if(index < this.get('total') - 1) {","            this.set('index', index + 1);","        }","        return this;","    },","","    /**","     * Scroll to the previous page in the scrollview, with animation","     *","     * @method prev","     * @chainable","     */","    prev: function () {","        var index = this.get('index');","        if(index > 0) {","            this.set('index', index - 1);","        }","        return this;","    },","","    /**","     * Get nearest page index","     *","     * @method snapIndex","     * @return {Number|Null} nearst page index, return null when error","     */","    snapIndex: function () {","        var A = this._snapAttr,","            R = this._snapRange,","            C = this._host.get(this._snapSource), // + this._range,","            I, O,","            pages = this._pages,","            T = pages.size();","","        for (I=0;I<T;I++) {","            O = pages.item(I);","            if (C < O.get(A) + O.get(R) / 2) {","                return I;","            }","        }","        return null;","    }","});","","","}, '@VERSION@', {\"requires\": [\"scrollview-base\", \"plugin\"]});"];
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].lines = {"1":0,"18":0,"19":0,"22":0,"23":0,"24":0,"71":0,"74":0,"75":0,"78":0,"79":0,"82":0,"98":0,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":0,"108":0,"118":0,"128":0,"131":0,"132":0,"142":0,"144":0,"145":0,"146":0,"148":0,"149":0,"151":0,"163":0,"176":0,"182":0,"183":0,"186":0,"188":0,"189":0,"191":0,"194":0,"204":0,"205":0,"206":0,"208":0,"218":0,"219":0,"220":0,"222":0,"232":0,"239":0,"240":0,"241":0,"242":0,"245":0};
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].functions = {"ScrollSnapper:18":0,"setter:70":0,"initializer:99":0,"_updateSnap:117":0,"_updatePages:127":0,"(anonymous 2):144":0,"_scrollEnded:141":0,"snapTo:162":0,"scrollTo:175":0,"next:203":0,"prev:217":0,"snapIndex:231":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js"].coveredLines = 56;
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
     * will snap to the closest page. If selector is null, all direct
     * children are pages
     *
     * @attribute selector
     * @type {String}
     * @default null
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
            _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "setter", 70);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 71);
var T = this.get('total'),
                V = Math.max(Math.floor(val), 0);

            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 74);
if (T && (V >= T)) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 75);
V = T - 1;
            }

            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 78);
if (this._pages) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 79);
this.scrollTo(V, this.get('snapDuration'), 'ease-out');
            }

            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 82);
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

_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 98);
Y.namespace('zui').ScrollSnapper = Y.extend(ScrollSnapper, Y.Plugin.Base, {
    initializer: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "initializer", 99);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 100);
this._host = this.get('host');
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 101);
this._vertical = this._host._cAxis.y;
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 102);
this._snapAttr = this._vertical ? 'offsetTop' : 'offsetLeft';
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 103);
this._snapRange = this._vertical ? 'offsetHeight' : 'offsetWidth';
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 104);
this._snapSource = this._vertical ? 'scrollY' : 'scrollX';
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 105);
this.afterHostMethod('_uiDimensionsChange', this._updateSnap);
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 106);
this.afterHostEvent('render', this._updatePages);
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 107);
this.afterHostEvent('scrollEnd', this._scrollEnded);
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 108);
this._updatePages();
    },

    /**
     * Update current page positions when scrollView width/height changed
     *
     * @method _updateSnap
     * @protected
     */
    _updateSnap: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "_updateSnap", 117);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 118);
this.scrollTo(this.get('index'));
    },

    /**
     * Update page positions
     *
     * @method _updatePages
     * @protected
     */
    _updatePages: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "_updatePages", 127);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 128);
var cb = this._host.get('contentBox'),
            S = this.get('selector');

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 131);
this._pages = S ? cb.all(S) : cb.get('children');
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 132);
this.set('total', this._pages.size());
    },

    /**
     * internal scrollEnd event handler
     *
     * @method _scrollEnded
     * @protected
     */
    _scrollEnded: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "_scrollEnded", 141);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 142);
var fl = this._host._flicking;

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 144);
Y.later(fl ? this.get('snapDuration') : 1, this, function () {
            _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "(anonymous 2)", 144);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 145);
if (fl) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 146);
this._host._currentVelocity = 0;
            }
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 148);
if (this._host.get(this._snapSource) === this._lastSnap) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 149);
return;
            }
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 151);
this.snapTo(this.snapIndex());
        });
    },

    /**
     * Snap to a page, same as set('index', page)
     *
     * @method snapTo
     * @param page {Number} page index, start from 0
     * @chainable
     */
    snapTo: function (page) {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "snapTo", 162);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 163);
return this.set('index', page);
    },

    /**
     * Scroll to a given page in the scrollview
     *
     * @method scrollTo
     * @param page {Number} page index, start from 0
     * @param duration {Number} The number of ms the animation should last
     * @param easing {String} The timing function to use in the animation
     * @chainable
     */
    scrollTo: function (page, duration, easing) {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "scrollTo", 175);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 176);
var V = Math.max(Math.floor(page), 0),
            T = Math.max(duration, 0),
            O = this._pages.item(V),
            D = O ? O.get(this._snapAttr) : 0,
            C = this._host.get(this._snapSource);

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 182);
if (C === D) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 183);
return;
        }

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 186);
this._lastSnap = D;

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 188);
if (this._vertical) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 189);
this._host.scrollTo(null, D, T, easing);
        } else {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 191);
this._host.scrollTo(D, null, T, easing);
        }

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 194);
return this;
    },

    /**
     * Scroll to the next page in the scrollview, with animation
     *
     * @method next
     * @chainable
     */
    next: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "next", 203);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 204);
var index = this.get('index');
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 205);
if(index < this.get('total') - 1) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 206);
this.set('index', index + 1);
        }
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 208);
return this;
    },

    /**
     * Scroll to the previous page in the scrollview, with animation
     *
     * @method prev
     * @chainable
     */
    prev: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "prev", 217);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 218);
var index = this.get('index');
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 219);
if(index > 0) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 220);
this.set('index', index - 1);
        }
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 222);
return this;
    },

    /**
     * Get nearest page index
     *
     * @method snapIndex
     * @return {Number|Null} nearst page index, return null when error
     */
    snapIndex: function () {
        _yuitest_coverfunc("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", "snapIndex", 231);
_yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 232);
var A = this._snapAttr,
            R = this._snapRange,
            C = this._host.get(this._snapSource), // + this._range,
            I, O,
            pages = this._pages,
            T = pages.size();

        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 239);
for (I=0;I<T;I++) {
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 240);
O = pages.item(I);
            _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 241);
if (C < O.get(A) + O.get(R) / 2) {
                _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 242);
return I;
            }
        }
        _yuitest_coverline("build/gallery-zui-scrollsnapper/gallery-zui-scrollsnapper.js", 245);
return null;
    }
});


}, '@VERSION@', {"requires": ["scrollview-base", "plugin"]});
