"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var CaptionInput_1 = require("../../components/CaptionInput");
var Editor_1 = require("../../components/Editor");
var Navbar_1 = require("../../components/Navbar");
var SlideShow_1 = require("../../components/SlideShow");
var react_native_responsive_screen_1 = require("react-native-responsive-screen");
var theme_1 = require("../../common/theme");
var useSlides_1 = require("../../hooks/useSlides");
var Home = function () {
    var slideRef = react_1.useRef();
    var slides = useSlides_1.useSlides();
    var onNext = function () {
        slideRef.current.snapToNext();
    };
    var onBack = function () {
        slideRef.current.snapToPrev();
    };
    var onSave = function () {
        console.log(slides);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Navbar_1["default"], { onNext: onNext, onBack: onBack }),
        react_1["default"].createElement(react_native_1.ScrollView, { keyboardShouldPersistTaps: "handled", contentContainerStyle: styles.container },
            react_1["default"].createElement(react_native_1.View, { style: [styles.contentContainer] },
                react_1["default"].createElement(react_native_1.View, { style: [styles.content] },
                    react_1["default"].createElement(SlideShow_1["default"], { innerRef: slideRef }),
                    react_1["default"].createElement(CaptionInput_1["default"], null)),
                react_1["default"].createElement(Editor_1["default"], null))),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onSave, style: [styles.save] },
            react_1["default"].createElement(react_native_1.Text, { style: styles.saveText }, "Save"))));
};
exports["default"] = Home;
var styles = react_native_1.StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        backgroundColor: theme_1.COLORS.white.val,
        minHeight: react_native_responsive_screen_1.widthPercentageToDP('85%')
    },
    contentContainer: {
        justifyContent: 'space-between'
    },
    content: {
        justifyContent: 'flex-start'
    },
    save: {
        padding: react_native_responsive_screen_1.widthPercentageToDP('5%'),
        backgroundColor: theme_1.COLORS.primary.val,
        justifyContent: 'center',
        alignItems: 'center',
        height: react_native_responsive_screen_1.widthPercentageToDP('15%')
    },
    saveText: {
        color: theme_1.COLORS.white.val,
        fontSize: react_native_responsive_screen_1.heightPercentageToDP('2.5%')
    }
});
