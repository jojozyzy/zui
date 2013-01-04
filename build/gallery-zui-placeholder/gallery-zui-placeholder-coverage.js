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
_yuitest_coverage["build/gallery-zui-placeholder/gallery-zui-placeholder.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-zui-placeholder/gallery-zui-placeholder.js",
    code: []
};
_yuitest_coverage["build/gallery-zui-placeholder/gallery-zui-placeholder.js"].code=["YUI.add('gallery-zui-placeholder', function (Y, NAME) {","","/**"," * The Placeholder module provides utilities to enable placeholder"," * support for older browsers"," *"," * @module gallery-zui-placeholder"," */","var isNativeSupport = ('placeholder' in document.createElement('input')),","    txtPlaceHolderInstalled = 'data-phok',","    clsPlaceHolderBlur = 'zui-phblur',","    cntInstall,","    fNull = function () {},","    detachMap = {},","","    handleFocus = function (E) {","        E.currentTarget.removeClass(clsPlaceHolderBlur);","","        if (E.currentTarget.get('value') === E.currentTarget.getAttribute('placeholder')) {","            E.currentTarget.set('value', '');","        }","    },","","    handleBlur = function (E) {","        var v = E.currentTarget.get('value'),","            p = E.currentTarget.getAttribute('placeholder');","","        if (p === '') {","            return;","        }","","        if (v === '') {","            E.currentTarget.set('value', p);","        }","","        if (v === p || v === '') {","            E.currentTarget.addClass(clsPlaceHolderBlur);","        }","    },","","    isInstalled = function (O, R) {","        if (O.getAttribute(txtPlaceHolderInstalled) === '1') {","            if (R) {","                O.setAttribute(txtPlaceHolderInstalled, '');","            }","            return true;","        }","        O.setAttribute(txtPlaceHolderInstalled, '1');","    },","","    initPH = function (O) {","        // if is already focused, run handleFocus 1 time","        if (O.compareTo(document.activeElement)) {","            handleFocus({currentTarget: O});","        } else {","            handleBlur({currentTarget: O});","        }","","        cntInstall += 1;","    },","","    installPH = function (O) {","        // only install once","        if (isInstalled(O)) {","            return;","        }","","        // if no placeholder, stop","        if (!O.getAttribute('placeholder')) {","            return;","        }","","        // handle focus, blur","        O.on('focus', handleFocus);","        O.on('blur', handleBlur);","","        initPH(O);","    },","","    uninstallPH = function (O) {","        if (!isInstalled(O, 1)) {","            return;","        }","","        // if no placeholder, stop","        if (!O.getAttribute('placeholder')) {","            return;","        }","","        // remove focus, blur handler","        O.detach('focus', handleFocus);","        O.detach('blur', handleBlur);","","        handleFocus({currentTarget: O});","        cntInstall += 1;","    };","/**"," * A static object to access zui placeholder properties and methods"," * @namespace zui"," * @class placeholder"," */","Y.namespace('zui').placeholder = {","    /**","     * whether this browser supports placeholder natively","     * @property isNative","     * @static","     * @type bool","     */","    isNative: isNativeSupport,","","    /**","     * A string used to set attribute to indicate this node installed placeholder or not","     * @property txtInstalled","     * @static","     * @final","     * @type string","     */","    txtInstalled: txtPlaceHolderInstalled,","","","    /**","     * A string used to set classname when this input should show placeholder","     * @property clsBlur","     * @static","     * @final","     * @type string","     */","    clsBlur: clsPlaceHolderBlur,","","    /**","     * use this method to install placeholder on nodes","     * @method install","     * @param elements {NodeList || Node || HTMLElement || cssString} Optional. The elements to install placeholder support","     * @return {Array} An array contains [TotalElements, InstalledElements] when no native placeholder support. Return undefined when the browser suppports placeholder natively. Return [0, 0] when can not find nodes","     * @static","     */","    install: isNativeSupport ? fNull : function (R) {","        var nodes = (R && R.each) ? R : Y.all(R || 'input, textarea');","","        cntInstall = 0;","","        if (!nodes) {","            return [0, 0];","        }","        nodes.each(installPH);","","        return [nodes.size(), cntInstall];","    },","","    /**","     * use this method to uninstall placeholder on nodes","     * @method uninstall","     * @param elements {NodeList || Node || HTMLElement || cssString} Optional. The elements to remove placeholder support","     * @return {Array} An array contains [TotalElements, UninstalledElements] when no native placeholder support. Return undefined when the browser suppports placeholder natively. Return [0, 0] when can not find nodes","     * @static","     */","    uninstall: isNativeSupport ? fNull : function (R) {","        var nodes = (R && R.each) ? R : Y.all(R || 'input, textarea');","","        cntInstall = 0;","","        if (!nodes) {","            return [0, 0];","        }","        nodes.each(uninstallPH);","","        return [nodes.size(), cntInstall];","    },","","    /**","     * use this method to install placeholder on node with event delegate","     * @method installDelegate","     * @param element {Node || HTMLElement || cssString} Optional. The parent element to install placeholder support","     * @param elements {NodeList || Node || HTMLElement || cssString} Optional. The child elements to handle placeholder","     * @return {Array} An array contains [1, InstalledElements] when no native placeholder support. Return undefined when the browser suppports placeholder natively. Return [0, 0] when can not find parent node. Return [-1, -1] when 'node-event-delegate' not loaded.","     * @static","     */","    installDelegate: isNativeSupport ? fNull : function (P, R) {","        var parent = P ? Y.one(P) : Y.one('body'),","            children = R || 'input, textarea';","","        cntInstall = 0;","","        if (!parent) {","            return [0, 0];","        }","","        if (!parent.delegate) {","            return [-1, -1];","        }","","        if (isInstalled(parent)) {","            return [1, 0];","        }","","        detachMap[parent.get('id')] = [","            parent.delegate('focus', handleFocus, children),","            parent.delegate('blur', handleFocus, children)","        ];","","        parent.all(children).each(initPH);","","        return [1, cntInstall];","    },","","    /**","     * use this method to uninstall placeholder on node with event delegate","     * @method uninstallDelegate","     * @param element {Node || HTMLElement || cssString} Optional. The parent element to uninstall placeholder support","     * @param elements {NodeList || Node || HTMLElement || cssString} Optional. The child elements to unhandle placeholder","     * @return {Array} An array contains [1, UninstalledElements] when no native placeholder support. Return undefined when the browser suppports placeholder natively. Return [0, 0] when can not find parent node. Return [-1, -1] when 'node-event-delegate' not loaded.","     * @static","     */","    uninstallDelegate:  isNativeSupport ? fNull : function (P, R) {","        var parent = P ? Y.one(P) : Y.one('body'),","            id = parent ? parent.get('id') : 0,","            children = R || 'input, textarea',","            detach = 0;","","        if (!parent) {","            return [0, 0];","        }","","        if (!parent.delegate) {","            return [-1, -1];","        }","","        if (!isInstalled(parent, 1)) {","            return [1, 0];","        }","","        if (detachMap[id]) {","            parent.detach(detachMap[id][0]);","            parent.detach(detachMap[id][1]);","            delete detachMap[id];","            parent.all(children).each(function (O) {","                detach += 1;","                handleFocus({currentTarget: O});","            });","            return [1, detach];","        }","","        return [1, -1];","    }","};","","","}, '@VERSION@', {\"requires\": [\"node-base\", \"event-focus\"], \"optional\": [\"node-event-delegate\"]});"];
_yuitest_coverage["build/gallery-zui-placeholder/gallery-zui-placeholder.js"].lines = {"1":0,"9":0,"17":0,"19":0,"20":0,"25":0,"28":0,"29":0,"32":0,"33":0,"36":0,"37":0,"42":0,"43":0,"44":0,"46":0,"48":0,"53":0,"54":0,"56":0,"59":0,"64":0,"65":0,"69":0,"70":0,"74":0,"75":0,"77":0,"81":0,"82":0,"86":0,"87":0,"91":0,"92":0,"94":0,"95":0,"102":0,"138":0,"140":0,"142":0,"143":0,"145":0,"147":0,"158":0,"160":0,"162":0,"163":0,"165":0,"167":0,"179":0,"182":0,"184":0,"185":0,"188":0,"189":0,"192":0,"193":0,"196":0,"201":0,"203":0,"215":0,"220":0,"221":0,"224":0,"225":0,"228":0,"229":0,"232":0,"233":0,"234":0,"235":0,"236":0,"237":0,"238":0,"240":0,"243":0};
_yuitest_coverage["build/gallery-zui-placeholder/gallery-zui-placeholder.js"].functions = {"handleFocus:16":0,"handleBlur:24":0,"isInstalled:41":0,"initPH:51":0,"installPH:62":0,"uninstallPH:80":0,"fNull:137":0,"fNull:157":0,"fNull:178":0,"(anonymous 2):236":0,"fNull:214":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-zui-placeholder/gallery-zui-placeholder.js"].coveredLines = 76;
_yuitest_coverage["build/gallery-zui-placeholder/gallery-zui-placeholder.js"].coveredFunctions = 12;
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 1);
YUI.add('gallery-zui-placeholder', function (Y, NAME) {

/**
 * The Placeholder module provides utilities to enable placeholder
 * support for older browsers
 *
 * @module gallery-zui-placeholder
 */
_yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 9);
var isNativeSupport = ('placeholder' in document.createElement('input')),
    txtPlaceHolderInstalled = 'data-phok',
    clsPlaceHolderBlur = 'zui-phblur',
    cntInstall,
    fNull = function () {},
    detachMap = {},

    handleFocus = function (E) {
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "handleFocus", 16);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 17);
E.currentTarget.removeClass(clsPlaceHolderBlur);

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 19);
if (E.currentTarget.get('value') === E.currentTarget.getAttribute('placeholder')) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 20);
E.currentTarget.set('value', '');
        }
    },

    handleBlur = function (E) {
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "handleBlur", 24);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 25);
var v = E.currentTarget.get('value'),
            p = E.currentTarget.getAttribute('placeholder');

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 28);
if (p === '') {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 29);
return;
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 32);
if (v === '') {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 33);
E.currentTarget.set('value', p);
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 36);
if (v === p || v === '') {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 37);
E.currentTarget.addClass(clsPlaceHolderBlur);
        }
    },

    isInstalled = function (O, R) {
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "isInstalled", 41);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 42);
if (O.getAttribute(txtPlaceHolderInstalled) === '1') {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 43);
if (R) {
                _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 44);
