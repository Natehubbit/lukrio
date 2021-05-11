"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var theme_1 = require("../../common/theme");
var UtilService_1 = require("../../services/UtilService");
var EditorItemStyle_1 = require("./EditorItemStyle");
var vector_icons_1 = require("@expo/vector-icons");
var moti_1 = require("moti");
var EditorItem = function (_a) {
    var label = _a.label, expanded = _a.expanded, children = _a.children;
    var _b = react_1.useState(expanded || false), expand = _b[0], setExpand = _b[1];
    var icon = expand ? "chevron-down" : "chevron-right";
    react_1.useEffect(function () {
        setExpand(expanded);
    }, [expanded]);
    var onExpand = function () {
        setExpand(function (e) { return !e; });
    };
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.TouchableNativeFeedback, { onPress: onExpand },
            react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
                react_1["default"].createElement(expo_linear_gradient_1.LinearGradient, { style: [EditorItemStyle_1["default"].gradient], colors: [
                        UtilService_1["default"].alterColor(theme_1.COLORS.color1.val, theme_1.COLORS.color1.step),
                        theme_1.COLORS.color1.val,
                    ], start: [0.8, 0] }),
                react_1["default"].createElement(react_native_1.View, { style: [EditorItemStyle_1["default"].header] },
                    react_1["default"].createElement(react_native_1.Text, { style: [EditorItemStyle_1["default"].head] }, label),
                    react_1["default"].createElement(vector_icons_1.MaterialCommunityIcons, { name: icon, style: EditorItemStyle_1["default"].head, size: EditorItemStyle_1["default"].head.fontSize })))),
        expand && (react_1["default"].createElement(moti_1.ScrollView, { contentContainerStyle: [EditorItemStyle_1["default"].itemBody] }, children))));
};
exports["default"] = EditorItem;
