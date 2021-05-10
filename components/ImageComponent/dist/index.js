"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var ImageComponentStyle_1 = require("./ImageComponentStyle");
var index_1 = require("../Icon/index");
var theme_1 = require("../../common/theme");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var store_1 = require("../../redux/store");
var slideSlice_1 = require("../../redux/slices/slideSlice");
var useEditor_1 = require("../../hooks/useEditor");
var ImageComponent = function (_a) {
    var uri = _a.uri, id = _a.id;
    var dispatch = store_1.useDispatch();
    var slideId = useEditor_1["default"]().slideId;
    var onDelete = function () {
        dispatch(slideSlice_1.slideActions.removeSubtext({
            idx: id,
            slideId: slideId
        }));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: [ImageComponentStyle_1["default"].container] },
        react_1["default"].createElement(react_native_1.View, { style: [ImageComponentStyle_1["default"].actions] },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onDelete },
                react_1["default"].createElement(index_1["default"], { size: react_native_responsive_screen_1.heightPercentageToDP('3%'), color: theme_1.COLORS.white.val, name: 'close-circle' }))),
        react_1["default"].createElement(react_native_1.Image, { resizeMode: 'cover', style: [ImageComponentStyle_1["default"].img], source: { uri: uri } })));
};
exports["default"] = ImageComponent;
