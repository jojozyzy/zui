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
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js",
    code: []
};
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].code=["YUI.add('gallery-patch-373-scrollbar-ie7', function (Y, NAME) {","","    var CHILD_CACHE = \"childCache\",","        HORIZ_CACHE = \"_sbh\",","        VERT_CACHE = \"_sbv\",","        TRANSLATE_X = \"translateX(\",","        TRANSLATE_Y = \"translateY(\",","        SCALE_X = \"scaleX(\",","        SCALE_Y = \"scaleY(\",","        WIDTH = \"width\",","        HEIGHT = \"height\",","        TOP = \"top\",","        LEFT = \"left\",","        Transition = Y.Transition,","        NATIVE_TRANSITIONS = Transition.useNative,","        TRANSFORM = \"transform\",","        SCROLL_X = \"scrollX\",","        SCROLL_Y = \"scrollY\",","        PX = \"px\",","        CLOSE = \")\",","        PX_CLOSE = PX + CLOSE;","","    Y.Plugin.ScrollViewScrollbars.prototype._updateBar = function(scrollbar, current, duration, horiz) {","","        var host = this._host,","            basic = this._basic,","","            scrollbarSize = 0,","            scrollbarPos = 1,","","            childCache = scrollbar.getData(CHILD_CACHE),","            lastChild = childCache.lc,","            middleChild = childCache.mc,","            firstChildSize = childCache.fcSize,","            lastChildSize = childCache.lcSize,","            middleChildSize,","            lastChildPosition,","","            transition,","            translate,","            scale,","","            dim,","            dimOffset,","            dimCache,","            widgetSize,","            contentSize;","","        if (horiz) {","            dim = WIDTH;","            dimOffset = LEFT;","            dimCache = HORIZ_CACHE;","            widgetSize = this._dims.offsetWidth;","            contentSize = this._dims.scrollWidth;","            translate = TRANSLATE_X;","            scale = SCALE_X;","            current = (current !== undefined) ? current : host.get(SCROLL_X);","        } else {","            dim = HEIGHT;","            dimOffset = TOP;","            dimCache = VERT_CACHE;","            widgetSize = this._dims.offsetHeight;","            contentSize = this._dims.scrollHeight;","            translate = TRANSLATE_Y;","            scale = SCALE_Y;","            current = (current !== undefined) ? current : host.get(SCROLL_Y);","        }","","        scrollbarSize = Math.floor(widgetSize * (widgetSize/contentSize));","        scrollbarPos = Math.floor((current/(contentSize - widgetSize)) * (widgetSize - scrollbarSize));","        if (scrollbarSize > widgetSize) {","            scrollbarSize = 1;","        }","","        if (scrollbarPos > (widgetSize - scrollbarSize)) {","            scrollbarSize = scrollbarSize - (scrollbarPos - (widgetSize - scrollbarSize));","        } else if (scrollbarPos < 0) {","            scrollbarSize = scrollbarPos + scrollbarSize;","            scrollbarPos = 0;","        } else if (isNaN(scrollbarPos)) {","            scrollbarPos = 0;","        }","","        middleChildSize = (scrollbarSize - (firstChildSize + lastChildSize));","","        if (middleChildSize < 0) {","            middleChildSize = 0;","        }","","        if (middleChildSize === 0 && scrollbarPos !== 0) {","            scrollbarPos = widgetSize - (firstChildSize + lastChildSize) - 1;","        }","","        if (duration !== 0) {","            // Position Scrollbar","            transition = {","                duration : duration","            };","","            if (NATIVE_TRANSITIONS) {","                transition.transform = translate + scrollbarPos + PX_CLOSE;","            } else {","                transition[dimOffset] = scrollbarPos + PX;","            }","","            scrollbar.transition(transition);","","        } else {","            if (NATIVE_TRANSITIONS) {","                scrollbar.setStyle(TRANSFORM, translate + scrollbarPos + PX_CLOSE);","            } else {","                scrollbar.setStyle(dimOffset, scrollbarPos + PX);","            }","        }","","        // Resize Scrollbar Middle Child","        if (this[dimCache] !== middleChildSize) {","            this[dimCache] = middleChildSize;","","            if (middleChildSize > 0) {","","                if (duration !== 0) {","                    transition = {","                        duration : duration","                    };","","                    if(NATIVE_TRANSITIONS) {","                        transition.transform = scale + middleChildSize + CLOSE;","                    } else {","                        transition[dim] = middleChildSize + PX;","                    }","","                    middleChild.transition(transition);","                } else {","                    if (NATIVE_TRANSITIONS) {","                        middleChild.setStyle(TRANSFORM, scale + middleChildSize + CLOSE);","                    } else {","                        middleChild.setStyle(dim, middleChildSize + PX);","                    }","                }","    ","                // Position Last Child","                if (!horiz || !basic) {","","                    lastChildPosition = scrollbarSize - lastChildSize;","    ","                    if(duration !== 0) {","                        transition = {","                            duration : duration","                        };","                ","                        if (NATIVE_TRANSITIONS) {","                            transition.transform = translate + lastChildPosition + PX_CLOSE;","                        } else {","                            transition[dimOffset] = lastChildPosition;","                        }","","                        lastChild.transition(transition);","                    } else {","                        if (NATIVE_TRANSITIONS) {","                            lastChild.setStyle(TRANSFORM, translate + lastChildPosition + PX_CLOSE);","                        } else {","                            lastChild.setStyle(dimOffset, lastChildPosition + PX);","                        }","                    }","                }","            }","        }","    };","","","}, '@VERSION@', {\"requires\": [\"scrollview\"]});"];
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].lines = {"1":0,"3":0,"23":0,"25":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"69":0,"70":0,"71":0,"72":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"84":0,"86":0,"87":0,"90":0,"91":0,"94":0,"96":0,"100":0,"101":0,"103":0,"106":0,"109":0,"110":0,"112":0,"117":0,"118":0,"120":0,"122":0,"123":0,"127":0,"128":0,"130":0,"133":0,"135":0,"136":0,"138":0,"143":0,"145":0,"147":0,"148":0,"152":0,"153":0,"155":0,"158":0,"160":0,"161":0,"163":0};
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].functions = {"_updateBar:23":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].coveredLines = 69;
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].coveredFunctions = 2;
_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 1);
YUI.add('gallery-patch-373-scrollbar-ie7', function (Y, NAME) {

    _yuitest_coverfunc("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 3);
var CHILD_CACHE = "childCache",
        HORIZ_CACHE = "_sbh",
        VERT_CACHE = "_sbv",
        TRANSLATE_X = "translateX(",
        TRANSLATE_Y = "translateY(",
        SCALE_X = "scaleX(",
        SCALE_Y = "scaleY(",
        WIDTH = "width",
        HEIGHT = "height",
        TOP = "top",
        LEFT = "left",
        Transition = Y.Transition,
        NATIVE_TRANSITIONS = Transition.useNative,
        TRANSFORM = "transform",
        SCROLL_X = "scrollX",
        SCROLL_Y = "scrollY",
        PX = "px",
        CLOSE = ")",
        PX_CLOSE = PX + CLOSE;

    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 23);
Y.Plugin.ScrollViewScrollbars.prototype._updateBar = function(scrollbar, current, duration, horiz) {

        _yuitest_coverfunc("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", "_updateBar", 23);
_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 25);
var host = this._host,
            basic = this._basic,

            scrollbarSize = 0,
            scrollbarPos = 1,

            childCache = scrollbar.getData(CHILD_CACHE),
            lastChild = childCache.lc,
            middleChild = childCache.mc,
            firstChildSize = childCache.fcSize,
            lastChildSize = childCache.lcSize,
            middleChildSize,
            lastChildPosition,

            transition,
            translate,
            scale,

            dim,
            dimOffset,
            dimCache,
            widgetSize,
            contentSize;

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 49);
if (horiz) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 50);
dim = WIDTH;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 51);
dimOffset = LEFT;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 52);
dimCache = HORIZ_CACHE;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 53);
widgetSize = this._dims.offsetWidth;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 54);
contentSize = this._dims.scrollWidth;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 55);
translate = TRANSLATE_X;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 56);
scale = SCALE_X;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 57);
current = (current !== undefined) ? current : host.get(SCROLL_X);
        } else {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 59);
