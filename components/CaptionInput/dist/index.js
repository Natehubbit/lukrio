"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_native_1 = require("react-native");
var CaptionInputStyle_1 = require("./CaptionInputStyle");
var CaptionInput = function (_a) {
    var field = _a.field, control = _a.control;
    var _b = react_1.useState(false), showInput = _b[0], setShowInput = _b[1];
    var _c = react_1.useState(''), caption = _c[0], setCaption = _c[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        showInput &&
            ref.current &&
            ref.current.focus();
    }, [showInput]);
    var onAddCaption = function () {
        setShowInput(true);
    };
    var onBlur = function (val) {
        setShowInput(false);
        setCaption(val);
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [CaptionInputStyle_1["default"].container] },
        !showInput && react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onAddCaption },
            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 3, style: [CaptionInputStyle_1["default"].input] }, caption || 'Add caption')),
        showInput &&
            react_1["default"].createElement(react_hook_form_1.Controller, { name: field, control: control, render: function (_a) {
                    var _b = _a.field, onChange = _b.onChange, value = _b.value;
                    return (react_1["default"].createElement(react_native_1.TextInput, { ref: ref, multiline: true, onBlur: function () { return onBlur(value); }, onChangeText: onChange, value: value, style: [CaptionInputStyle_1["default"].input], placeholder: 'Add caption' }));
                } })));
};
exports["default"] = CaptionInput;
