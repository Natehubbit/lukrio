"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Icon_1 = require("../Icon");
var NavbarStyle_1 = require("./NavbarStyle");
var useEditor_1 = require("../../hooks/useEditor");
var Navbar = function (_a) {
    var onNext = _a.onNext, onBack = _a.onBack;
    var _b = useEditor_1["default"](), title = _b.title, setSlideId = _b.setSlideId;
    return (react_1["default"].createElement(react_native_1.View, { style: [NavbarStyle_1["default"].container] },
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: [NavbarStyle_1["default"].back], onPress: onBack },
            react_1["default"].createElement(Icon_1["default"], { color: NavbarStyle_1["default"].link.color, name: "arrow-left", size: 30 }),
            react_1["default"].createElement(react_native_1.Text, { style: [NavbarStyle_1["default"].link] }, "Back")),
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.Text, { style: [NavbarStyle_1["default"].head] }, title)),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onNext },
            react_1["default"].createElement(react_native_1.Text, { style: [NavbarStyle_1["default"].link] }, "Next"))));
};
exports["default"] = Navbar;