dim = HEIGHT;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 60);
dimOffset = TOP;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 61);
dimCache = VERT_CACHE;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 62);
widgetSize = this._dims.offsetHeight;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 63);
contentSize = this._dims.scrollHeight;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 64);
translate = TRANSLATE_Y;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 65);
scale = SCALE_Y;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 66);
current = (current !== undefined) ? current : host.get(SCROLL_Y);
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 69);
scrollbarSize = Math.floor(widgetSize * (widgetSize/contentSize));
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 70);
scrollbarPos = Math.floor((current/(contentSize - widgetSize)) * (widgetSize - scrollbarSize));
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 71);
if (scrollbarSize > widgetSize) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 72);
scrollbarSize = 1;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 75);
if (scrollbarPos > (widgetSize - scrollbarSize)) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 76);
scrollbarSize = scrollbarSize - (scrollbarPos - (widgetSize - scrollbarSize));
        } else {_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 77);
if (scrollbarPos < 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 78);
scrollbarSize = scrollbarPos + scrollbarSize;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 79);
scrollbarPos = 0;
        } else {_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 80);
if (isNaN(scrollbarPos)) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 81);
scrollbarPos = 0;
        }}}

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 84);
middleChildSize = (scrollbarSize - (firstChildSize + lastChildSize));

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 86);
if (middleChildSize < 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 87);
middleChildSize = 0;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 90);
if (middleChildSize === 0 && scrollbarPos !== 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 91);
scrollbarPos = widgetSize - (firstChildSize + lastChildSize) - 1;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 94);
if (duration !== 0) {
            // Position Scrollbar
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 96);
transition = {
                duration : duration
            };

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 100);
if (NATIVE_TRANSITIONS) {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 101);
transition.transform = translate + scrollbarPos + PX_CLOSE;
            } else {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 103);
