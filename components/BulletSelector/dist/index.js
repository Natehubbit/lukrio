"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var BulletSelectorStyle_1 = require("./BulletSelectorStyle");
var store_1 = require("../../redux/store");
var slideSlice_1 = require("../../redux/slices/slideSlice");
var useEditor_1 = require("../../hooks/useEditor");
var BulletSelector = function (_a) {
    var dispatch = store_1.useDispatch();
    var _b = useEditor_1["default"](), textId = _b.textId, slideId = _b.slideId, bullet = _b.bullet;
    var _c = react_1.useState(bullet), value = _c[0], setValue = _c[1];
    var onPress = function (v) {
        setValue(v);
        dispatch(slideSlice_1.slideActions
            .setSubTextBullet({
            slideId: slideId,
            bullet: v,
            idx: textId
        }));
    };
    react_1.useEffect(function () {
        setValue(bullet);
    }, [textId, slideId, bullet]);
    return (react_1["default"].createElement(react_native_1.View, { style: [BulletSelectorStyle_1["default"].container] },
        react_1["default"].createElement(react_native_1.Text, { style: [BulletSelectorStyle_1["default"].label] }, "Bullet"),
        react_1["default"].createElement(react_native_1.Switch, { value: value, onValueChange: onPress })));
};
exports["default"] = BulletSelector;
