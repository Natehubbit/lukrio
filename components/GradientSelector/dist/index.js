"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var GradientSelectorStyle_1 = require("./GradientSelectorStyle");
var useEditor_1 = require("../../hooks/useEditor");
var Color_1 = require("../Color");
var slideSlice_1 = require("../../redux/slices/slideSlice");
var store_1 = require("../../redux/store");
var Icon_1 = require("../Icon");
var theme_1 = require("../../common/theme");
var constants_1 = require("../../common/constants");
var GradientSelector = function () {
    var _a = useEditor_1["default"](), background = _a.background, slideId = _a.slideId;
    var _b = react_1.useState([]), gradients = _b[0], setGradients = _b[1];
    var dispatch = store_1.useDispatch();
    var hasGradient = gradients && gradients.length > 2;
    react_1.useEffect(function () {
        if (background) {
            console.log('Back', background);
            var gradient = (background || {
                colors: {
                    gradient: ['transparent', 'transparent']
                }
            }).colors.gradient;
            setGradients(gradient);
        }
        else
            setGradients([]);
    }, [background]);
    var onSelect = function (c, index) {
        var grad = gradients && gradients.map(function (g, i) {
            if (i === index) {
                return c;
            }
            return g;
        });
        setGradients(grad);
        dispatch(slideSlice_1.slideActions
            .setBackground({
            slideId: slideId,
            background: {
                colors: {
                    gradient: grad
                }
            }
        }));
    };
    var onAddGradient = function () {
        var hasGradient = !!gradients;
        dispatch(slideSlice_1.slideActions
            .setBackground({
            slideId: slideId,
            background: {
                image: undefined,
                mono: undefined,
                colors: {
                    gradient: hasGradient
                        ? __spreadArrays(gradients, ['transparent']) : ['transparent', 'transparent']
                }
            }
        }));
    };
    var onRemoveGradient = function (id) {
        setGradients(function (grads) {
            return grads.filter(function (_, i) { return id !== i; });
        });
        var newGradients = gradients.filter(function (_, i) { return id !== i; });
        dispatch(slideSlice_1.slideActions
            .setBackground({
            slideId: slideId,
            background: {
                image: undefined,
                mono: undefined,
                colors: {
                    gradient: newGradients
                }
            }
        }));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [GradientSelectorStyle_1["default"].container] },
        gradients &&
            gradients.map(function (col, i) {
                return react_1["default"].createElement(react_native_1.View, { key: i, style: [GradientSelectorStyle_1["default"].row] },
                    react_1["default"].createElement(react_native_1.View, { style: [GradientSelectorStyle_1["default"].head] },
                        react_1["default"].createElement(react_native_1.Text, { style: [GradientSelectorStyle_1["default"].label] },
                            "Gradient ",
                            i + 1),
                        hasGradient && react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return onRemoveGradient(i); } },
                            react_1["default"].createElement(Icon_1["default"], { name: 'close-circle', color: theme_1.COLORS.primary.val, size: 25 }))),
                    react_1["default"].createElement(react_native_1.View, { style: [GradientSelectorStyle_1["default"].colors] }, constants_1.COLORS.map(function (c) {
                        return react_1["default"].createElement(Color_1["default"], { active: c === col, key: c, color: c, onPress: function () { return onSelect(c, i); } });
                    })));
            }),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onAddGradient, style: [GradientSelectorStyle_1["default"].add] },
            react_1["default"].createElement(react_native_1.Text, { style: [GradientSelectorStyle_1["default"].addText] }, "+Add Gradient"))));
};
exports["default"] = GradientSelector;
