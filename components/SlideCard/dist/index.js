"use strict";
exports.__esModule = true;
var react_1 = require("react");
var moti_1 = require("moti");
var react_native_1 = require("react-native");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var SlideCardStyle_1 = require("./SlideCardStyle");
var AddText_1 = require("../AddText");
var ImageComponent_1 = require("../ImageComponent");
var SlideCard = function (_a) {
    var _b;
    var data = _a.data;
    var id = data.id, subTexts = data.subTexts, title = data.title, header = data.header, background = data.background;
    var hasMono = !!background.mono;
    var backColor = hasMono && {
        backgroundColor: background.mono
    };
    var gradient = !hasMono && ((_b = background === null || background === void 0 ? void 0 : background.colors) === null || _b === void 0 ? void 0 : _b.gradient);
    var hasImage = !!(background && (background === null || background === void 0 ? void 0 : background.image));
    return (react_1["default"].createElement(moti_1.View, { style: [SlideCardStyle_1["default"].container, backColor], from: { opacity: 0 }, animate: { opacity: 1 }, transition: { type: "timing", duration: 1000 } },
        !hasMono && gradient && (react_1["default"].createElement(expo_linear_gradient_1.LinearGradient, { colors: gradient, style: SlideCardStyle_1["default"].background })),
        hasImage && (react_1["default"].createElement(react_native_1.ImageBackground, { style: [SlideCardStyle_1["default"].imgBack], source: { uri: background.image } })),
        react_1["default"].createElement(react_native_1.View, { style: [SlideCardStyle_1["default"].content] },
            react_1["default"].createElement(react_native_1.View, { style: [SlideCardStyle_1["default"].titleContainer] },
                react_1["default"].createElement(react_native_1.Text, { style: [SlideCardStyle_1["default"].title] }, title)),
            react_1["default"].createElement(react_native_1.View, { style: [SlideCardStyle_1["default"].body] },
                react_1["default"].createElement(AddText_1["default"], { slideId: id, value: header, type: "header" }),
                subTexts.map(function (sub, i) {
                    return sub.type === "text" ? (react_1["default"].createElement(AddText_1["default"], { key: i, id: i, slideId: id, type: "subText", value: sub })) : (react_1["default"].createElement(ImageComponent_1["default"], { key: i, id: i, uri: sub.text }));
                }),
                react_1["default"].createElement(AddText_1["default"], { slideId: id, type: "adder" })))));
};
exports["default"] = SlideCard;
