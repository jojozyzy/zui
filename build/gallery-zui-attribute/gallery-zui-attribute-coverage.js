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
_yuitest_coverage["build/gallery-zui-attribute/gallery-zui-attribute.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-zui-attribute/gallery-zui-attribute.js",
    code: []
};
_yuitest_coverage["build/gallery-zui-attribute/gallery-zui-attribute.js"].code=["YUI.add('gallery-zui-attribute', function (Y, NAME) {","","/**"," * The Attribute module provides more methods for Attribute object"," * support for older browsers"," *"," * @module gallery-zui-attribute"," */","","/**"," * A augmentable implementation for Attribute, providing extended"," * methods for Attribute management such as toggle() and set_again()"," *"," * @namespace zui"," * @class Attribute","*/","function ZAttribute() {}","","ZAttribute.prototype = {","    /**","     * toggle the value of an attribute.","     *","     * @method toggle","     * @param name {String} The name of the attribute.","     * @chainable","     */","    toggle: function (name) {","        if (this.set && this.get) {","            this.set(name, this.get(name) ? false : true);","        }","","        return this;","    },","","    /**","     * set the value of an attribute to current value, to trigger setter function or valueChange event.","     *","     * @method set_again","     * @param name {String} The name of the attribute.","     * @chainable","     */","    set_again: function (name) {","        if (this.set && this.get) {","            this.set(name, this.get(name));","        }","        return this;","    },","","    /**","     * set the value of an attribute, this wrapped function help to maintain a value change stack for revert().","     *","     * @method set","     * @param name {String} The name of the attribute.","     * @param value {String} The value of the attribute.","     * @param cfg {Object} Optional event data to be mixed into the event facade passed to subscribers of the attribute's change event.","     * @chainable","     */","    set: function (name, value, cfg) {","       /**","         * When the obejct have _doRevert property , enable the revert() behavior on all properties","         *","         * @property _doRevert","         * @type Boolean","         * @protected","         */","        var doRevert = this._doRevert;","","       /**","         * When the obejct have _revertList property , enable the revert() behavior on listed properties","         *","         * @property _revertList","         * @type Object","         * @protected","         */","        if (!doRevert && this._revertList) {","            doRevert = this._revertList[name];","        }","","        if (doRevert) {","           /**","             * Used to keep data stack for revert()","             *","             * @property _revertStack","             * @type Object","             * @protected","             */","            if (!this._revertStack) {","                this._revertStack = {};","            }","            if (!this._revertStack[name]) {","                this._revertStack[name] = [];","            }","            this._revertStack[name].push(value);","        }","","        return this._setAttr(name, value, cfg);","    },","","    /**","     * revert the value of an attribute. If no older value, do nothing.","     *","     * @method revert","     * @param name {String} The name of the attribute.","     * @chainable","     */","    revert: function (name) {","        if (!this._revertStack || !this._revertStack[name] || (this._revertStack[name].length < 2)) {","            return this;","        }","","        this._revertStack[name].pop();","","        return this._setAttr(name, this._revertStack[name][this._revertStack[name].length - 1]);","    },","","    /**","     * sync an attribute from other Object when the attribute value of other object changed, everytime.","     *","     * @method sync","     * @param name {String} The name of the attribute.","     * @param source {Attribute} The source Attribute owner Object you want to sync.","     * @param sourceName {String} The source Attribute name. If the source attribute name is same with target, you can omit this parameter.","     * @chainable","     */","    sync: function (name, source, fname) {","        var id = Y.stamp(this),","            sid = Y.stamp(source),","            from = fname || name;","","        if (!this.syncHandlers) {","            this.syncHandlers = {};","        }","","        this.syncHandlers[[name, id, sid, from].join('_')] = source.after(from + 'Change', function (E) {","            this.set(name, E.newVal);","        }, this);","","        this.set(name, source.get(from));","","        return this;","    },","","    /**","     * Stop attribute syncing","     *","     * @method unsync","     * @param name {String} The name of the attribute.","     * @param source {Attribute} The source Attribute owner Object you want to sync.","     * @param sourceName {String} The source Attribute name. If the source attribute name is same with target, you can o","mit this parameter.","     * @chainable","     */","    unsync: function (name, source, fname) {","        var id = Y.stamp(this),","            sid = Y.stamp(source),","            from = fname || name,","            hid = [name, id, sid, from].join('_');","","        if (!this.syncHandlers) {","            this.syncHandlers = {};","        }","","        if (this.syncHandlers[hid]) {","            this.syncHandlers[hid].detach();","            delete this.syncHandlers[hid];","        }","","        return this;","    }","};","","Y.namespace('zui').Attribute = ZAttribute;","","","}, '@VERSION@', {\"requires\": [\"attribute-base\"]});"];
_yuitest_coverage["build/gallery-zui-attribute/gallery-zui-attribute.js"].lines = {"1":0,"17":0,"19":0,"28":0,"29":0,"32":0,"43":0,"44":0,"46":0,"66":0,"75":0,"76":0,"79":0,"87":0,"88":0,"90":0,"91":0,"93":0,"96":0,"107":0,"108":0,"111":0,"113":0,"126":0,"130":0,"131":0,"134":0,"135":0,"138":0,"140":0,"154":0,"159":0,"160":0,"163":0,"164":0,"165":0,"168":0,"172":0};
_yuitest_coverage["build/gallery-zui-attribute/gallery-zui-attribute.js"].functions = {"ZAttribute:17":0,"toggle:27":0,"set_again:42":0,"set:58":0,"revert:106":0,"(anonymous 2):134":0,"sync:125":0,"unsync:153":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-zui-attribute/gallery-zui-attribute.js"].coveredLines = 38;
_yuitest_coverage["build/gallery-zui-attribute/gallery-zui-attribute.js"].coveredFunctions = 9;
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 1);
YUI.add('gallery-zui-attribute', function (Y, NAME) {

/**
 * The Attribute module provides more methods for Attribute object
 * support for older browsers
 *
 * @module gallery-zui-attribute
 */

/**
 * A augmentable implementation for Attribute, providing extended
 * methods for Attribute management such as toggle() and set_again()
 *
 * @namespace zui
 * @class Attribute
*/
_yuitest_coverfunc("build/gallery-zui-attribute/gallery-zui-attribute.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 17);
function ZAttribute() {}

_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 19);
ZAttribute.prototype = {
    /**
     * toggle the value of an attribute.
     *
     * @method toggle
     * @param name {String} The name of the attribute.
     * @chainable
     */
    toggle: function (name) {
        _yuitest_coverfunc("build/gallery-zui-attribute/gallery-zui-attribute.js", "toggle", 27);
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 28);
if (this.set && this.get) {
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 29);
this.set(name, this.get(name) ? false : true);
        }

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 32);
return this;
    },

    /**
     * set the value of an attribute to current value, to trigger setter function or valueChange event.
     *
     * @method set_again
     * @param name {String} The name of the attribute.
     * @chainable
     */
    set_again: function (name) {
        _yuitest_coverfunc("build/gallery-zui-attribute/gallery-zui-attribute.js", "set_again", 42);
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 43);
if (this.set && this.get) {
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 44);
this.set(name, this.get(name));
        }
        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 46);
