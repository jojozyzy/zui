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
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].code=["YUI.add('gallery-patch-373-scrollbar-ie7', function (Y, NAME) {","","    Y.Plugin.ScrollViewScrollbars.prototype._updateBar = function(scrollbar, current, duration, horiz) {","","        var host = this._host,","            basic = this._basic,","","            scrollbarSize = 0,","            scrollbarPos = 1,","","            childCache = scrollbar.getData(CHILD_CACHE),","            lastChild = childCache.lc,","            middleChild = childCache.mc,","            firstChildSize = childCache.fcSize,","            lastChildSize = childCache.lcSize,","            middleChildSize,","            lastChildPosition,","","            transition,","            translate,","            scale,","","            dim,","            dimOffset,","            dimCache,","            widgetSize,","            contentSize;","","        if (horiz) {","            dim = WIDTH;","            dimOffset = LEFT;","            dimCache = HORIZ_CACHE;","            widgetSize = this._dims.offsetWidth;","            contentSize = this._dims.scrollWidth;","            translate = TRANSLATE_X;","            scale = SCALE_X;","            current = (current !== undefined) ? current : host.get(SCROLL_X);","        } else {","            dim = HEIGHT;","            dimOffset = TOP;","            dimCache = VERT_CACHE;","            widgetSize = this._dims.offsetHeight;","            contentSize = this._dims.scrollHeight;","            translate = TRANSLATE_Y;","            scale = SCALE_Y;","            current = (current !== undefined) ? current : host.get(SCROLL_Y);","        }","","        scrollbarSize = Math.floor(widgetSize * (widgetSize/contentSize));","        scrollbarPos = Math.floor((current/(contentSize - widgetSize)) * (widgetSize - scrollbarSize));","        if (scrollbarSize > widgetSize) {","            scrollbarSize = 1;","        }","","        if (scrollbarPos > (widgetSize - scrollbarSize)) {","            scrollbarSize = scrollbarSize - (scrollbarPos - (widgetSize - scrollbarSize));","        } else if (scrollbarPos < 0) {","            scrollbarSize = scrollbarPos + scrollbarSize;","            scrollbarPos = 0;","        } else if (isNaN(scrollbarPos)) {","            scrollbarPos = 0;","        }","","        middleChildSize = (scrollbarSize - (firstChildSize + lastChildSize));","","        if (middleChildSize < 0) {","            middleChildSize = 0;","        }","","        if (middleChildSize === 0 && scrollbarPos !== 0) {","            scrollbarPos = widgetSize - (firstChildSize + lastChildSize) - 1;","        }","","        if (duration !== 0) {","            // Position Scrollbar","            transition = {","                duration : duration","            };","","            if (NATIVE_TRANSITIONS) {","                transition.transform = translate + scrollbarPos + PX_CLOSE;","            } else {","                transition[dimOffset] = scrollbarPos + PX;","            }","","            scrollbar.transition(transition);","","        } else {","            if (NATIVE_TRANSITIONS) {","                scrollbar.setStyle(TRANSFORM, translate + scrollbarPos + PX_CLOSE);","            } else {","                scrollbar.setStyle(dimOffset, scrollbarPos + PX);","            }","        }","","        // Resize Scrollbar Middle Child","        if (this[dimCache] !== middleChildSize) {","            this[dimCache] = middleChildSize;","","            if (middleChildSize > 0) {","","                if (duration !== 0) {","                    transition = {","                        duration : duration","                    };","","                    if(NATIVE_TRANSITIONS) {","                        transition.transform = scale + middleChildSize + CLOSE;","                    } else {","                        transition[dim] = middleChildSize + PX;","                    }","","                    middleChild.transition(transition);","                } else {","                    if (NATIVE_TRANSITIONS) {","                        middleChild.setStyle(TRANSFORM, scale + middleChildSize + CLOSE);","                    } else {","                        middleChild.setStyle(dim, middleChildSize + PX);","                    }","                }","    ","                // Position Last Child","                if (!horiz || !basic) {","","                    lastChildPosition = scrollbarSize - lastChildSize;","    ","                    if(duration !== 0) {","                        transition = {","                            duration : duration","                        };","                ","                        if (NATIVE_TRANSITIONS) {","                            transition.transform = translate + lastChildPosition + PX_CLOSE;","                        } else {","                            transition[dimOffset] = lastChildPosition;","                        }","","                        lastChild.transition(transition);","                    } else {","                        if (NATIVE_TRANSITIONS) {","                            lastChild.setStyle(TRANSFORM, translate + lastChildPosition + PX_CLOSE);","                        } else {","                            lastChild.setStyle(dimOffset, lastChildPosition + PX);","                        }","                    }","                }","            }","        }","    };","","","}, '@VERSION@', {\"requires\": [\"scrollview\"]});"];
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].lines = {"1":0,"3":0,"5":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"49":0,"50":0,"51":0,"52":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"64":0,"66":0,"67":0,"70":0,"71":0,"74":0,"76":0,"80":0,"81":0,"83":0,"86":0,"89":0,"90":0,"92":0,"97":0,"98":0,"100":0,"102":0,"103":0,"107":0,"108":0,"110":0,"113":0,"115":0,"116":0,"118":0,"123":0,"125":0,"127":0,"128":0,"132":0,"133":0,"135":0,"138":0,"140":0,"141":0,"143":0};
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].functions = {"_updateBar:3":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].coveredLines = 68;
_yuitest_coverage["build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js"].coveredFunctions = 2;
_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 1);
YUI.add('gallery-patch-373-scrollbar-ie7', function (Y, NAME) {

    _yuitest_coverfunc("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 3);
Y.Plugin.ScrollViewScrollbars.prototype._updateBar = function(scrollbar, current, duration, horiz) {

        _yuitest_coverfunc("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", "_updateBar", 3);
_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 5);
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

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 29);
if (horiz) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 30);
dim = WIDTH;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 31);
dimOffset = LEFT;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 32);
dimCache = HORIZ_CACHE;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 33);
widgetSize = this._dims.offsetWidth;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 34);
contentSize = this._dims.scrollWidth;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 35);
translate = TRANSLATE_X;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 36);
scale = SCALE_X;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 37);
current = (current !== undefined) ? current : host.get(SCROLL_X);
        } else {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 39);
