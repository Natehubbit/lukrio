"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var CaptionInputStyle_1 = require("./CaptionInputStyle");
var useEditor_1 = require("../../hooks/useEditor");
var slideSlice_1 = require("../../redux/slices/slideSlice");
var store_1 = require("../../redux/store");
var CaptionInput = function () {
    var dispatch = store_1.useDispatch();
    var slideId = useEditor_1["default"]().slideId;
    var captionText = useEditor_1["default"]().captionText;
    var _a = react_1.useState(false), showInput = _a[0], setShowInput = _a[1];
    var _b = react_1.useState(), input = _b[0], setInput = _b[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        showInput && ref.current && ref.current.focus();
    }, [showInput]);
    var onAddCaption = function () {
        setShowInput(true);
    };
    var onBlur = function () {
        setShowInput(false);
        dispatch(slideSlice_1.slideActions.setCaption({
            id: slideId,
            text: input
        }));
    };
    var onChange = function (v) {
        setInput(v);
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [CaptionInputStyle_1["default"].container] },
        !showInput && (react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onAddCaption },
            react_1["default"].createElement(react_native_1.Text, { numberOfLines: 3, style: [CaptionInputStyle_1["default"].input] }, captionText || "Add caption"))),
        showInput && (react_1["default"].createElement(react_native_1.TextInput, { ref: ref, multiline: true, onChangeText: onChange, defaultValue: captionText, onBlur: onBlur, style: [CaptionInputStyle_1["default"].input], placeholder: "Add caption" }))));
};
exports["default"] = CaptionInput;