O.setAttribute(txtPlaceHolderInstalled, '');
            }
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 46);
return true;
        }
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 48);
O.setAttribute(txtPlaceHolderInstalled, '1');
    },

    initPH = function (O) {
        // if is already focused, run handleFocus 1 time
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "initPH", 51);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 53);
if (O.compareTo(document.activeElement)) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 54);
handleFocus({currentTarget: O});
        } else {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 56);
handleBlur({currentTarget: O});
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 59);
cntInstall += 1;
    },

    installPH = function (O) {
        // only install once
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "installPH", 62);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 64);
if (isInstalled(O)) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 65);
return;
        }

        // if no placeholder, stop
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 69);
if (!O.getAttribute('placeholder')) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 70);
return;
        }

        // handle focus, blur
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 74);
O.on('focus', handleFocus);
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 75);
O.on('blur', handleBlur);

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 77);
initPH(O);
    },

    uninstallPH = function (O) {
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "uninstallPH", 80);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 81);
if (!isInstalled(O, 1)) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 82);
return;
        }

        // if no placeholder, stop
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 86);
if (!O.getAttribute('placeholder')) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 87);
return;
        }

        // remove focus, blur handler
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 91);
O.detach('focus', handleFocus);
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 92);
O.detach('blur', handleBlur);

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 94);
handleFocus({currentTarget: O});
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 95);
cntInstall += 1;
    };
