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
_yuitest_coverage["build/gallery-zui-rascroll/gallery-zui-rascroll.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-zui-rascroll/gallery-zui-rascroll.js",
    code: []
};
_yuitest_coverage["build/gallery-zui-rascroll/gallery-zui-rascroll.js"].code=["YUI.add('gallery-zui-rascroll', function (Y, NAME) {","","/**"," * The RAScrollPlugin help to handle scrollView behaviors."," * When a Horizontal scrollView is placed inside a Vertical scrollView,"," * user can do only x or y direction slick."," *"," * @module gallery-zui-rascroll"," */","var dragging = 0,","    dragStart = false,","    onlyX = false,","/**"," * RAScrollPlugin is a ScrollView plugin that adds right angle flick behaviors."," *"," * @class RAScrollPlugin"," * @namespace zui"," * @extends Plugin.Base"," * @constructor"," */","    RAScrollPlugin = function () {","        RAScrollPlugin.superclass.constructor.apply(this, arguments);","    };","","RAScrollPlugin.NAME = 'pluginRAScroll';","RAScrollPlugin.NS = 'zras';","RAScrollPlugin.ATTRS = {","    /**","     * make the scrollView as horizontal or not.","     *","     * @attribute horizontal","     * @default true","     * @type Boolean","     */","    horizontal: {","        value: true,","        lazyAdd: false,","        validator: Y.Lang.isBoolean,","        setter: function (V) {","            this._hori = V;","            return V;","        }","    },","","    /**","     * A boolean decides the right angle behavior should started when other scrollView is also dragged.","     *","     * @attribute cooperation","     * @default false","     * @type Boolean","     */","    cooperation: {","        value: false,","        lazyAdd: false,","        validator: Y.Lang.isBoolean,","        setter: function (V) {","            this._coop = V;","            return V;","        }","    }","};","","Y.namespace('zui').RAScroll = Y.extend(RAScrollPlugin, Y.Plugin.Base, {","    initializer: function () {","        this._host = this.get('host');","        this._node = this._host.get('boundingBox');","        this._cnt = this._host.get('contentBox');","        this._start = false;","","        this._handles.push(new Y.EventHandle([","            this._node.on('gesturemovestart', this.handleGestureMoveStart),","            this._node.on('gesturemove', Y.bind(this.handleGestureMove, this)),","            this._cnt.on('gesturemoveend', Y.bind(this.handleGestureMoveEnd, this), {standAlone: true})","        ]));","","        this.syncScroll();","    },","","    /**","     * internal gesturemovestart event handler","     *","     * @method handleGestureMoveStart","     * @protected","     */","    handleGestureMoveStart: function () {","        dragging++;","    },","","    /**","     * internal gesturemove event handler","     *","     * @method handleGestureMove","     * @protected","     */","    handleGestureMove: function (E) {","        if (this._start) {","            return;","        }","","        this._start = true;","","        if (!dragStart) {","            onlyX = Math.abs(this._host._gesture.startClientX - E.clientX) > Math.abs(this._host._gesture.startClientY - E.clientY);","            dragStart = true;","        }","","        if (this._coop && dragging < 2) {","            return;","        }","","        if (this._hori ? !onlyX : onlyX) {","            this._host.set('disabled', true);","        } else {","            E.preventDefault();","        }","    },","","    /**","     * internal gesturemoveend event handler","     *","     * @method handleGestureMoveEnd","     * @protected","     */","    handleGestureMoveEnd: function () {","        this._start = false;","        dragStart = false;","        dragging = 0;","","        if (this._hori ? !onlyX : onlyX) {","            // IOS6 setTimeout bug fix","            if (Y.UA.ipad + Y.UA.iphone + Y.UA.ipod >= 6) {","                this._host.set('disabled', false);","            } else {","                // Use later to make multi scrollview more stable when","                // user finger off","                Y.later(1, this._host, this._host.set, ['disabled', false]);","            }","","        }","    },","","    /**","     * sync width or height for vertical scroll or horizontal scroll","     *","     * @method syncScroll","     */","    syncScroll: function () {","        if (this._hori) {","            this._node.set('offsetHeight', this._node.get('scrollHeight'));","        } else {","            this.syncWidth();","        }","    },","","    /**","     * make the scrollView become vertical scrolling","     *","     * @method syncWidth","     */","    syncWidth: function () {","        var c = this._cnt,","            sw = this._node.get('scrollWidth'),","            pw = this._node.get('offsetWidth'),","            cw = c.get('offsetWidth');","","        if (cw && (sw > pw)) {","            c.set('offsetWidth', cw + pw - sw);","        }","    }","});","","","}, '@VERSION@', {\"skinnable\": false, \"requires\": [\"scrollview\"]});"];
_yuitest_coverage["build/gallery-zui-rascroll/gallery-zui-rascroll.js"].lines = {"1":0,"10":0,"22":0,"25":0,"26":0,"27":0,"40":0,"41":0,"57":0,"58":0,"63":0,"65":0,"66":0,"67":0,"68":0,"70":0,"76":0,"86":0,"96":0,"97":0,"100":0,"102":0,"103":0,"104":0,"107":0,"108":0,"111":0,"112":0,"114":0,"125":0,"126":0,"127":0,"129":0,"131":0,"132":0,"136":0,"148":0,"149":0,"151":0,"161":0,"166":0,"167":0};
_yuitest_coverage["build/gallery-zui-rascroll/gallery-zui-rascroll.js"].functions = {"RAScrollPlugin:21":0,"setter:39":0,"setter:56":0,"initializer:64":0,"handleGestureMoveStart:85":0,"handleGestureMove:95":0,"handleGestureMoveEnd:124":0,"syncScroll:147":0,"syncWidth:160":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-zui-rascroll/gallery-zui-rascroll.js"].coveredLines = 42;
_yuitest_coverage["build/gallery-zui-rascroll/gallery-zui-rascroll.js"].coveredFunctions = 10;
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 1);
YUI.add('gallery-zui-rascroll', function (Y, NAME) {

/**
 * The RAScrollPlugin help to handle scrollView behaviors.
 * When a Horizontal scrollView is placed inside a Vertical scrollView,
 * user can do only x or y direction slick.
 *
 * @module gallery-zui-rascroll
 */
_yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 10);
var dragging = 0,
    dragStart = false,
    onlyX = false,
/**
 * RAScrollPlugin is a ScrollView plugin that adds right angle flick behaviors.
 *
 * @class RAScrollPlugin
 * @namespace zui
 * @extends Plugin.Base
 * @constructor
 */
    RAScrollPlugin = function () {
        _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "RAScrollPlugin", 21);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 22);
