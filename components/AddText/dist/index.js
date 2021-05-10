"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Icon_1 = require("../Icon");
var AddTextStyle_1 = require("./AddTextStyle");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var theme_1 = require("../../common/theme");
var store_1 = require("../../redux/store");
var slideSlice_1 = require("../../redux/slices/slideSlice");
var useEditor_1 = require("../../hooks/useEditor");
var AddText = function (_a) {
    var slideId = _a.slideId, id = _a.id, type = _a.type, value = _a.value;
    var dispatch = store_1.useDispatch();
    var _b = value || {
        text: '', bullet: false, style: undefined
    }, bullet = _b.bullet, val = _b.text, subStyle = _b.style;
    var _c = useEditor_1["default"](), setTextId = _c.setTextId, subTextNo = _c.subTextNo;
    var _d = react_1.useState(false), editing = _d[0], setEditing = _d[1];
    var _e = react_1.useState(val || ''), text = _e[0], setText = _e[1];
    var ref = react_1.useRef(null);
    var isHeader = type === 'header';
    var isAdder = type === 'adder';
    react_1.useEffect(function () {
        editing &&
            ref.current &&
            ref.current.focus();
    }, [editing]);
    var onEdit = function () {
        setEditing(true);
    };
    var onBlur = function (val) {
        setEditing(false);
        setText(val);
        if (isHeader) {
            dispatch(slideSlice_1.slideActions.
                setHeader({ id: slideId, text: val }));
        }
        if (isAdder) {
            setText('');
        }
        if (val && !text && !isHeader) {
            dispatch(slideSlice_1.slideActions
                .addSubText({
                id: slideId,
                text: val
            }));
        }
        if (val && text && !isHeader) {
            dispatch(slideSlice_1.slideActions
                .updateSubtext({
                slideId: slideId,
                text: val,
                textId: id
            }));
        }
    };
    var onDelete = function () {
        dispatch(slideSlice_1.slideActions.removeSubtext({
            idx: id,
            slideId: slideId
        }));
    };
    var style = isHeader ?
        AddTextStyle_1["default"].title : AddTextStyle_1["default"].subText;
    var spacing = !isHeader ?
        AddTextStyle_1["default"].subSpace : AddTextStyle_1["default"].titleSpace;
    var hasSubText = !!text && !isHeader && !editing;
    var textStyle = (hasSubText) && AddTextStyle_1["default"].editedSubText;
    var subTextRootStyle = hasSubText && AddTextStyle_1["default"].editedSubContainer;
    return (react_1["default"].createElement(react_native_1.View, { style: [AddTextStyle_1["default"].root, spacing] },
        bullet && react_1["default"].createElement(react_native_1.View, { style: [AddTextStyle_1["default"].bullet] }),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onEdit, style: [AddTextStyle_1["default"].container, subTextRootStyle] }, !editing ? react_1["default"].createElement(react_native_1.Text, { numberOfLines: 10, style: [style, textStyle, subStyle] }, !!val ? val : isHeader
            ? 'Tap to add title' : 'Tap to add subtext')
            : react_1["default"].createElement(react_native_1.TextInput, { ref: ref, style: [style], multiline: !isHeader, defaultValue: val, onEndEditing: function (e) { return onBlur(e.nativeEvent.text); } })),
        hasSubText && react_1["default"].createElement(react_native_1.View, { style: [AddTextStyle_1["default"].btns] },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return setTextId(id); }, style: [AddTextStyle_1["default"].actionBtn] },
                react_1["default"].createElement(Icon_1["default"], { name: 'text', color: theme_1.COLORS.white.val, size: react_native_responsive_screen_1.heightPercentageToDP('3%') })),
            !isHeader && react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onDelete, style: [AddTextStyle_1["default"].actionBtn] },
                react_1["default"].createElement(Icon_1["default"], { name: 'close-circle', color: theme_1.COLORS.white.val, size: react_native_responsive_screen_1.heightPercentageToDP('3%') })))));
};
exports["default"] = AddText;