/**
 * A static object to access zui placeholder properties and methods
 * @namespace zui
 * @class placeholder
 */
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 102);
Y.namespace('zui').placeholder = {
    /**
     * whether this browser supports placeholder natively
     * @property isNative
     * @static
     * @type bool
     */
    isNative: isNativeSupport,

    /**
     * A string used to set attribute to indicate this node installed placeholder or not
     * @property txtInstalled
     * @static
     * @final
     * @type string
     */
    txtInstalled: txtPlaceHolderInstalled,


    /**
     * A string used to set classname when this input should show placeholder
     * @property clsBlur
     * @static
     * @final
     * @type string
     */
    clsBlur: clsPlaceHolderBlur,

    /**
     * use this method to install placeholder on nodes
     * @method install
     * @param elements {NodeList || Node || HTMLElement || cssString} Optional. The elements to install placeholder support
     * @return {Array} An array contains [TotalElements, InstalledElements] when no native placeholder support. Return undefined when the browser suppports placeholder natively. Return [0, 0] when can not find nodes
     * @static
     */
    install: isNativeSupport ? fNull : function (R) {
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "fNull", 137);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 138);
var nodes = (R && R.each) ? R : Y.all(R || 'input, textarea');

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 140);
cntInstall = 0;

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 142);
if (!nodes) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 143);
return [0, 0];
        }
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 145);
nodes.each(installPH);

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 147);
return [nodes.size(), cntInstall];
    },

    /**
     * use this method to uninstall placeholder on nodes
     * @method uninstall
     * @param elements {NodeList || Node || HTMLElement || cssString} Optional. The elements to remove placeholder support
     * @return {Array} An array contains [TotalElements, UninstalledElements] when no native placeholder support. Return undefined when the browser suppports placeholder natively. Return [0, 0] when can not find nodes
     * @static
     */
    uninstall: isNativeSupport ? fNull : function (R) {
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "fNull", 157);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 158);
var nodes = (R && R.each) ? R : Y.all(R || 'input, textarea');

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 160);
cntInstall = 0;

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 162);
if (!nodes) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 163);
return [0, 0];
        }
        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 165);