RAScrollPlugin.superclass.constructor.apply(this, arguments);
    };

_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 25);
RAScrollPlugin.NAME = 'pluginRAScroll';
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 26);
RAScrollPlugin.NS = 'zras';
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 27);
RAScrollPlugin.ATTRS = {
    /**
     * make the scrollView as horizontal or not.
     *
     * @attribute horizontal
     * @default true
     * @type Boolean
     */
    horizontal: {
        value: true,
        lazyAdd: false,
        validator: Y.Lang.isBoolean,
        setter: function (V) {
            _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "setter", 39);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 40);
this._hori = V;
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 41);
return V;
        }
    },

    /**
     * A boolean decides the right angle behavior should started when other scrollView is also dragged.
     *
     * @attribute cooperation
     * @default false
     * @type Boolean
     */
    cooperation: {
        value: false,
        lazyAdd: false,
        validator: Y.Lang.isBoolean,
        setter: function (V) {
            _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "setter", 56);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 57);
this._coop = V;
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 58);
return V;
        }
    }
};

_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 63);
Y.namespace('zui').RAScroll = Y.extend(RAScrollPlugin, Y.Plugin.Base, {
    initializer: function () {
        _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "initializer", 64);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 65);
this._host = this.get('host');
        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 66);
this._node = this._host.get('boundingBox');
        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 67);
this._cnt = this._host.get('contentBox');
        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 68);
this._start = false;

        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 70);
this._handles.push(new Y.EventHandle([
            this._node.on('gesturemovestart', this.handleGestureMoveStart),
            this._node.on('gesturemove', Y.bind(this.handleGestureMove, this)),
            this._cnt.on('gesturemoveend', Y.bind(this.handleGestureMoveEnd, this), {standAlone: true})
        ]));

        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 76);
this.syncScroll();
    },

    /**
     * internal gesturemovestart event handler
     *
     * @method handleGestureMoveStart
     * @protected
     */
    handleGestureMoveStart: function () {
        _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "handleGestureMoveStart", 85);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 86);
dragging++;
    },

    /**
     * internal gesturemove event handler
     *
     * @method handleGestureMove
     * @protected
     */
    handleGestureMove: function (E) {
        _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "handleGestureMove", 95);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 96);
if (this._start) {
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 97);
return;
        }

        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 100);
this._start = true;

        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 102);
if (!dragStart) {
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 103);
onlyX = Math.abs(this._host._gesture.startClientX - E.clientX) > Math.abs(this._host._gesture.startClientY - E.clientY);
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 104);
dragStart = true;
        }

        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 107);
if (this._coop && dragging < 2) {
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 108);
return;
        }

        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 111);
if (this._hori ? !onlyX : onlyX) {
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 112);
this._host.set('disabled', true);
        } else {
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 114);
E.preventDefault();
        }
    },

    /**
     * internal gesturemoveend event handler
     *
     * @method handleGestureMoveEnd
     * @protected
     */
    handleGestureMoveEnd: function () {
        _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "handleGestureMoveEnd", 124);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 125);
this._start = false;
        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 126);
dragStart = false;
        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 127);
dragging = 0;

        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 129);
if (this._hori ? !onlyX : onlyX) {
            // IOS6 setTimeout bug fix
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 131);
if (Y.UA.ipad + Y.UA.iphone + Y.UA.ipod >= 6) {
                _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 132);
this._host.set('disabled', false);
            } else {
                // Use later to make multi scrollview more stable when
                // user finger off
                _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 136);
Y.later(1, this._host, this._host.set, ['disabled', false]);
            }

        }
    },

    /**
     * sync width or height for vertical scroll or horizontal scroll
     *
     * @method syncScroll
     */
    syncScroll: function () {
        _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "syncScroll", 147);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 148);
if (this._hori) {
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 149);
this._node.set('offsetHeight', this._node.get('scrollHeight'));
        } else {
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 151);
this.syncWidth();
        }
    },

    /**
     * make the scrollView become vertical scrolling
     *
     * @method syncWidth
     */
    syncWidth: function () {
        _yuitest_coverfunc("build/gallery-zui-rascroll/gallery-zui-rascroll.js", "syncWidth", 160);
_yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 161);
var c = this._cnt,
            sw = this._node.get('scrollWidth'),
            pw = this._node.get('offsetWidth'),
            cw = c.get('offsetWidth');

        _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 166);
if (cw && (sw > pw)) {
            _yuitest_coverline("build/gallery-zui-rascroll/gallery-zui-rascroll.js", 167);
c.set('offsetWidth', cw + pw - sw);
        }
    }
});


}, '@VERSION@', {"skinnable": false, "requires": ["scrollview"]});
