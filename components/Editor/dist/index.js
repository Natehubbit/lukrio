"use strict";
exports.__esModule = true;
var react_1 = require("react");
var moti_1 = require("moti");
var EditorItem_1 = require("../EditorItem");
var react_native_1 = require("react-native");
var style_1 = require("./style");
var index_1 = require("../IconButton/index");
var constants_1 = require("../../common/constants");
var store_1 = require("../../redux/store");
var slideSlice_1 = require("../../redux/slices/slideSlice");
var ColorSelector_1 = require("../ColorSelector");
var FontSelector_1 = require("../FontSelector");
var BulletSelector_1 = require("../BulletSelector");
var useEditor_1 = require("../../hooks/useEditor");
var ImageSelector_1 = require("../ImageSelector");
var Editor = function () {
    var _a = useEditor_1["default"](), slideId = _a.slideId, textType = _a.textType, textId = _a.textId, hasText = _a.hasText;
    var height = react_native_1.useWindowDimensions().height;
    var dispatch = store_1.useDispatch();
    var onUndo = function () {
        dispatch(slideSlice_1.slideActions.undo());
    };
    var onRedo = function () {
        dispatch(slideSlice_1.slideActions.redo());
    };
    var onAddImage = function (uri) {
        dispatch(slideSlice_1.slideActions.
            addSubImage({
            id: slideId,
            text: uri
        }));
    };
    return (react_1["default"].createElement(moti_1.View, { style: [style_1["default"].container], from: { translateY: height }, animate: { translateY: 0 }, transition: { type: 'spring', damping: 50 } },
        react_1["default"].createElement(moti_1.View, { style: [style_1["default"].header] },
            react_1["default"].createElement(react_native_1.Text, { style: [style_1["default"].heading] }, "Tools"),
            react_1["default"].createElement(moti_1.View, { style: [style_1["default"].actions] },
                react_1["default"].createElement(index_1["default"], { name: 'undo', onPress: onUndo }),
                react_1["default"].createElement(index_1["default"], { name: 'redo', onPress: onRedo }))),
        react_1["default"].createElement(moti_1.View, null, Object.keys(constants_1.EDIT_TOOLS).map(function (k, i) {
            var key = k;
            var isText = key === 'Text';
            var isBack = key === 'Background';
            var isAddImg = key === 'Add Images';
            var textExpanded = textType === 'text' && textId !== undefined;
            var imageExpanded = textType === 'image' && textId !== undefined;
            var isIcon = key === 'Icons';
            return react_1["default"].createElement(EditorItem_1["default"], { expanded: isText
                    ? textExpanded
                    : imageExpanded, key: key, label: key }, (hasText && isText)
                ? react_1["default"].createElement(react_1["default"].Fragment, null,
                    isText && react_1["default"].createElement(BulletSelector_1["default"], null),
                    isText && react_1["default"].createElement(FontSelector_1["default"], null),
                    isText && react_1["default"].createElement(ColorSelector_1["default"], { type: 'text' }))
                : isBack
                    ? react_1["default"].createElement(ColorSelector_1["default"], { isGradient: true, type: 'background' })
                    : isAddImg
                        ? react_1["default"].createElement(ImageSelector_1["default"], { onSelect: onAddImage })
                        : !isIcon && react_1["default"].createElement(moti_1.View, { style: [style_1["default"].noTextSelected] },
                            react_1["default"].createElement(react_native_1.Text, null, "Select a text to edit")));
        }))));
};
exports["default"] = Editor;
