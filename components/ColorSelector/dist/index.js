"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var ColorSelectorStyle_1 = require("./ColorSelectorStyle");
var slideSlice_1 = require("../../redux/slices/slideSlice");
var store_1 = require("../../redux/store");
var useEditor_1 = require("../../hooks/useEditor");
var constants_1 = require("../../common/constants");
var ImageSelector_1 = require("../ImageSelector");
var GradientSelector_1 = require("../GradientSelector");
var Color_1 = require("../Color");
var ColorSelector = function (_a) {
    var _b;
    var type = _a.type;
    var dispatch = store_1.useDispatch();
    var _c = useEditor_1["default"](), textId = _c.textId, slideId = _c.slideId, style = _c.style, background = _c.background;
    var _d = react_1.useState(), color = _d[0], setColor = _d[1];
    var _e = react_1.useState((_b = background === null || background === void 0 ? void 0 : background.colors) === null || _b === void 0 ? void 0 : _b.gradient), colors = _e[0], setColors = _e[1];
    var _f = react_1.useState('gradient'), mode = _f[0], setMode = _f[1];
    var isGradient = mode === 'gradient';
    var isBackground = type === 'background';
    var isImage = mode === 'image';
    var isText = type === 'text';
    var isMono = mode === 'mono';
    react_1.useEffect(function () {
        var _a;
        if (!isBackground) {
            (style === null || style === void 0 ? void 0 : style.color) ? setColor(style.color)
                : setColor(undefined);
        }
        else {
            setColors((_a = background === null || background === void 0 ? void 0 : background.colors) === null || _a === void 0 ? void 0 : _a.gradient);
        }
    }, [textId, slideId, style, background]);
    react_1.useEffect(function () {
        if (mode === 'mono') {
            setColor(undefined);
        }
    }, [mode]);
    var onSlectColor = function (color) {
        setColor(color);
        !isBackground && dispatch(slideSlice_1.slideActions
            .setSubtextStyle({
            idx: textId,
            slideId: slideId,
            style: { color: color }
        }));
        if (isBackground) {
            setMonoBackground(color);
        }
    };
    var setMonoBackground = function (color) {
        isBackground && dispatch(slideSlice_1.slideActions
            .setBackground({
            slideId: slideId,
            background: {
                mono: color,
                colors: {
                    gradient: undefined
                },
                image: undefined
            }
        }));
    };
    var onChangeMode = function (val, type) {
        val
            ? setMode(type)
            : setMode('mono');
    };
    var onSelectImage = function (uri) {
        dispatch(slideSlice_1.slideActions
            .setBackground({
            slideId: slideId,
            background: {
                mono: undefined,
                colors: {
                    gradient: undefined
                },
                image: uri
            }
        }));
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        isBackground && react_1["default"].createElement(react_native_1.View, { style: [ColorSelectorStyle_1["default"].modeContainer] }, constants_1.BACKGROUND_TYPE.map(function (t) {
            var backType = t.toLowerCase();
            return react_1["default"].createElement(react_native_1.View, { key: t, style: ColorSelectorStyle_1["default"].mode },
                react_1["default"].createElement(react_native_1.Text, null, t),
                react_1["default"].createElement(react_native_1.Switch, { value: mode === backType, onValueChange: function (v) { return onChangeMode(v, backType); } }));
        })),
        react_1["default"].createElement(react_native_1.View, { style: ColorSelectorStyle_1["default"].container },
            isGradient &&
                isBackground &&
                react_1["default"].createElement(react_native_1.View, { style: ColorSelectorStyle_1["default"].typeContainer },
                    react_1["default"].createElement(GradientSelector_1["default"], null)),
            (!isImage &&
                !isGradient) ||
                isText
                    && react_1["default"].createElement(react_native_1.View, { style: ColorSelectorStyle_1["default"].colorContainer }, constants_1.COLORS.map(function (c) { return react_1["default"].createElement(Color_1["default"], { key: c, active: c === color, onPress: function () { return onSlectColor(c); }, color: c }); })),
            isMono &&
                isBackground &&
                react_1["default"].createElement(react_native_1.View, { style: ColorSelectorStyle_1["default"].colorContainer }, constants_1.COLORS.map(function (c) { return react_1["default"].createElement(Color_1["default"], { key: c, active: c === color, onPress: function () { return onSlectColor(c); }, color: c }); })),
            isImage &&
                react_1["default"].createElement(ImageSelector_1["default"], { uri: background === null || background === void 0 ? void 0 : background.image, onSelect: onSelectImage }))));
};
exports["default"] = ColorSelector;
