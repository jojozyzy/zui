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
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].code=["YUI.add('gallery-patch-373-scrollbar-ie7', function (Y, NAME) {","","    var CHILD_CACHE = \"childCache\",","        HORIZ_CACHE = \"_sbh\",","        VERT_CACHE = \"_sbv\",","        TRANSLATE_X = \"translateX(\",","        TRANSLATE_Y = \"translateY(\",","        SCALE_X = \"scaleX(\",","        SCALE_Y = \"scaleY(\",","        WIDTH = \"width\",","        HEIGHT = \"height\",","        TOP = \"top\",","        LEFT = \"left\",","        Transition = Y.Transition,","        NATIVE_TRANSITIONS = Transition.useNative,","        TRANSFORM = \"transform\",","        PX = \"px\",","        CLOSE = \")\",","        PX_CLOSE = PX + CLOSE;","","    Y.Plugin.ScrollViewScrollbars.prototype._updateBar = function(scrollbar, current, duration, horiz) {","","        var host = this._host,","            basic = this._basic,","","            scrollbarSize = 0,","            scrollbarPos = 1,","","            childCache = scrollbar.getData(CHILD_CACHE),","            lastChild = childCache.lc,","            middleChild = childCache.mc,","            firstChildSize = childCache.fcSize,","            lastChildSize = childCache.lcSize,","            middleChildSize,","            lastChildPosition,","","            transition,","            translate,","            scale,","","            dim,","            dimOffset,","            dimCache,","            widgetSize,","            contentSize;","","        if (horiz) {","            dim = WIDTH;","            dimOffset = LEFT;","            dimCache = HORIZ_CACHE;","            widgetSize = this._dims.offsetWidth;","            contentSize = this._dims.scrollWidth;","            translate = TRANSLATE_X;","            scale = SCALE_X;","            current = (current !== undefined) ? current : host.get(SCROLL_X);","        } else {","            dim = HEIGHT;","            dimOffset = TOP;","            dimCache = VERT_CACHE;","            widgetSize = this._dims.offsetHeight;","            contentSize = this._dims.scrollHeight;","            translate = TRANSLATE_Y;","            scale = SCALE_Y;","            current = (current !== undefined) ? current : host.get(SCROLL_Y);","        }","","        scrollbarSize = Math.floor(widgetSize * (widgetSize/contentSize));","        scrollbarPos = Math.floor((current/(contentSize - widgetSize)) * (widgetSize - scrollbarSize));","        if (scrollbarSize > widgetSize) {","            scrollbarSize = 1;","        }","","        if (scrollbarPos > (widgetSize - scrollbarSize)) {","            scrollbarSize = scrollbarSize - (scrollbarPos - (widgetSize - scrollbarSize));","        } else if (scrollbarPos < 0) {","            scrollbarSize = scrollbarPos + scrollbarSize;","            scrollbarPos = 0;","        } else if (isNaN(scrollbarPos)) {","            scrollbarPos = 0;","        }","","        middleChildSize = (scrollbarSize - (firstChildSize + lastChildSize));","","        if (middleChildSize < 0) {","            middleChildSize = 0;","        }","","        if (middleChildSize === 0 && scrollbarPos !== 0) {","            scrollbarPos = widgetSize - (firstChildSize + lastChildSize) - 1;","        }","","        if (duration !== 0) {","            // Position Scrollbar","            transition = {","                duration : duration","            };","","            if (NATIVE_TRANSITIONS) {","                transition.transform = translate + scrollbarPos + PX_CLOSE;","            } else {","                transition[dimOffset] = scrollbarPos + PX;","            }","","            scrollbar.transition(transition);","","        } else {","            if (NATIVE_TRANSITIONS) {","                scrollbar.setStyle(TRANSFORM, translate + scrollbarPos + PX_CLOSE);","            } else {","                scrollbar.setStyle(dimOffset, scrollbarPos + PX);","            }","        }","","        // Resize Scrollbar Middle Child","        if (this[dimCache] !== middleChildSize) {","            this[dimCache] = middleChildSize;","","            if (middleChildSize > 0) {","","                if (duration !== 0) {","                    transition = {","                        duration : duration","                    };","","                    if(NATIVE_TRANSITIONS) {","                        transition.transform = scale + middleChildSize + CLOSE;","                    } else {","                        transition[dim] = middleChildSize + PX;","                    }","","                    middleChild.transition(transition);","                } else {","                    if (NATIVE_TRANSITIONS) {","                        middleChild.setStyle(TRANSFORM, scale + middleChildSize + CLOSE);","                    } else {","                        middleChild.setStyle(dim, middleChildSize + PX);","                    }","                }","    ","                // Position Last Child","                if (!horiz || !basic) {","","                    lastChildPosition = scrollbarSize - lastChildSize;","    ","                    if(duration !== 0) {","                        transition = {","                            duration : duration","                        };","                ","                        if (NATIVE_TRANSITIONS) {","                            transition.transform = translate + lastChildPosition + PX_CLOSE;","                        } else {","                            transition[dimOffset] = lastChildPosition;","                        }","","                        lastChild.transition(transition);","                    } else {","                        if (NATIVE_TRANSITIONS) {","                            lastChild.setStyle(TRANSFORM, translate + lastChildPosition + PX_CLOSE);","                        } else {","                            lastChild.setStyle(dimOffset, lastChildPosition + PX);","                        }","                    }","                }","            }","        }","    };","","","}, '@VERSION@', {\"requires\": [\"scrollview\"]});"];
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].lines = {"1":0,"3":0,"21":0,"23":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"67":0,"68":0,"69":0,"70":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"82":0,"84":0,"85":0,"88":0,"89":0,"92":0,"94":0,"98":0,"99":0,"101":0,"104":0,"107":0,"108":0,"110":0,"115":0,"116":0,"118":0,"120":0,"121":0,"125":0,"126":0,"128":0,"131":0,"133":0,"134":0,"136":0,"141":0,"143":0,"145":0,"146":0,"150":0,"151":0,"153":0,"156":0,"158":0,"159":0,"161":0};
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].functions = {"_updateBar:21":0,"(anonymous 1):1":0};
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
        PX = "px",
        CLOSE = ")",
        PX_CLOSE = PX + CLOSE;

    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 21);