transition[dimOffset] = scrollbarPos + PX;
            }

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 106);
scrollbar.transition(transition);

        } else {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 109);
if (NATIVE_TRANSITIONS) {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 110);
scrollbar.setStyle(TRANSFORM, translate + scrollbarPos + PX_CLOSE);
            } else {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 112);
scrollbar.setStyle(dimOffset, scrollbarPos + PX);
            }
        }

        // Resize Scrollbar Middle Child
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 117);
if (this[dimCache] !== middleChildSize) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 118);
this[dimCache] = middleChildSize;

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 120);
if (middleChildSize > 0) {

                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 122);
if (duration !== 0) {
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 123);
transition = {
                        duration : duration
                    };

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 127);
if(NATIVE_TRANSITIONS) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 128);
transition.transform = scale + middleChildSize + CLOSE;
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 130);
transition[dim] = middleChildSize + PX;
                    }

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 133);
middleChild.transition(transition);
                } else {
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 135);
if (NATIVE_TRANSITIONS) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 136);
middleChild.setStyle(TRANSFORM, scale + middleChildSize + CLOSE);
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 138);
middleChild.setStyle(dim, middleChildSize + PX);
                    }
                }
    
                // Position Last Child
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 143);
if (!horiz || !basic) {

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 145);
lastChildPosition = scrollbarSize - lastChildSize;
    
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 147);
if(duration !== 0) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 148);
transition = {
                            duration : duration
                        };
                
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 152);
if (NATIVE_TRANSITIONS) {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 153);
transition.transform = translate + lastChildPosition + PX_CLOSE;
                        } else {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 155);
transition[dimOffset] = lastChildPosition;
                        }

                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 158);
lastChild.transition(transition);
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 160);
if (NATIVE_TRANSITIONS) {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 161);
lastChild.setStyle(TRANSFORM, translate + lastChildPosition + PX_CLOSE);
                        } else {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 163);
lastChild.setStyle(dimOffset, lastChildPosition + PX);
                        }
                    }
                }
            }
        }
    };


}, '@VERSION@', {"requires": ["scrollview"]});