nodes.each(uninstallPH);

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 167);
return [nodes.size(), cntInstall];
    },

    /**
     * use this method to install placeholder on node with event delegate
     * @method installDelegate
     * @param element {Node || HTMLElement || cssString} Optional. The parent element to install placeholder support
     * @param elements {NodeList || Node || HTMLElement || cssString} Optional. The child elements to handle placeholder
     * @return {Array} An array contains [1, InstalledElements] when no native placeholder support. Return undefined when the browser suppports placeholder natively. Return [0, 0] when can not find parent node. Return [-1, -1] when 'node-event-delegate' not loaded.
     * @static
     */
    installDelegate: isNativeSupport ? fNull : function (P, R) {
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "fNull", 178);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 179);
var parent = P ? Y.one(P) : Y.one('body'),
            children = R || 'input, textarea';

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 182);
cntInstall = 0;

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 184);
if (!parent) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 185);
return [0, 0];
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 188);
if (!parent.delegate) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 189);
return [-1, -1];
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 192);
if (isInstalled(parent)) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 193);
return [1, 0];
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 196);
detachMap[parent.get('id')] = [
            parent.delegate('focus', handleFocus, children),
            parent.delegate('blur', handleFocus, children)
        ];

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 201);
parent.all(children).each(initPH);

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 203);
return [1, cntInstall];
    },

    /**
     * use this method to uninstall placeholder on node with event delegate
     * @method uninstallDelegate
     * @param element {Node || HTMLElement || cssString} Optional. The parent element to uninstall placeholder support
     * @param elements {NodeList || Node || HTMLElement || cssString} Optional. The child elements to unhandle placeholder
     * @return {Array} An array contains [1, UninstalledElements] when no native placeholder support. Return undefined when the browser suppports placeholder natively. Return [0, 0] when can not find parent node. Return [-1, -1] when 'node-event-delegate' not loaded.
     * @static
     */
    uninstallDelegate:  isNativeSupport ? fNull : function (P, R) {
        _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "fNull", 214);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 215);
var parent = P ? Y.one(P) : Y.one('body'),
            id = parent ? parent.get('id') : 0,
            children = R || 'input, textarea',
            detach = 0;

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 220);
if (!parent) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 221);
return [0, 0];
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 224);
if (!parent.delegate) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 225);
return [-1, -1];
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 228);
if (!isInstalled(parent, 1)) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 229);
return [1, 0];
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 232);
if (detachMap[id]) {
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 233);
parent.detach(detachMap[id][0]);
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 234);
parent.detach(detachMap[id][1]);
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 235);
delete detachMap[id];
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 236);
parent.all(children).each(function (O) {
                _yuitest_coverfunc("build/gallery-zui-placeholder/gallery-zui-placeholder.js", "(anonymous 2)", 236);
_yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 237);
detach += 1;
                _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 238);
handleFocus({currentTarget: O});
            });
            _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 240);
return [1, detach];
        }

        _yuitest_coverline("build/gallery-zui-placeholder/gallery-zui-placeholder.js", 243);
return [1, -1];
    }
};


}, '@VERSION@', {"requires": ["node-base", "event-focus"], "optional": ["node-event-delegate"]});
