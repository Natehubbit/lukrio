"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Icon_1 = require("../Icon");
var style_1 = require("./style");
var Navbar = function (_a) {
    var title = _a.title;
    var onBack = function () {
    };
    var onNext = function () {
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [style_1["default"].container] },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [style_1["default"].back], onPress: onBack },
            react_1["default"].createElement(Icon_1["default"], { color: style_1["default"].link.color, name: 'arrow-left', size: 30 }),
            react_1["default"].createElement(react_native_1.Text, { style: [style_1["default"].link] }, "Back")),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Text, { style: [style_1["default"].head] }, title)),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onNext },
            react_1["default"].createElement(react_native_1.Text, { style: [style_1["default"].link] }, "Next"))));
};
exports["default"] = Navbar;