dim = HEIGHT;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 40);
dimOffset = TOP;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 41);
dimCache = VERT_CACHE;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 42);
widgetSize = this._dims.offsetHeight;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 43);
contentSize = this._dims.scrollHeight;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 44);
translate = TRANSLATE_Y;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 45);
scale = SCALE_Y;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 46);
current = (current !== undefined) ? current : host.get(SCROLL_Y);
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 49);
scrollbarSize = Math.floor(widgetSize * (widgetSize/contentSize));
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 50);
scrollbarPos = Math.floor((current/(contentSize - widgetSize)) * (widgetSize - scrollbarSize));
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 51);
if (scrollbarSize > widgetSize) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 52);
scrollbarSize = 1;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 55);
if (scrollbarPos > (widgetSize - scrollbarSize)) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 56);
scrollbarSize = scrollbarSize - (scrollbarPos - (widgetSize - scrollbarSize));
        } else {_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 57);
if (scrollbarPos < 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 58);
scrollbarSize = scrollbarPos + scrollbarSize;
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 59);
scrollbarPos = 0;
        } else {_yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 60);
if (isNaN(scrollbarPos)) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 61);
scrollbarPos = 0;
        }}}

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 64);
middleChildSize = (scrollbarSize - (firstChildSize + lastChildSize));

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 66);
if (middleChildSize < 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 67);
middleChildSize = 0;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 70);
if (middleChildSize === 0 && scrollbarPos !== 0) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 71);
scrollbarPos = widgetSize - (firstChildSize + lastChildSize) - 1;
        }

        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 74);
if (duration !== 0) {
            // Position Scrollbar
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 76);
transition = {
                duration : duration
            };

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 80);
if (NATIVE_TRANSITIONS) {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 81);
transition.transform = translate + scrollbarPos + PX_CLOSE;
            } else {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 83);
transition[dimOffset] = scrollbarPos + PX;
            }

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 86);
scrollbar.transition(transition);

        } else {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 89);
if (NATIVE_TRANSITIONS) {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 90);
scrollbar.setStyle(TRANSFORM, translate + scrollbarPos + PX_CLOSE);
            } else {
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 92);
scrollbar.setStyle(dimOffset, scrollbarPos + PX);
            }
        }

        // Resize Scrollbar Middle Child
        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 97);
if (this[dimCache] !== middleChildSize) {
            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 98);
this[dimCache] = middleChildSize;

            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 100);
if (middleChildSize > 0) {

                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 102);
if (duration !== 0) {
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 103);
transition = {
                        duration : duration
                    };

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 107);
if(NATIVE_TRANSITIONS) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 108);
transition.transform = scale + middleChildSize + CLOSE;
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 110);
transition[dim] = middleChildSize + PX;
                    }

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 113);
middleChild.transition(transition);
                } else {
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 115);
if (NATIVE_TRANSITIONS) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 116);
middleChild.setStyle(TRANSFORM, scale + middleChildSize + CLOSE);
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 118);
middleChild.setStyle(dim, middleChildSize + PX);
                    }
                }
    
                // Position Last Child
                _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 123);
if (!horiz || !basic) {

                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 125);
lastChildPosition = scrollbarSize - lastChildSize;
    
                    _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 127);
if(duration !== 0) {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 128);
transition = {
                            duration : duration
                        };
                
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 132);
if (NATIVE_TRANSITIONS) {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 133);
transition.transform = translate + lastChildPosition + PX_CLOSE;
                        } else {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 135);
transition[dimOffset] = lastChildPosition;
                        }

                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 138);
lastChild.transition(transition);
                    } else {
                        _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 140);
if (NATIVE_TRANSITIONS) {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 141);
lastChild.setStyle(TRANSFORM, translate + lastChildPosition + PX_CLOSE);
                        } else {
                            _yuitest_coverline("build/gallery-patch-373-scrollbar-ie7/gallery-patch-373-scrollbar-ie7.js", 143);
lastChild.setStyle(dimOffset, lastChildPosition + PX);
                        }
                    }
                }
            }
        }
    };


}, '@VERSION@', {"requires": ["scrollview"]});