Y.Plugin.ScrollViewScrollbars.prototype._updateBar = function(scrollbar, current, duration, horiz) {

        _yuitest_coverfunc("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", "_updateBar", 21);
_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 23);
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

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 47);
if (horiz) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 48);
dim = WIDTH;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 49);
dimOffset = LEFT;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 50);
dimCache = HORIZ_CACHE;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 51);
widgetSize = this._dims.offsetWidth;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 52);
contentSize = this._dims.scrollWidth;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 53);
translate = TRANSLATE_X;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 54);
scale = SCALE_X;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 55);
current = (current !== undefined) ? current : host.get(SCROLL_X);
        } else {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 57);
dim = HEIGHT;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 58);
dimOffset = TOP;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 59);
dimCache = VERT_CACHE;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 60);
widgetSize = this._dims.offsetHeight;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 61);
contentSize = this._dims.scrollHeight;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 62);
translate = TRANSLATE_Y;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 63);
scale = SCALE_Y;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 64);
current = (current !== undefined) ? current : host.get(SCROLL_Y);
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 67);
scrollbarSize = Math.floor(widgetSize * (widgetSize/contentSize));
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 68);
scrollbarPos = Math.floor((current/(contentSize - widgetSize)) * (widgetSize - scrollbarSize));
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 69);
if (scrollbarSize > widgetSize) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 70);
scrollbarSize = 1;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 73);
if (scrollbarPos > (widgetSize - scrollbarSize)) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 74);
scrollbarSize = scrollbarSize - (scrollbarPos - (widgetSize - scrollbarSize));
        } else {_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 75);
if (scrollbarPos < 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 76);
scrollbarSize = scrollbarPos + scrollbarSize;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 77);
scrollbarPos = 0;
        } else {_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 78);
if (isNaN(scrollbarPos)) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 79);
scrollbarPos = 0;
        }}}

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 82);
middleChildSize = (scrollbarSize - (firstChildSize + lastChildSize));

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 84);
if (middleChildSize < 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 85);
middleChildSize = 0;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 88);
if (middleChildSize === 0 && scrollbarPos !== 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 89);
scrollbarPos = widgetSize - (firstChildSize + lastChildSize) - 1;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 92);
if (duration !== 0) {
            // Position Scrollbar
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 94);
transition = {
                duration : duration
            };

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 98);
if (NATIVE_TRANSITIONS) {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 99);
transition.transform = translate + scrollbarPos + PX_CLOSE;
            } else {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 101);
transition[dimOffset] = scrollbarPos + PX;
            }

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 104);
scrollbar.transition(transition);

        } else {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 107);
if (NATIVE_TRANSITIONS) {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 108);
scrollbar.setStyle(TRANSFORM, translate + scrollbarPos + PX_CLOSE);
            } else {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 110);
scrollbar.setStyle(dimOffset, scrollbarPos + PX);
            }
        }

        // Resize Scrollbar Middle Child
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 115);
if (this[dimCache] !== middleChildSize) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 116);
this[dimCache] = middleChildSize;

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 118);
if (middleChildSize > 0) {

                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 120);
if (duration !== 0) {
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 121);
transition = {
                        duration : duration
                    };

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 125);
if(NATIVE_TRANSITIONS) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 126);
transition.transform = scale + middleChildSize + CLOSE;
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 128);
transition[dim] = middleChildSize + PX;
                    }

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 131);
middleChild.transition(transition);
                } else {
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 133);
if (NATIVE_TRANSITIONS) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 134);
middleChild.setStyle(TRANSFORM, scale + middleChildSize + CLOSE);
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 136);
middleChild.setStyle(dim, middleChildSize + PX);
                    }
                }
    
                // Position Last Child
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 141);
if (!horiz || !basic) {

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 143);
lastChildPosition = scrollbarSize - lastChildSize;
    
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 145);
if(duration !== 0) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 146);
transition = {
                            duration : duration
                        };
                
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 150);
if (NATIVE_TRANSITIONS) {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 151);
transition.transform = translate + lastChildPosition + PX_CLOSE;
                        } else {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 153);
transition[dimOffset] = lastChildPosition;
                        }

                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 156);
lastChild.transition(transition);
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 158);
if (NATIVE_TRANSITIONS) {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 159);
lastChild.setStyle(TRANSFORM, translate + lastChildPosition + PX_CLOSE);
                        } else {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 161);
lastChild.setStyle(dimOffset, lastChildPosition + PX);
                        }
                    }
                }
            }
        }
    };


}, '@VERSION@', {"requires": ["scrollview"]});