return this;
    },

    /**
     * set the value of an attribute, this wrapped function help to maintain a value change stack for revert().
     *
     * @method set
     * @param name {String} The name of the attribute.
     * @param value {String} The value of the attribute.
     * @param cfg {Object} Optional event data to be mixed into the event facade passed to subscribers of the attribute's change event.
     * @chainable
     */
    set: function (name, value, cfg) {
       /**
         * When the obejct have _doRevert property , enable the revert() behavior on all properties
         *
         * @property _doRevert
         * @type Boolean
         * @protected
         */
        _yuitest_coverfunc("build/gallery-zui-attribute/gallery-zui-attribute.js", "set", 58);
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 66);
var doRevert = this._doRevert;

       /**
         * When the obejct have _revertList property , enable the revert() behavior on listed properties
         *
         * @property _revertList
         * @type Object
         * @protected
         */
        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 75);
if (!doRevert && this._revertList) {
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 76);
doRevert = this._revertList[name];
        }

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 79);
if (doRevert) {
           /**
             * Used to keep data stack for revert()
             *
             * @property _revertStack
             * @type Object
             * @protected
             */
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 87);
if (!this._revertStack) {
                _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 88);
this._revertStack = {};
            }
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 90);
if (!this._revertStack[name]) {
                _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 91);
this._revertStack[name] = [];
            }
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 93);
this._revertStack[name].push(value);
        }

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 96);
return this._setAttr(name, value, cfg);
    },

    /**
     * revert the value of an attribute. If no older value, do nothing.
     *
     * @method revert
     * @param name {String} The name of the attribute.
     * @chainable
     */
    revert: function (name) {
        _yuitest_coverfunc("build/gallery-zui-attribute/gallery-zui-attribute.js", "revert", 106);
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 107);
if (!this._revertStack || !this._revertStack[name] || (this._revertStack[name].length < 2)) {
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 108);
return this;
        }

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 111);
this._revertStack[name].pop();

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 113);
return this._setAttr(name, this._revertStack[name][this._revertStack[name].length - 1]);
    },

    /**
     * sync an attribute from other Object when the attribute value of other object changed, everytime.
     *
     * @method sync
     * @param name {String} The name of the attribute.
     * @param source {Attribute} The source Attribute owner Object you want to sync.
     * @param sourceName {String} The source Attribute name. If the source attribute name is same with target, you can omit this parameter.
     * @chainable
     */
    sync: function (name, source, fname) {
        _yuitest_coverfunc("build/gallery-zui-attribute/gallery-zui-attribute.js", "sync", 125);
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 126);
var id = Y.stamp(this),
            sid = Y.stamp(source),
            from = fname || name;

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 130);
if (!this.syncHandlers) {
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 131);
this.syncHandlers = {};
        }

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 134);
this.syncHandlers[[name, id, sid, from].join('_')] = source.after(from + 'Change', function (E) {
            _yuitest_coverfunc("build/gallery-zui-attribute/gallery-zui-attribute.js", "(anonymous 2)", 134);
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 135);
this.set(name, E.newVal);
        }, this);

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 138);
this.set(name, source.get(from));

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 140);
return this;
    },

    /**
     * Stop attribute syncing
     *
     * @method unsync
     * @param name {String} The name of the attribute.
     * @param source {Attribute} The source Attribute owner Object you want to sync.
     * @param sourceName {String} The source Attribute name. If the source attribute name is same with target, you can o
mit this parameter.
     * @chainable
     */
    unsync: function (name, source, fname) {
        _yuitest_coverfunc("build/gallery-zui-attribute/gallery-zui-attribute.js", "unsync", 153);
_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 154);
var id = Y.stamp(this),
            sid = Y.stamp(source),
            from = fname || name,
            hid = [name, id, sid, from].join('_');

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 159);
if (!this.syncHandlers) {
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 160);
this.syncHandlers = {};
        }

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 163);
if (this.syncHandlers[hid]) {
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 164);
this.syncHandlers[hid].detach();
            _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 165);
delete this.syncHandlers[hid];
        }

        _yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 168);
return this;
    }
};

_yuitest_coverline("build/gallery-zui-attribute/gallery-zui-attribute.js", 172);
Y.namespace('zui').Attribute = ZAttribute;


}, '@VERSION@', {"requires": ["attribute-base"]});
